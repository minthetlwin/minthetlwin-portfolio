import React from "react";

// iPhone Pro / Pro Max: titanium band, thin black bezel, Dynamic Island, side buttons.
// The screenshot fills the screen from the top. Drawn in CSS.
export default function PhoneFrame({ src, alt = "", className = "", eager = false, model = "pro" }) {
  return (
    <figure className={`phone phone--${model} ${className}`.trim()}>
      <span className="phone__button phone__button--action" aria-hidden="true"></span>
      <span className="phone__button phone__button--vol-up" aria-hidden="true"></span>
      <span className="phone__button phone__button--vol-down" aria-hidden="true"></span>
      <span className="phone__button phone__button--power" aria-hidden="true"></span>
      <div className="phone__body">
        <div className="phone__screen">
          <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} draggable="false" />
          <span className="phone__island" aria-hidden="true"></span>
          <span className="phone__home-bar" aria-hidden="true"></span>
        </div>
      </div>
    </figure>
  );
}
