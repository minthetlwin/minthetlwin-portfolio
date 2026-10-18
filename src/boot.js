// Tells the boot screen (public/index.html) that the first view is ready to show:
// app stylesheet applied (it loads without blocking paint, see scripts/postbuild.js),
// web fonts loaded and the first above-the-fold image decoded, so nothing pops in
// after the screen lifts. Capped so one slow image can never hold the page hostage.
const MAX_WAIT_MS = 4000;

function firstImageReady() {
  const img = document.querySelector(".bento__photo img, .case__stage img");
  if (!img) return Promise.resolve();
  if (img.complete) return img.decode ? img.decode().catch(() => {}) : Promise.resolve();
  return new Promise((resolve) => {
    img.addEventListener("load", resolve, { once: true });
    img.addEventListener("error", resolve, { once: true });
  });
}

function appStylesReady() {
  const link = document.getElementById("app-css");
  if (!link || (link.rel === "stylesheet" && link.sheet)) return Promise.resolve();
  return new Promise((resolve) => {
    link.addEventListener("load", () => requestAnimationFrame(resolve), { once: true });
    link.addEventListener("error", resolve, { once: true });
  });
}

export function signalReady() {
  // Wait two frames so React has committed the first render to the DOM
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      // document.fonts.ready only covers fonts already requested, so ask for the icon fonts explicitly
      const fonts = document.fonts
        ? Promise.all([
            document.fonts.ready,
            document.fonts.load('900 16px "Font Awesome 5 Free"'),
            document.fonts.load('400 16px "Font Awesome 5 Brands"'),
          ]).catch(() => {})
        : Promise.resolve();
      const timeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS));
      // The stylesheet is never skipped by the timeout: lifting onto an unstyled page is worse than waiting
      Promise.all([appStylesReady(), Promise.race([Promise.all([fonts, firstImageReady()]), timeout])]).then(() => {
        if (typeof window.__bootDone === "function") window.__bootDone();
      });
    })
  );
}
