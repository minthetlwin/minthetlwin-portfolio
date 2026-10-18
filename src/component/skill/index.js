import React from "react";
import "../../assets/css/skill.css";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import SkillIcon from "../common/SkillIcon";
import { skillGroups } from "../../data/skills";

export default function Skill() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          id="skills-title"
          eyebrow="Skills"
          title="The toolkit."
          lead="Everything I use to take a product from database to deployment."
        />

        <div className="skills" data-scrub="drift">
          {skillGroups.map((group, i) => (
            <Reveal as="article" index={i % 2} className="skills__group tile" key={group.title}>
              <h3 className="skills__title">{group.title}</h3>
              <ul className="skills__grid">
                {group.skills.map((skill, k) => (
                  <li className="skills__item" key={skill.name} style={{ "--k": k }}>
                    <SkillIcon skill={skill} />
                    <span className="skills__name">{skill.name}</span>
                    {skill.core && (
                      <span className="skills__core" title="Core stack">
                        <span className="visually-hidden">Core stack</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <p className="skills__legend">
          <span className="skills__core" aria-hidden="true"></span> Core stack — what I use every day
        </p>
      </div>
    </section>
  );
}
