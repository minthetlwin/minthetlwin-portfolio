import React from "react";

// iPad Pro (current design) in landscape: aluminium edge, thin even bezel,
// front camera on the long top edge. The display takes the screenshot's ratio.
export default function TabletFrame({ src, alt = "", className = "", eager = false }) {
  return (
    <figure className={`tablet ${className}`.trim()}>
      <span className="tablet__button tablet__button--power" aria-hidden="true"></span>
      <span className="tablet__button tablet__button--vol-up" aria-hidden="true"></span>
      <span className="tablet__button tablet__button--vol-down" aria-hidden="true"></span>
      <div className="tablet__body">
        <span className="tablet__camera" aria-hidden="true"></span>
        <div className="tablet__screen">
          <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} draggable="false" />
        </div>
      </div>
    </figure>
  );
}
