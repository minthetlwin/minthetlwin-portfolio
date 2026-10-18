import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/experience.css";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import CompanyMark from "../common/CompanyMark";
import {
  roles,
  milestones,
  parseMonth,
  formatRange,
  formatDuration,
  MONTH_INITIALS,
} from "../../data/experience";

// 12 squares for the role's year; filled months are the ones worked.
function MonthStrip({ start, end }) {
  const from = parseMonth(start);
  const to = parseMonth(end);
  const now = parseMonth(null);
  const year = from.year;

  return (
    <div className="months" aria-hidden="true">
      <span className="months__year">{year}</span>
      <ol className="months__grid">
        {MONTH_INITIALS.map((initial, m) => {
          const idx = year * 12 + m;
          const active = idx >= from.year * 12 + from.month && idx <= to.year * 12 + to.month;
          const isNow = !end && year === now.year && m === now.month;
          const future = year * 12 + m > now.year * 12 + now.month;
          return (
            <li
              key={initial + m}
              className={`months__cell ${active ? "is-active" : ""} ${isNow ? "is-now" : ""} ${future ? "is-future" : ""}`}
              style={{ "--m": m }}
            >
              {initial}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function JobCard({ role, index }) {
  const isCurrent = role.end === null;

  return (
    <Reveal as="article" variant="scale" index={index} className="job tile" style={{ "--tone": role.accent, "--tone-2": role.accent2 || role.accent }}>
      <header className="job__cover">
        <div className="job__cover-top">
          <CompanyMark role={role} className="job__mark" />
          <span className={`job__badge ${isCurrent ? "job__badge--live" : ""}`}>
            {isCurrent && <span className="status-dot" aria-hidden="true"></span>}
            {isCurrent ? "Current role" : role.type}
          </span>
        </div>
        <h3 className="job__role">{role.role}</h3>
        <p className="job__company">{role.company}</p>
      </header>

      <div className="job__body">
        <div className="job__when">
          <div>
            <span className="job__range">{formatRange(role.start, role.end)}</span>
            <span className="job__duration">{formatDuration(role.start, role.end)}</span>
          </div>
          <MonthStrip start={role.start} end={role.end} />
        </div>

        <p className="job__summary">{role.summary}</p>

        <ul className="job__highlights" data-stagger>
          {role.highlights.map((item) => (
            <li key={item}>
              <i className="fas fa-check" aria-hidden="true"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {role.stack.length > 0 && (
          <ul className="chip-list job__stack" aria-label="Tech stack" data-stagger>
            {role.stack.map((tech) => (
              <li className="chip" key={tech}>{tech}</li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          id="experience-title"
          eyebrow="Experience"
          title="Where I've worked."
          lead="A software developer internship at Myanmar DCR, then straight into a mid-senior full stack role at Property Lab Myanmar."
        />

        <div className="jobs">
          {roles.map((role, i) => (
            <JobCard role={role} key={role.id} index={i} />
          ))}
        </div>

        <div className="journey-wrap">
          <Reveal as="h3" className="journey__heading">The journey so far</Reveal>
          <ol className="journey" data-scrub="draw">
            {milestones.map((m, i) => (
              <Reveal as="li" variant={i % 2 ? "right" : "left"} className={`journey__item journey__item--${m.kind}`} key={m.title + m.when}>
                <span className="journey__icon" aria-hidden="true">
                  <i className={m.icon}></i>
                </span>
                <div className="journey__card tile">
                  <span className="journey__when">{m.when}</span>
                  <h4 className="journey__title">{m.title}</h4>
                  <p className="journey__text">{m.text}</p>
                  {m.link && (
                    <Link to={m.link} className="link-arrow journey__link">
                      View project <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
