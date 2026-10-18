import { useCallback, useEffect, useRef, useState } from "react";

// Browsers with `scrollend` release exactly when the scroll stops; the timeout is only
// a safety net there (e.g. the target was already in place, so no scroll happened).
const RELEASE_FALLBACK_MS = typeof window !== "undefined" && "onscrollend" in window ? 3000 : 1000;

/**
 * Tracks which section the reader is in, from scroll position rather than
 * intersection events, so the answer is always derived from the current state:
 *
 * - active = the last section whose top has passed a marker line
 *   (`topOffset` px + `ratio` of the remaining viewport height)
 * - above the first section (e.g. the hero) -> "" so nothing is highlighted
 * - scrolled to the very bottom -> the last section, even if it's too short
 *   to ever reach the marker
 *
 * `lockTo(id)` highlights a clicked link immediately and ignores intermediate
 * sections during the smooth scroll, releasing on `scrollend`, on user input,
 * or after a fallback timeout.
 *
 * `ids` should be a stable array (define it at module level).
 */
export default function useScrollSpy(ids, { enabled = true, topOffset = 0, ratio = 0.3 } = {}) {
  const [active, setActive] = useState("");
  const lockRef = useRef(false);
  const computeRef = useRef(() => {});

  useEffect(() => {
    if (!enabled) {
      setActive("");
      return undefined;
    }

    // Runs directly in the scroll handler: browsers already dispatch scroll events at
    // most once per frame, and a few getBoundingClientRect() calls are cheap.
    const compute = () => {
      if (lockRef.current) return;

      const viewport = window.innerHeight;
      const marker = topOffset + (viewport - topOffset) * ratio;
      const atBottom = window.scrollY + viewport >= document.documentElement.scrollHeight - 2;

      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (atBottom || el.getBoundingClientRect().top <= marker) current = id;
      }
      // At the bottom only count sections that are actually on screen.
      if (atBottom && current) {
        const last = document.getElementById(current);
        if (last && last.getBoundingClientRect().top >= viewport) current = "";
      }
      setActive(current);
    };

    computeRef.current = compute;
    compute();

    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    // Images and fonts loading change section positions without a scroll event.
    const resizeObserver = new ResizeObserver(compute);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      resizeObserver.disconnect();
      computeRef.current = () => {};
    };
  }, [enabled, ids, topOffset, ratio]);

  const lockTo = useCallback((id) => {
    setActive(id);
    lockRef.current = true;

    const events = ["scrollend", "wheel", "touchstart", "keydown"];
    let timer = 0;
    const release = () => {
      lockRef.current = false;
      clearTimeout(timer);
      events.forEach((type) => window.removeEventListener(type, release));
      computeRef.current();
    };

    // Wait a frame so the smooth scroll has started before listening for its end.
    requestAnimationFrame(() => {
      events.forEach((type) => window.addEventListener(type, release, { once: true, passive: true }));
    });
    timer = setTimeout(release, RELEASE_FALLBACK_MS);
  }, []);

  return [active, lockTo];
}
