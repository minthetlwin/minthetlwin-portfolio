import React, { useState } from "react";
import '../../assets/css/style.css';
import '../../assets/css/contact.css';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  const validateEmail = (emailStr) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  try {
    const res = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus(data.message || "Failed to send message");
    }
  } catch (error) {
    console.error(error);
    setStatus("Server error. Try again later.");
  } finally {
    setLoading(false);
    setTimeout(() => setStatus(""), 3000);
  }
};

  return (
    <section className="modern-contact-section" id="contact">
      {/* Structural Header Section */}
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-main-title">
          <i className="fas fa-envelope-open-text"></i> Contact Me
        </h2>
        <div className="title-bar"></div>
      </div>

      {/* Synchronized Dashboard Grid */}
      <div className="contact-dashboard-layout">
        {/* Left Column: Premium Enhanced Info Pane */}
        <div className="contact-info-pane">
          <blockquote className="premium-quote">
            <i className="fas fa-quote-left quote-icon"></i>
            <p>Let's build something exceptional together.</p>
          </blockquote>
          {/* Fixed Academic-style Connected Tracker Timeline */}
          <div className="contact-details-timeline">
            <div className="timeline-connector-line"></div>

            <div className="timeline-node-item">
              <div className="node-marker-glow"></div>
              <div className="node-details">
                <span className="node-date">Availability Status</span>
                <h4 className="node-milestone">Global / Remote Workspace</h4>
                <p className="node-summary">
                  Currently accepting selective freelance contracts, full-time remote roles, and architectural design consultations.
                </p>
              </div>
            </div>

            <div className="timeline-node-item matching-node">
              <div className="node-marker-glow passive-glow"></div>
              <div className="node-details">
                <span className="node-date">Response Framework</span>
                <h4 className="node-milestone">Fast Turnaround Guaranteed</h4>
                <p className="node-summary">
                  Whether you leave a project proposal or a simple inquiry, your transmission routes directly to my live personal feed. Expect an active response within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Extra Component Layer: Modern Minimal Communication Grid */}
          <div className="contact-meta-channels">
            <div className="channel-pill">
              <i className="fas fa-bolt channel-icon-active"></i>
              <div className="channel-text">
                <span className="channel-label">Current local time</span>
                <span className="channel-value">Available Now</span>
              </div>
            </div>
            <div className="channel-pill">
              <i className="fas fa-shield-alt channel-icon-active"></i>
              <div className="channel-text">
                <span className="channel-label">Encryption Protocol</span>
                <span className="channel-value">Telegram API End-to-End</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side Pane: High-Clarity Modern Form Box */}
        <div className="contact-display-card">
          <div className="contact-card-header">
            <div className="form-badge">Secure API Channel</div>
            <h3 className="form-card-title">Send A Message</h3>
          </div>

          <div className="contact-body-content">
            <form onSubmit={handleSubmit} className="modern-form">

              <div className="form-field-group">
                <label htmlFor="name" className="field-label">Your Name</label>
                <div className="input-wrapper">
                  <i className="fas fa-user input-icon"></i>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. John Doe"
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label htmlFor="email" className="field-label">Email Address</label>
                <div className="input-wrapper">
                  <i className="fas fa-envelope input-icon"></i>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label htmlFor="message" className="field-label">Your Message</label>
                <div className="input-wrapper field-textarea">
                  <i className="fas fa-comment-alt input-icon textarea-icon"></i>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Write details about your project specifications or inquiries..."
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                <span className="btn-text">{loading ? "Transmitting..." : "Send Secure Message"}</span>
                {!loading ? (
                  <i className="fas fa-paper-plane action-arrow-icon"></i>
                ) : (
                  <div className="loading-spinner-circle"></div>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Toast Notification Popups */}
      <div className={`toast-notification ${status ? "active" : ""}`}>
        <div className="toast-content-wrapper">
          <i className={`fas ${status.includes("successfully") ? "fa-check-circle success" : "fa-exclamation-triangle error"}`}></i>
          <p>{status}</p>
        </div>
      </div>
    </section>
  );
}