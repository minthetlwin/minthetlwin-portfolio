import React from "react";
import "../../assets/css/education.css";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import Ucsmdy from "../../assets/image/education/ucsmdy.jpg";
import { education, awards } from "../../data/experience";

export default function Education() {
  return (
    <section className="section edu-section" id="education" data-scrub="sheet" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader id="education-title" eyebrow="Education & Awards" title="Where it started." />

        <div className="edu-bento">
          <Reveal as="article" variant="mask" className="tile edu">
            <img className="edu__image" data-scrub="zoom" src={Ucsmdy} alt={education.school} loading="lazy" draggable="false" />
            <div className="edu__overlay">
              <span className="edu__period">{education.period}</span>
              <h3 className="edu__degree">{education.degree}</h3>
              <p className="edu__school">{education.school}</p>
              <ul className="edu__focus" aria-label="Areas of focus" data-stagger>
                {education.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          {awards.map((award, i) => (
            <Reveal as="article" index={i + 1} className="tile award" key={award.id}>
              <span className="award__medal" aria-hidden="true">
                <i className="fas fa-trophy"></i>
              </span>
              <span className="award__period">{award.period}</span>
              <h3 className="award__title">{award.title}</h3>
              <p className="award__event">{award.event}</p>
              <p className="award__text">{award.summary}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
