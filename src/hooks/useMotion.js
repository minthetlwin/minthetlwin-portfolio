import { useEffect } from "react";

/*
 * Scroll motion engine. Three kinds of motion, all declared in markup:
 *
 *   [data-reveal]        plays once when the element enters the viewport (adds .is-in).
 *                        CSS decides what that looks like (see "MOTION" in style.css).
 *   [data-scrub="type"]  tied to scroll position: the engine writes --p (0 → 1) on the
 *                        element every frame while it is near the viewport; CSS maps --p
 *                        to transforms. Types differ only in which scroll range maps to 0–1.
 *   [data-count]         counts its number up from 0 the first time it is revealed.
 *   [data-stagger]       a container whose direct children reveal one after another
 *                        (the engine numbers them with --i and adds .is-in to the container).
 *
 * An element may carry several of these; each kind is registered independently.
 *
 * Progressive enhancement: CSS defaults every scrub to --p: 1 and never hides content
 * unless html.js-reveal is set, which only happens here, after feature checks and only
 * when the user hasn't asked for reduced motion.
 */

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

// Scroll range per scrub type → progress 0..1
const RANGES = {
  // Element's top travels from the bottom of the viewport to 40% of its height
  enter: (r, vh) => (vh - r.top) / (vh * 0.6),
  // Whole pass through the viewport (parallax / zoom)
  through: (r, vh) => (vh - r.top) / (vh + r.height),
  // Line drawing: tracks a reading line at 70% of the viewport down the element
  draw: (r, vh) => (vh * 0.7 - r.top) / r.height,
  // Word highlight: completes while the text moves from 90% to 45% of the viewport
  read: (r, vh) => (vh * 0.9 - r.top) / (vh * 0.45),
  // Element leaving through the top (hero)
  exit: (r) => -r.top / r.height,
};
// Section "sheet": completes as the section's top rises from the bottom to 35% of the viewport
RANGES.sheet = (r, vh) => (vh - r.top) / (vh * 0.65);
RANGES.tilt = RANGES.enter;
RANGES.zoom = RANGES.through;
RANGES.drift = RANGES.through;

function easeOutExpo(t) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// "3,000+" → { value: 3000, suffix: "+", commas: true }; non-numeric text returns null
function parseCount(text) {
  const match = /^([\d,]+(?:\.\d+)?)(.*)$/.exec(text.trim());
  if (!match) return null;
  return { value: parseFloat(match[1].replace(/,/g, "")), suffix: match[2], commas: match[1].includes(",") };
}

function countUp(el) {
  const final = el.dataset.countFinal || el.textContent;
  el.dataset.countFinal = final;
  const parsed = parseCount(final);
  if (!parsed) return;
  const duration = 1400;
  const start = performance.now();
  const format = (n) => (parsed.commas ? Math.round(n).toLocaleString("en-US") : String(Math.round(n)));
  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    el.textContent = format(parsed.value * easeOutExpo(t)) + parsed.suffix;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = final;
  };
  requestAnimationFrame(tick);
}

export default function useMotion(routeKey) {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window) || window.matchMedia(REDUCED_MOTION).matches) {
      root.classList.remove("js-reveal");
      return undefined;
    }
    root.classList.add("js-reveal");

    /* ---- One-shot reveals and counters ---- */
    const reveal = (el) => {
      if (el.classList.contains("is-in")) return;
      el.classList.add("is-in");
      if (el.hasAttribute("data-stagger")) {
        Array.from(el.children).forEach((child, i) => child.style.setProperty("--i", i));
      }
      if (el.hasAttribute("data-count")) countUp(el);
      el.querySelectorAll?.("[data-count]").forEach(countUp);
      revealIO.unobserve(el);
    };
    const revealIO = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && reveal(entry.target)),
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    // The -10% margin means content in the last strip of the page could never qualify;
    // once the page is scrolled to the end, reveal whatever is on screen.
    const revealAtEnd = () => {
      const vh = window.innerHeight;
      if (window.scrollY + vh < document.documentElement.scrollHeight - 2) return;
      document.querySelectorAll("[data-m-reveal]:not(.is-in), [data-m-stagger]:not(.is-in)").forEach((el) => {
        if (el.getBoundingClientRect().top < vh) reveal(el);
      });
    };

    /* ---- Scroll-linked scrubs: only elements near the viewport are updated ---- */
    const active = new Set();
    const scrubIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) active.add(entry.target);
          else active.delete(entry.target);
        });
        schedule();
      },
      { rootMargin: "25% 0px 25% 0px" }
    );

    let frame = 0;
    const update = () => {
      frame = 0;
      revealAtEnd();
      const vh = window.innerHeight;
      active.forEach((el) => {
        const range = RANGES[el.dataset.scrub] || RANGES.enter;
        let p = clamp01(range(el.getBoundingClientRect(), vh));
        if (el.dataset.scrub === "tilt") p = 1 - Math.pow(1 - p, 3); // ease-out: settles softly
        p = Math.round(p * 1000) / 1000;
        if (el._p !== p) {
          el._p = p;
          el.style.setProperty("--p", p);
        }
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    /* ---- Register everything currently in the DOM, and anything added later ---- */
    const register = (selector, marker, observe) => {
      document.querySelectorAll(`${selector}:not([${marker}])`).forEach((el) => {
        el.setAttribute(marker, "");
        observe(el);
      });
    };
    // One-shot reveals wait until the boot screen has lifted, so they're actually seen
    const booting = () => root.classList.contains("is-loading");
    const scan = () => {
      if (!booting()) {
        register("[data-reveal]", "data-m-reveal", (el) => revealIO.observe(el));
        register("[data-stagger]", "data-m-stagger", (el) => revealIO.observe(el));
      }
      register("[data-count]", "data-m-count", (el) => {
        if (!el.closest("[data-reveal], [data-stagger]")) revealIO.observe(el);
      });
      register("[data-scrub]", "data-m-scrub", (el) => scrubIO.observe(el));
      schedule();
    };

    scan();
    const bootWatch = new MutationObserver(() => !booting() && (bootWatch.disconnect(), scan()));
    if (booting()) bootWatch.observe(root, { attributes: true, attributeFilter: ["class"] });
    const mo = new MutationObserver(scan);
    mo.observe(document.getElementById("root") || document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      revealIO.disconnect();
      scrubIO.disconnect();
      mo.disconnect();
      bootWatch.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ["data-m-reveal", "data-m-stagger", "data-m-count", "data-m-scrub"].forEach((m) =>
        document.querySelectorAll(`[${m}]`).forEach((el) => el.removeAttribute(m))
      );
    };
  }, [routeKey]);
}
