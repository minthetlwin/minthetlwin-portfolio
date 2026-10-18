import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../assets/css/projectDetail.css";
import Reveal from "../common/Reveal";
import SplitText from "../common/SplitText";
import DeviceFrame from "../common/DeviceFrame";
import ProjectCover from "../common/ProjectCover";
import { projectList } from "../../data/projects";
import { profile } from "../../data/profile";

function CheckList({ items, icon = "fas fa-check" }) {
  return (
    <ul className="case__list">
      {items.map((item, i) => (
        <li key={item} data-reveal="up" style={{ "--i": i % 6 }}>
          <i className={icon} aria-hidden="true"></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const index = projectList.findIndex((p) => p.id === id);
  const project = projectList[index];

  useEffect(() => {
    document.title = project ? `${project.title} · ${profile.name}` : `Project not found · ${profile.name}`;
    return () => {
      document.title = `${profile.name} | Portfolio`;
    };
  }, [project]);

  if (!project) {
    return (
      <section className="case case--empty">
        <div className="container">
          <h1 className="case__title">Project not found</h1>
          <p className="case__lead">The project you're looking for doesn't exist or has moved.</p>
          <Link to={{ pathname: "/", hash: "#work" }} className="btn btn--primary">
            <i className="fas fa-arrow-left" aria-hidden="true"></i> All projects
          </Link>
        </div>
      </section>
    );
  }

  const prev = projectList[(index - 1 + projectList.length) % projectList.length];
  const next = projectList[(index + 1) % projectList.length];

  return (
    <article className="case" aria-labelledby="case-title" style={{ "--tone": project.accent }}>
      <div className="container">
        <Link to={{ pathname: "/", hash: "#work" }} className="case__back">
          <i className="fas fa-chevron-left" aria-hidden="true"></i> All projects
        </Link>

        <header className="case__header">
          <Reveal as="span" className="case__category">
            <i className={project.icon} aria-hidden="true"></i> {project.category}
            {project.group === "earlier" && " · Earlier project"}
          </Reveal>
          <SplitText as="h1" className="case__title" id="case-title" text={project.title} />
          <Reveal as="p" index={3} className="case__lead">{project.tagline}</Reveal>
          {project.links && (
            <Reveal index={4} className="case__links">
              {project.links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${i === 0 ? "btn--primary" : "btn--secondary"}`}
                >
                  <i className={link.icon} aria-hidden="true"></i> {link.label}
                </a>
              ))}
            </Reveal>
          )}
        </header>

        <Reveal variant="mask" index={2} className={`case__stage tile ${project.img ? "case__stage--device" : ""}`}>
          <div className="case__device" data-scrub="tilt">
            {project.img ? (
              <DeviceFrame project={project} alt={`${project.title} screenshot`} eager />
            ) : (
              <ProjectCover project={project} size="page" />
            )}
          </div>
        </Reveal>

        {project.stats.length > 0 && (
          <dl className="case__stats" data-stagger>
            {project.stats.map((s) => (
              <div className="case__stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd data-count>{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="case__grid">
          <Reveal as="aside" className="case__aside tile" aria-label="Project facts">
            <dl>
              {project.role && (
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
              )}
              <div>
                <dt>Category</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Tech stack</dt>
                <dd>
                  <ul className="chip-list">
                    {project.stack.map((tech) => (
                      <li className="chip" key={tech}>{tech}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>

          <div className="case__body">
            <Reveal as="section" className="case__section">
              <h2>Overview</h2>
              {project.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal as="section" className="case__section">
              <h2>Key features</h2>
              <CheckList items={project.features} />
            </Reveal>

            {project.highlights && (
              <Reveal as="section" className="case__section case__panel">
                <h2>{project.highlightsTitle || "Engineering highlights"}</h2>
                <CheckList items={project.highlights} icon="fas fa-bolt" />
              </Reveal>
            )}

            {project.learned && (
              <Reveal as="section" className="case__section">
                <h2>What I learned</h2>
                <CheckList items={project.learned} icon="fas fa-lightbulb" />
              </Reveal>
            )}

            {project.outcome && (
              <Reveal as="section" className="case__section case__panel">
                <h2>Outcome</h2>
                <p>{project.outcome}</p>
              </Reveal>
            )}
          </div>
        </div>

        <nav className="case__pager" aria-label="More projects" data-stagger>
          <Link to={`/project/${prev.id}`} className="case__pager-link tile">
            <span className="case__pager-label"><i className="fas fa-arrow-left" aria-hidden="true"></i> Previous</span>
            <span className="case__pager-title">{prev.title}</span>
          </Link>
          <Link to={`/project/${next.id}`} className="case__pager-link case__pager-link--next tile">
            <span className="case__pager-label">Next <i className="fas fa-arrow-right" aria-hidden="true"></i></span>
            <span className="case__pager-title">{next.title}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
