import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <style>{`
        /* ── Hero ── */
        .contact-hero {
          position: relative;
          min-height: 72vh;
          display: flex;
          align-items: center;
          margin-top: 70px;
          background-image: url('/img/contact-bg.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .contact-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(6,9,15,0.94) 0%,
            rgba(6,9,15,0.82) 60%,
            rgba(6,9,15,0.92) 100%
          );
        }
        .contact-hero__content {
          position: relative;
          z-index: 2;
          max-width: 780px;
        }
        .contact-hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(52px, 8vw, 92px);
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 24px;
          color: #fff;
        }
        .contact-hero__title span { color: var(--blue-400); }
        .contact-hero__sub {
          font-size: 16.5px;
          color: var(--gray-300);
          line-height: 1.75;
          max-width: 640px;
        }
        .contact-hero__bottom-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blue-600), transparent);
        }

        /* ── Contact Content ── */
        .contact-content {
          padding: 110px 0;
          background: var(--bg-primary);
        }
        .contact-content__header {
          margin-bottom: 64px;
        }
        .contact-content__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(38px, 5vw, 58px);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 0;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* ── Form ── */
        .contact-form {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 44px 40px;
        }
        .contact-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .form-field:last-of-type { margin-bottom: 0; }
        .form-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-300);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .form-input,
        .form-textarea {
          background: rgba(6,9,15,0.6);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px 16px;
          font-size: 15px;
          color: #fff;
          font-family: 'Inter', sans-serif;
          transition: var(--transition);
          outline: none;
          width: 100%;
        }
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--gray-600);
        }
        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--blue-600);
          background: rgba(39,170,226,0.04);
          box-shadow: 0 0 0 3px rgba(39,170,226,0.1);
        }
        .form-textarea {
          min-height: 140px;
          resize: vertical;
          line-height: 1.6;
        }
        .form-submit-wrap {
          margin-top: 28px;
        }
        .form-note {
          font-size: 13px;
          color: var(--gray-500);
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .contact-form__success {
          text-align: center;
          padding: 40px 20px;
        }
        .contact-form__success-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .contact-form__success h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 0.05em;
          color: var(--blue-400);
          margin-bottom: 12px;
        }
        .contact-form__success p {
          color: var(--gray-400);
          font-size: 15px;
          line-height: 1.7;
        }

        /* ── Right sidebar info ── */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 24px 28px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          transition: var(--transition);
        }
        .info-card:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
        }
        .info-card__icon {
          width: 44px;
          height: 44px;
          background: rgba(39,170,226,0.1);
          border: 1px solid var(--border);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .info-card__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--blue-400);
          margin-bottom: 6px;
        }
        .info-card__value {
          font-size: 15.5px;
          font-weight: 600;
          color: var(--gray-100);
          line-height: 1.4;
        }
        .info-card__sub {
          font-size: 13.5px;
          color: var(--gray-500);
          margin-top: 3px;
        }
        .map-placeholder {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 40px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 12px;
          min-height: 180px;
        }
        .map-placeholder__icon {
          font-size: 32px;
        }
        .map-placeholder__text {
          font-size: 15px;
          font-weight: 600;
          color: var(--gray-300);
        }
        .map-placeholder__sub {
          font-size: 13px;
          color: var(--gray-500);
        }

        /* ── Book Session CTA ── */
        .contact-book-cta {
          padding: 110px 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          text-align: center;
        }
        .contact-book-cta__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(38px, 5vw, 60px);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 20px;
        }
        .contact-book-cta__sub {
          font-size: 16.5px;
          color: var(--gray-400);
          line-height: 1.75;
          max-width: 580px;
          margin: 0 auto 40px;
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-form { padding: 32px 24px; }
        }
        @media (max-width: 600px) {
          .contact-hero { min-height: 60vh; }
          .contact-content, .contact-book-cta { padding: 72px 0; }
          .contact-form__row { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ─── 1. Hero ─── */}
      <section className="contact-hero">
        <div className="contact-hero__overlay" />
        <div className="container">
          <div className="contact-hero__content">
            <span className="section-tag">Contact</span>
            <h1 className="contact-hero__title">
              Get in Touch with<br />
              <span>Coach Gude</span>
            </h1>
            <p className="contact-hero__sub">
              Questions about basketball training, group sessions, or team sessions or ideas? Send a
              message, call{' '}
              <a href="tel:+12544982285" style={{ color: 'var(--blue-400)', fontWeight: 600 }}>
                254-498-2285
              </a>
              , or email{' '}
              <a href="mailto:GudeSkillzLab@gmail.com" style={{ color: 'var(--blue-400)', fontWeight: 600 }}>
                GudeSkillzLab@gmail.com
              </a>
              . We respond within one business day.
            </p>
          </div>
        </div>
        <div className="contact-hero__bottom-line" />
      </section>

      {/* ─── 2. Contact Content ─── */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-content__header">
            <span className="section-tag">We'd Love to Hear From You</span>
            <h2 className="contact-content__title">Send a Message</h2>
          </div>
          <div className="contact-grid">
            {/* LEFT — Form */}
            <div className="contact-form">
              {submitted ? (
                <div className="contact-form__success">
                  <div className="contact-form__success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>
                    Thanks for reaching out. Coach Gude will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className="form-field">
                      <label className="form-label" htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="form-input"
                        placeholder="John"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-input"
                        placeholder="Smith"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+1 (254) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us about your training goals, questions, or anything else..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-submit-wrap">
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Send Message
                    </button>
                    <p className="form-note">
                      <span>🕐</span>
                      We'll respond within 24 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT — Info */}
            <div className="contact-info">
              <div className="info-card">
                <div className="info-card__icon">📍</div>
                <div>
                  <div className="info-card__label">Address</div>
                  <div className="info-card__value">111 Headquarters</div>
                  <div className="info-card__sub">Waco, Texas</div>
                </div>
              </div>
              <div className="info-card">
                <div className="info-card__icon">📞</div>
                <div>
                  <div className="info-card__label">Phone</div>
                  <a href="tel:+12544982285" className="info-card__value" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +1 254-498-2285
                  </a>
                  <div className="info-card__sub">Mon – Sat, 9am – 7pm CT</div>
                </div>
              </div>
              <div className="info-card">
                <div className="info-card__icon">✉️</div>
                <div>
                  <div className="info-card__label">Email</div>
                  <a href="mailto:GudeSkillzLab@gmail.com" className="info-card__value" style={{ color: 'inherit', textDecoration: 'none' }}>
                    GudeSkillzLab@gmail.com
                  </a>
                  <div className="info-card__sub">We respond within 1 business day</div>
                </div>
              </div>
              <div className="map-placeholder">
                <div className="map-placeholder__icon">📌</div>
                <div className="map-placeholder__text">Located in Waco, TX</div>
                <div className="map-placeholder__sub">
                  Private indoor facility — address shared upon booking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Book Session CTA ─── */}
      <section className="contact-book-cta">
        <div className="container">
          <span className="section-tag">Next Step</span>
          <h2 className="contact-book-cta__title">
            Book Your First Session With Coach Gude
          </h2>
          <p className="contact-book-cta__sub">
            Individual, group, and shooting machine sessions available year-round in Waco. Once you
            submit your athlete's details, Coach Gude will get you on the schedule.
          </p>
          <Link to="/book-session" className="btn-primary">Book a Session</Link>
        </div>
      </section>
    </>
  )
}
