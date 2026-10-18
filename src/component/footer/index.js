import React from "react";
import "../../assets/css/footer.css";
import { profile, socials } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner" data-stagger>
        <div className="site-footer__brand">
          <span className="site-footer__name">{profile.name}</span>
          <span className="site-footer__copy">
            © {new Date().getFullYear()} · {profile.title} · {profile.location}
          </span>
        </div>
        <ul className="site-footer__social" aria-label="Social profiles" data-stagger>
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <i className={s.icon} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
