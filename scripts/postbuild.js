/*
 * Post-build: make the app stylesheet non-render-blocking.
 *
 * CRA injects <link rel="stylesheet"> in <head>, and browsers paint nothing until it
 * downloads; on slow networks that was ~6s of blank screen. The boot screen in
 * public/index.html has its own inline styles and covers the page, so the stylesheet can
 * load in the background: it is fetched at high priority as a preload, applied on load,
 * and src/boot.js waits for it before lifting the boot screen. <noscript> keeps a plain
 * stylesheet for browsers without JavaScript.
 *
 * Also preloads the icon fonts. They are referenced from the stylesheet, so browsers would
 * only discover them after the CSS and JS run (~10s on a slow 3G connection, leaving empty
 * boxes where icons belong). Preloading starts them with the first request instead.
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "build", "index.html");
const html = fs.readFileSync(file, "utf8");

const pattern = /<link href="(\/static\/css\/[^"]+\.css)" rel="stylesheet">/g;
let count = 0;
const out = html.replace(pattern, (_, href) => {
  count += 1;
  return (
    `<link id="app-css" rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
    `<noscript><link rel="stylesheet" href="${href}"></noscript>`
  );
});

if (count !== 1) {
  console.error(`postbuild: expected 1 app stylesheet in build/index.html, found ${count}`);
  process.exit(1);
}

const mediaDir = path.join(__dirname, "..", "build", "static", "media");
const fonts = fs.readdirSync(mediaDir).filter((f) => /^fa-(solid-900|brands-400)\.[0-9a-f]+\.woff2$/.test(f));
if (fonts.length !== 2) {
  console.error(`postbuild: expected 2 icon fonts to preload, found ${fonts.length}`);
  process.exit(1);
}
const preloads = fonts
  .map((f) => `<link rel="preload" as="font" type="font/woff2" href="/static/media/${f}" crossorigin>`)
  .join("");
const final = out.replace("<link id=\"app-css\"", `${preloads}<link id="app-css"`);

fs.writeFileSync(file, final);
console.log("postbuild: app stylesheet now loads without blocking first paint; icon fonts preloaded");
