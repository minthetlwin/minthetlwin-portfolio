import { useEffect } from "react";

/**
 * Soft light that follows the cursor across any `.tile`. One delegated listener for the
 * whole page writes --mx / --my on the hovered tile; CSS draws the glow (".tile::after").
 * Only for devices with a precise pointer that can hover.
 */
export default function usePointerGlow() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;

    let frame = 0;
    let last = null;
    const onMove = (e) => {
      last = e;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const tile = last.target.closest?.(".tile");
        if (!tile) return;
        const r = tile.getBoundingClientRect();
        tile.style.setProperty("--mx", `${last.clientX - r.left}px`);
        tile.style.setProperty("--my", `${last.clientY - r.top}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);
}
