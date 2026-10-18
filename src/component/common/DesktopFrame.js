import React from "react";

// App screenshot on a Studio Display–style monitor: aluminium enclosure, uniform black
// glass bezel with a glass sheen, and an aluminium stand. Drawn entirely in CSS and sized
// in container units, so it keeps its proportions at any width.
export default function DesktopFrame({ src, alt = "", className = "", eager = false }) {
  return (
    <figure className={`desktop ${className}`.trim()}>
      <div className="desktop__enclosure">
        <div className="desktop__glass">
          <span className="desktop__camera" aria-hidden="true"></span>
          <div className="desktop__display">
            <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} draggable="false" />
            <span className="desktop__sheen" aria-hidden="true"></span>
          </div>
        </div>
      </div>
      <div className="desktop__stand" aria-hidden="true">
        <span className="desktop__neck"></span>
        <span className="desktop__foot"></span>
        <span className="desktop__floor"></span>
      </div>
    </figure>
  );
}
