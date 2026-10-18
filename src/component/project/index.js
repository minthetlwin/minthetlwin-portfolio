import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/project.css";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import DeviceFrame from "../common/DeviceFrame";
import ProjectCover from "../common/ProjectCover";
import { featuredList, earlierList, projectCategories } from "../../data/projects";

export default function Project() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? featuredList : featuredList.filter((p) => p.category === filter);

  return (
    <section className="section work" id="work" data-scrub="sheet" aria-labelledby="work-title">
      <div className="container">
        <SectionHeader
          id="work-title"
          eyebrow="Selected work"
          title="Things I've built."
          lead="Production apps used every day by sales, marketing and engineering teams, plus websites and a mobile app on the App Store and Google Play."
        />

        <div className="work__filters" role="group" aria-label="Filter projects by type" data-stagger>
          {projectCategories.map((cat) => {
            const count = cat === "All" ? featuredList.length : featuredList.filter((p) => p.category === cat).length;
            return (
              <button
                type="button"
                key={cat}
                className={`work__filter ${filter === cat ? "is-active" : ""}`}
                aria-pressed={filter === cat}
                onClick={() => setFilter(cat)}
              >
                {cat}
                <span className="work__filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <ul className="work__grid" data-scrub="drift">
          {visible.map((project, i) => {
            // Two-column grid: the lead project under "All", and any leftover last card, span the full row.
            const lead = filter === "All";
            const rest = visible.length - (lead ? 1 : 0);
            const wide = (lead && i === 0) || (rest % 2 === 1 && i === visible.length - 1);
            return (
              <Reveal
                as="li"
                variant="scale"
                index={wide ? 0 : (i - (lead ? 1 : 0)) % 2}
                key={project.id}
                className={`work__item ${wide ? "work__item--wide" : ""} ${!wide && (i - (lead ? 1 : 0)) % 2 === 1 ? "work__item--right" : ""}`}
              >
                <Link to={`/project/${project.id}`} className="project-card tile" style={{ "--tone": project.accent }}>
                  <div className="project-card__text">
                    <span className="project-card__category">{project.category}</span>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__desc">{project.tagline}</p>
                    <ul className="chip-list project-card__tags" aria-label="Technologies">
                      {(project.tags || project.stack).slice(0, 4).map((tag) => (
                        <li className="chip" key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <span className="link-arrow project-card__cta">
                      View case study <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className={`project-card__shot ${project.img ? "project-card__shot--device" : ""}`} data-scrub="tilt">
                    {project.img ? <DeviceFrame project={project} /> : <ProjectCover project={project} />}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <div className="earlier">
          <Reveal as="header" className="earlier__header">
            <h3 className="earlier__title">Earlier projects</h3>
            <p className="earlier__lead">University and personal projects, where it all started.</p>
          </Reveal>
          <ul className="earlier__grid" data-scrub="drift">
            {earlierList.map((project, i) => (
              <Reveal as="li" index={i % 3} key={project.id}>
                <Link to={`/project/${project.id}`} className="mini-card tile" style={{ "--tone": project.accent }}>
                  <div className="mini-card__media">
                    {project.img ? (
                      <img src={project.img} alt="" loading="lazy" draggable="false" />
                    ) : (
                      <i className={project.icon} aria-hidden="true"></i>
                    )}
                  </div>
                  <div className="mini-card__body">
                    <h4 className="mini-card__title">{project.title}</h4>
                    <p className="mini-card__desc">{project.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
