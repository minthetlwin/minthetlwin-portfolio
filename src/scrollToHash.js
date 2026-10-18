import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // New page without a hash: start at the top, instantly.
      window.scrollTo({ top: 0, behavior: "auto" });
      return undefined;
    }

    // Give the target route a moment to render before scrolling to the anchor.
    // Sections set scroll-margin-top so the sticky nav never covers headings.
    const timer = setTimeout(() => {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
