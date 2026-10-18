import React from "react";

/**
 * Text split into words for word-by-word motion. Screen readers get the plain text
 * (aria-label) and the word spans are hidden from them.
 *
 * mode "rise"  each word slides up from behind a mask when revealed (headlines)
 * mode "read"  words brighten one after another as the text scrolls through (leads)
 */
export default function SplitText({ as: Tag = "span", text, mode = "rise", className = "", ...rest }) {
  const words = text.split(" ");
  const motion = mode === "read" ? { "data-scrub": "read" } : { "data-reveal": "words" };

  return (
    <Tag className={`split split--${mode} ${className}`.trim()} aria-label={text} style={{ "--n": words.length }} {...motion} {...rest}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="split__word" aria-hidden="true">
            <span className="split__inner" style={{ "--w": i }}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </Tag>
  );
}
