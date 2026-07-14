import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BookSession() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const bullets = [
    '15+ years of player development experience',
    '20+ athletes developed to the collegiate level',
    'Train with the Dr. Dish shooting machine',
    'Individual, group, and team training options',
  ]

  return (
    <>
      <style>{`
        .book-page {
          min-height: 100vh;
          background: var(--bg-primary);
          padding-top: 70px;
          display: flex;
          align-items: stretch;
        }

        /* ── Two-column layout ── */
        .book-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 70px);
          width: 100%;
          max-width: 100%;
        }

        /* ── LEFT column ── */
        .book-left {
          background: linear-gradient(
            160deg,
            #060c16 0%,
            #0b1627 40%,
            #07111d 100%
          );
          padding: 80px 64px 80px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-right: 1px solid var(--border);
        }
        .book-left::before {
          content: '';
          position: absolute;
          top: -200px;
          left: -200px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(39,170,226,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .book-left::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(39,170,226,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .book-left__inner {
          position: relative;
          z-index: 1;
          max-width: 520px;
        }
        .book-left__logo {
          margin-bottom: 48px;
        }
        .book-left__logo img {
          height: 44px;
          width: auto;
          object-fit: contain;
        }
        .book-left__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(44px, 5vw, 68px);
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 28px;
        }
        .book-left__title span { color: var(--blue-400); }
        .book-left__desc {
          font-size: 16px;
          color: var(--gray-400);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 460px;
        }

        /* Bullets */
        .book-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 48px;
        }
        .book-bullet {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 15.5px;
          color: var(--gray-200, #e5e7eb);
          line-height: 1.45;
          font-weight: 500;
        }
        .book-bullet__check {
          width: 22px;
          height: 22px;
          background: rgba(39,170,226,0.12);
          border: 1.5px solid var(--blue-600);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--blue-400);
          font-size: 11px;
          font-weight: 900;
          margin-top: 1px;
        }

        /* Badge */
        .book-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(39,170,226,0.08);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 22px;
          max-width: fit-content;
        }
        .book-badge__icon {
          font-size: 22px;
        }
        .book-badge__text {
          font-size: 13px;
          font-weight: 700;
          color: var(--blue-300);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── RIGHT column ── */
        .book-right {
          background: var(--bg-secondary);
          padding: 80px 80px 80px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .book-form-wrap {
          max-width: 480px;
          width: 100%;
        }
        .book-form-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 0.06em;
          color: #fff;
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        .book-form-sub {
          font-size: 14px;
          color: var(--gray-500);
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .book-form-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 40px 36px;
        }
        .book-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .book-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .book-field:last-of-type { margin-bottom: 0; }
        .book-label {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gray-400);
        }
        .book-label span { color: var(--blue-400); margin-left: 2px; }
        .book-input {
          background: rgba(6,9,15,0.7);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          padding: 14px 16px;
          font-size: 15px;
          color: #fff;
          font-family: 'Inter', sans-serif;
          transition: var(--transition);
          outline: none;
          width: 100%;
        }
        .book-input::placeholder {
          color: var(--gray-600);
        }
        .book-input:focus {
          border-color: var(--blue-600);
          background: rgba(39,170,226,0.05);
          box-shadow: 0 0 0 3px rgba(39,170,226,0.12);
        }
        .book-submit {
          width: 100%;
          background: var(--blue-600);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 17px;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: var(--transition);
          font-family: 'Bebas Neue', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
        }
        .book-submit:hover {
          background: var(--blue-700);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--blue-glow);
        }
        .book-privacy {
          font-size: 12.5px;
          color: var(--gray-600);
          text-align: center;
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        /* Success state */
        .book-success {
          text-align: center;
          padding: 40px 20px;
        }
        .book-success__icon {
          font-size: 52px;
          margin-bottom: 20px;
        }
        .book-success__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          letter-spacing: 0.06em;
          color: var(--blue-400);
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .book-success__desc {
          font-size: 15.5px;
          color: var(--gray-400);
          line-height: 1.7;
          margin-bottom: 28px;
        }

        /* Trust strip at bottom of left col */
        .book-trust {
          margin-top: 40px;
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }
        .book-trust__item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--gray-500);
        }
        .book-trust__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--blue-600);
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .book-left { padding: 60px 40px; }
          .book-right { padding: 60px 40px; }
        }
        @media (max-width: 768px) {
          .book-layout { grid-template-columns: 1fr; }
          .book-left { padding: 72px 24px 56px; border-right: none; border-bottom: 1px solid var(--border); }
          .book-left__inner { max-width: 100%; }
          .book-right { padding: 56px 24px 80px; }
          .book-form-wrap { max-width: 100%; }
        }
        @media (max-width: 480px) {
          .book-form-row { grid-template-columns: 1fr; }
          .book-form-card { padding: 28px 20px; }
        }
      `}</style>

      <div className="book-page">
        <div className="book-layout">
          {/* ─── LEFT ─── */}
          <div className="book-left">
            <div className="book-left__inner">
              <div className="book-left__logo">
                <Link to="/">
                  <img src="/logo-white.png" alt="Gude Skillz Lab" />
                </Link>
              </div>

              <span className="section-tag">Get Started in Waco, TX</span>

              <h1 className="book-left__title">
                Book Your First<br />
                <span>Basketball Session</span>
              </h1>

              <p className="book-left__desc">
                Tell us about your athlete and what they're working on. Coach Gude will reach out
                within 24 hours to talk through goals, fit, and timing — then get you on the
                schedule. Individual, small-group, and shooting machine sessions all available.
              </p>

              <ul className="book-bullets">
                {bullets.map((b) => (
                  <li key={b} className="book-bullet">
                    <span className="book-bullet__check">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="book-badge">
                <span className="book-badge__icon">🏀</span>
                <span className="book-badge__text">100+ Athletes Trained</span>
              </div>

              <div className="book-trust">
                <div className="book-trust__item">
                  <span className="book-trust__dot" />
                  Waco, TX
                </div>
                <div className="book-trust__item">
                  <span className="book-trust__dot" />
                  Private Facility
                </div>
                <div className="book-trust__item">
                  <span className="book-trust__dot" />
                  Dr. Dish Machine
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="book-right">
            <div className="book-form-wrap">
              <div className="book-form-title">Tell Us About Your Athlete</div>
              <p className="book-form-sub">
                <span>🕐</span>
                We'll respond within 24 hours.
              </p>

              <div className="book-form-card">
                {submitted ? (
                  <div className="book-success">
                    <div className="book-success__icon">🎉</div>
                    <div className="book-success__title">You're on the List!</div>
                    <p className="book-success__desc">
                      Coach Gude will reach out within 24 hours to get you on the schedule. Check
                      your email at <strong style={{ color: 'var(--gray-200)' }}>{form.email || 'your inbox'}</strong>.
                    </p>
                    <Link to="/training" className="btn-secondary" style={{ justifyContent: 'center' }}>
                      View Training Programs
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="book-form-row">
                      <div className="book-field" style={{ marginBottom: 0 }}>
                        <label className="book-label" htmlFor="bk-firstName">
                          First Name <span>*</span>
                        </label>
                        <input
                          id="bk-firstName"
                          name="firstName"
                          type="text"
                          className="book-input"
                          placeholder="John"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="book-field" style={{ marginBottom: 0 }}>
                        <label className="book-label" htmlFor="bk-lastName">
                          Last Name <span>*</span>
                        </label>
                        <input
                          id="bk-lastName"
                          name="lastName"
                          type="text"
                          className="book-input"
                          placeholder="Smith"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="book-field">
                      <label className="book-label" htmlFor="bk-email">
                        Email <span>*</span>
                      </label>
                      <input
                        id="bk-email"
                        name="email"
                        type="email"
                        className="book-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="book-field" style={{ marginBottom: 0 }}>
                      <label className="book-label" htmlFor="bk-phone">
                        Phone
                      </label>
                      <input
                        id="bk-phone"
                        name="phone"
                        type="tel"
                        className="book-input"
                        placeholder="+1 (254) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="book-submit">
                      Next <span style={{ fontSize: '18px' }}>→</span>
                    </button>

                    <p className="book-privacy">
                      <span>🔒</span>
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
