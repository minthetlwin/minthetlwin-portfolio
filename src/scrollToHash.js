import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element matching the hash (e.g., id="projects" or id="work")
      const targetElement = document.getElementById(hash.replace("#", ""));
      
      if (targetElement) {
        // Delay slightly to give the DOM/images time to load and render
        const timer = setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);

        return () => clearTimeout(timer);
      }
    } else {
      // If navigating to a page without a hash, snap back to the very top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]); // Fires every time the route or hash changes

  return null;
}