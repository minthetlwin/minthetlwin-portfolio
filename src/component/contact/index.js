import React, { useEffect, useState } from "react";
import "../../assets/css/contact.css";
import Reveal from "../common/Reveal";
import SplitText from "../common/SplitText";
import { profile, socials } from "../../data/profile";

const PRIMARY = [
  { id: "email", icon: "fas fa-envelope", label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: profile.email },
  { id: "phone", icon: "fas fa-phone-alt", label: "Phone", value: profile.phone, href: profile.phoneHref, copy: profile.phone },
];

const SOCIAL = socials.filter((s) => ["GitHub", "LinkedIn", "Telegram", "WhatsApp"].includes(s.label));

const TOPICS = ["Full-time role", "Freelance project", "Collaboration", "Just saying hi"];

const TIME_ZONE = "Asia/Yangon";

function useLocalTime() {
  const format = () =>
    new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: TIME_ZONE }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Contact() {
  const [form, setForm] = useState({ topic: TOPICS[0], name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [copied, setCopied] = useState("");
  const localTime = useLocalTime();

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const copy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.copy);
      setCopied(item.id);
      setTimeout(() => setCopied(""), 1800);
    } catch (e) {
      // Clipboard can be blocked (insecure context, permissions); the row itself still links.
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "" });

    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: `[${form.topic}] ${form.message}` }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({ type: "success", text: "Thanks — your message is on its way. I'll reply within 24 hours." });
        setForm((f) => ({ ...f, name: "", email: "", message: "" }));
      } else {
        setStatus({ type: "error", text: data.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", text: `Couldn't reach the server. You can email me directly at ${profile.email}.` });
    }
  };

  const loading = status.type === "loading";

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__grid">
          {/* Left: who, how to reach, where */}
          <Reveal variant="scale" className="contact__cta tile">
            <span className="contact__availability">
              <span className="status-dot" aria-hidden="true"></span> Available for new opportunities
            </span>
            <SplitText as="h2" className="contact__title" id="contact-title" text="Let's build something together." />
            <p className="contact__lead">Open to full-time roles, freelance projects and collaborations.</p>

            <ul className="contact__primary" data-stagger>
              {PRIMARY.map((item) => (
                <li key={item.id} className="contact__row">
                  <a href={item.href} className="contact__row-link">
                    <span className="contact__row-icon" aria-hidden="true">
                      <i className={item.icon}></i>
                    </span>
                    <span className="contact__row-text">
                      <span className="contact__row-label">{item.label}</span>
                      <span className="contact__row-value">{item.value}</span>
                    </span>
                  </a>
                  <button
                    type="button"
                    className="contact__copy"
                    onClick={() => copy(item)}
                    aria-label={`Copy ${item.label.toLowerCase()}`}
                  >
                    <i className={copied === item.id ? "fas fa-check" : "far fa-copy"} aria-hidden="true"></i>
                    <span className="contact__copy-tip" role="status">{copied === item.id ? "Copied" : ""}</span>
                  </button>
                </li>
              ))}
            </ul>

            <ul className="contact__socials" aria-label="Elsewhere" data-stagger>
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="contact__social">
                    <i className={s.icon} aria-hidden="true"></i>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <dl className="contact__meta" data-stagger>
              <div>
                <dt>Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Local time</dt>
                <dd>{localTime} · MMT</dd>
              </div>
              <div>
                <dt>Response</dt>
                <dd>Within 24 hours</dd>
              </div>
            </dl>
          </Reveal>

          {/* Right: the form; the message box grows so both cards end together */}
          <Reveal variant="scale" index={1} className="contact__form-card tile">
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-head">
                <h3 className="contact__form-title">Send a message</h3>
                <p className="contact__form-sub">Tell me what you're working on.</p>
              </div>

              <fieldset className="topics">
                <legend className="topics__legend">What's this about?</legend>
                <div className="topics__options">
                  {TOPICS.map((topic) => (
                    <label key={topic} className={`topic ${form.topic === topic ? "is-selected" : ""}`}>
                      <input type="radio" name="topic" value={topic} checked={form.topic === topic} onChange={update("topic")} />
                      {topic}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" type="text" autoComplete="name" placeholder="Jane Doe" value={form.name} onChange={update("name")} required />
                </div>
                <div className="field">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" type="email" autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={update("email")} required />
                </div>
              </div>

              <div className="field field--grow">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="A few lines about the role, project or idea…"
                  maxLength={2000}
                  required
                ></textarea>
                <span className="field__count" aria-hidden="true">{form.message.length} / 2000</span>
              </div>

              <div className="contact__form-foot">
                <button type="submit" className="btn btn--primary contact__submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner" aria-hidden="true"></span> Sending…
                    </>
                  ) : (
                    <>
                      Send message <i className="fas fa-paper-plane" aria-hidden="true"></i>
                    </>
                  )}
                </button>
                <p className={`contact__status contact__status--${status.type}`} role="status" aria-live="polite">
                  {status.text ? (
                    <>
                      <i className={status.type === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle"} aria-hidden="true"></i>
                      {status.text}
                    </>
                  ) : (
                    <span className="contact__privacy">
                      <i className="fas fa-lock" aria-hidden="true"></i> Your details are only used to reply to you.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
