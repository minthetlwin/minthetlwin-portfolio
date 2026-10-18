import React from "react";
import "../../assets/css/home.css";
import profileImg from "../../assets/image/profile.png";
import SkillIcon from "../common/SkillIcon";
import CompanyMark from "../common/CompanyMark";
import { profile, socials } from "../../data/profile";
import { roles, awards, formatMonth, formatRange, formatDuration } from "../../data/experience";
import { projectList } from "../../data/projects";
import { coreSkills } from "../../data/skills";

const [current, previous] = roles;

export default function Home() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container">
        <div className="bento" data-scrub="exit">
          {/* Intro */}
          <article className="tile bento__intro rise" style={{ "--i": 0 }}>
            <span className="bento__location">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i> {profile.location}
            </span>
            <h1 className="bento__title" id="hero-title">
              <span className="line"><span className="line__inner bento__hi">Hi, I'm</span></span>{" "}
              <span className="line"><span className="line__inner bento__name">{profile.name}.</span></span>
            </h1>
            <p className="bento__lead">{profile.intro}</p>
            <div className="bento__actions">
              <a href="#work" className="btn btn--primary">
                See my work <i className="fas fa-arrow-down" aria-hidden="true"></i>
              </a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn--secondary">
                <i className="fas fa-file-alt" aria-hidden="true"></i> Résumé
              </a>
            </div>
            <ul className="bento__socials" aria-label="Social profiles">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <i className={s.icon} aria-hidden="true"></i>
                  </a>
                </li>
              ))}
            </ul>
          </article>

          {/* Photo — nothing is layered over it */}
          <figure className="tile bento__photo rise rise--mask" style={{ "--i": 1 }}>
            <img src={profileImg} alt={`Portrait of ${profile.name}`} draggable="false" />
          </figure>

          {/* Current role */}
          <a
            href="#experience"
            className="tile bento__job bento__job--now rise"
            style={{ "--i": 2, "--tone": current.accent, "--tone-2": current.accent2 || current.accent }}
          >
            <span className="bento__eyebrow">
              <span className="status-dot" aria-hidden="true"></span> Working at
            </span>
            <CompanyMark role={current} className="bento__job-mark" />
            <span className="bento__job-company">{current.shortName}</span>
            <span className="bento__job-role">{current.role}</span>
            <span className="bento__job-meta">
              Since {formatMonth(current.start)} · {formatDuration(current.start, current.end)}
            </span>
          </a>

          {/* Previous role */}
          <a
            href="#experience"
            className="tile bento__job bento__job--prev rise"
            style={{ "--i": 3, "--tone": previous.accent, "--tone-2": previous.accent2 || previous.accent }}
          >
            <span className="bento__eyebrow">Previously</span>
            <CompanyMark role={previous} className="bento__job-mark" />
            <span className="bento__job-company">{previous.shortName}</span>
            <span className="bento__job-role">{previous.role}</span>
            <span className="bento__job-meta">
              {formatRange(previous.start, previous.end)} · {formatDuration(previous.start, previous.end)}
            </span>
          </a>

          {/* Core stack */}
          <a href="#skills" className="tile bento__stack rise" style={{ "--i": 4 }}>
            <span className="bento__eyebrow">Core stack</span>
            <ul className="bento__stack-grid">
              {coreSkills.map((skill) => (
                <li key={skill.name}>
                  <SkillIcon skill={skill} />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </a>

          {/* Projects */}
          <a href="#work" className="tile bento__stat bento__stat--projects rise" style={{ "--i": 5 }}>
            <span className="bento__thumbs" aria-hidden="true">
              {/* Last thumbnail renders on top, so reverse to put the newest project in front. */}
              {projectList.filter((p) => p.img).slice(0, 3).reverse().map((p) => (
                <img key={p.id} src={p.img} alt="" draggable="false" />
              ))}
            </span>
            <span className="bento__stat-value" data-count>{projectList.length}</span>
            <span className="bento__stat-label">Projects built</span>
          </a>

          {/* Awards */}
          <a href="#education" className="tile bento__stat bento__stat--awards rise" style={{ "--i": 6 }}>
            <span className="bento__trophy" aria-hidden="true">
              <i className="fas fa-trophy"></i>
            </span>
            <span className="bento__stat-value" data-count>{awards.length}×</span>
            <span className="bento__stat-label">First Prize, university project competition</span>
          </a>
        </div>
      </div>
    </section>
  );
}
