import React from "react";

// `img` = bundled logo, `text` = lettered badge (e.g. "TS"), otherwise a Font Awesome glyph.
export default function SkillIcon({ skill, className = "" }) {
  let content;
  if (skill.img) {
    content = <img src={skill.img} alt="" draggable="false" />;
  } else if (skill.text) {
    content = (
      <span className="skill-icon__badge" style={{ background: skill.color }}>
        {skill.text}
      </span>
    );
  } else {
    content = <i className={skill.fa} style={{ color: skill.color }}></i>;
  }

  return (
    <span className={`skill-icon ${skill.img ? "skill-icon--img" : ""} ${className}`.trim()} aria-hidden="true">
      {content}
    </span>
  );
}
