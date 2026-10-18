import React from "react";

// Website screenshot shown on a laptop: bezel + 16:10 display + aluminium base.
// Drawn entirely in CSS so it stays crisp at any size and in both themes.
export default function LaptopFrame({ src, alt = "", className = "", eager = false }) {
  return (
    <figure className={`laptop ${className}`.trim()}>
      <div className="laptop__lid">
        <span className="laptop__camera" aria-hidden="true"></span>
        <div className="laptop__display">
          <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} draggable="false" />
        </div>
      </div>
      <div className="laptop__base" aria-hidden="true">
        <span className="laptop__notch"></span>
      </div>
    </figure>
  );
}
