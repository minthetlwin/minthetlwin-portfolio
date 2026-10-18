import React from "react";

/**
 * Marks an element to animate in the first time it scrolls into view (see hooks/useMotion).
 *
 * variant  "up" (default) rise + fade + focus · "scale" for media and large tiles · "fade"
 * index    position in a group; each step delays the entrance by 70ms for a stagger
 */
export default function Reveal({ as: Tag = "div", variant = "up", index = 0, className = "", style, children, ...rest }) {
  return (
    <Tag
      data-reveal={variant}
      className={className || undefined}
      style={index ? { "--i": index, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
