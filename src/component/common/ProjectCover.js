import React from "react";

// Visual for projects without a screenshot (private/internal tools), tinted with the
// project's accent. Cards show the headline numbers; the case-study page already
// lists those right below, so its large cover shows the tech stack instead.
export default function ProjectCover({ project, size = "card" }) {
  const isPage = size === "page";
  const stats = project.stats.slice(0, 3);

  return (
    <div className={`cover cover--${size}`} style={{ "--tone": project.accent }}>
      <div className="cover__head">
        <span className="cover__icon" aria-hidden="true">
          <i className={project.icon}></i>
        </span>
        <span className="cover__name">{project.shortTitle || project.title}</span>
      </div>

      {isPage ? (
        <ul className="cover__stack" aria-label="Tech stack">
          {project.stack.slice(0, 8).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      ) : (
        stats.length > 0 && (
          <dl className="cover__stats">
            {stats.map((s) => (
              <div className="cover__stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        )
      )}
    </div>
  );
}
