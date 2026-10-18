import React from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

// Eyebrow fades up, the title rises word by word, and the lead brightens as you read it.
export default function SectionHeader({ eyebrow, title, lead, id }) {
  return (
    <header className="section-header">
      {eyebrow && (
        <Reveal as="span" className="section-eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <SplitText as="h2" className="section-title" id={id} text={title} />
      {lead && <SplitText as="p" className="section-lead" text={lead} mode="read" />}
    </header>
  );
}
