import { useState } from 'react'

const programs = ['Individual Training (1-on-1)', 'Team Training', 'Basketball Camp', 'Other / General Inquiry']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">

        {/* Left   info */}
        <div className="contact-info">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            READY TO<br /><span>LEVEL UP?</span>
          </h2>
          <p className="section-desc" style={{ marginTop: '16px', marginBottom: '40px' }}>
            Take the first step. Reach out to Coach Gude to book a session, ask about programs, or get more information about training at Gude Skillz Lab.
          </p>

          <div className="contact-cards">
            <a href="tel:+12544982285" className="contact-card">
              <div className="contact-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
                </svg>
              </div>
              <div>
                <div className="contact-card-label">Call Us</div>
                <div className="contact-card-value">+1 254-498-2285</div>
              </div>
            </a>

            <a href="mailto:GudeSkillzLab@gmail.com" className="contact-card">
              <div className="contact-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="contact-card-label">Email Us</div>
                <div className="contact-card-value">GudeSkillzLab@gmail.com</div>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="contact-card-label">Location</div>
                <div className="contact-card-value">Waco, TX</div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="contact-hours">
            <div className="contact-hours-title">Training Availability</div>
            <div className="contact-hours-rows">
              <div className="contact-hours-row"><span>Monday – Friday</span><span>6:00 AM – 9:00 PM</span></div>
              <div className="contact-hours-row"><span>Saturday</span><span>8:00 AM – 6:00 PM</span></div>
              <div className="contact-hours-row"><span>Sunday</span><span>By Appointment</span></div>
            </div>
          </div>
        </div>

        {/* Right   form */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="contact-success-title">Message Sent!</h3>
              <p className="contact-success-desc">Coach Gude will get back to you within 24 hours. Get ready to work.</p>
              <button className="btn-primary" onClick={() => setSent(false)}>Send Another Message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-header">
                <h3 className="contact-form-title">Book a Session</h3>
                <p className="contact-form-subtitle">Fill out the form and we'll reach out to schedule your first session.</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    className="form-input"
                    type="tel"
                    name="phone"
                    placeholder="+1 (254) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Program of Interest</label>
                <select className="form-input form-select" name="program" value={form.program} onChange={handleChange}>
                  <option value="">Select a program...</option>
                  {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input form-textarea"
                  name="message"
                  placeholder="Tell us about your goals, skill level, age, or any questions..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 100px 0;
          background: var(--bg-secondary);
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: var(--transition);
        }
        .contact-card:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
        }
        .contact-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--blue-subtle);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-400);
          flex-shrink: 0;
        }
        .contact-card-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--gray-500);
          margin-bottom: 2px;
        }
        .contact-card-value {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
        }
        .contact-hours {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px;
        }
        .contact-hours-title {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--blue-400);
          margin-bottom: 16px;
        }
        .contact-hours-rows { display: flex; flex-direction: column; gap: 10px; }
        .contact-hours-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--gray-400);
        }
        .contact-hours-row span:last-child { color: var(--gray-300); font-weight: 500; }

        /* Form */
        .contact-form-wrap {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .contact-form {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-form-header { margin-bottom: 4px; }
        .contact-form-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          color: #fff;
          margin-bottom: 8px;
        }
        .contact-form-subtitle {
          font-size: 14px;
          color: var(--gray-500);
          line-height: 1.6;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--gray-300);
          letter-spacing: 0.02em;
        }
        .form-input {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 14px;
          color: #fff;
          font-family: inherit;
          transition: var(--transition);
          outline: none;
          width: 100%;
        }
        .form-input::placeholder { color: var(--gray-600); }
        .form-input:focus {
          border-color: var(--blue-500);
          background: rgba(15, 25, 35, 0.9);
          box-shadow: 0 0 0 3px rgba(39,170,226,0.15);
        }
        .form-select { cursor: pointer; }
        .form-select option { background: var(--bg-card); }
        .form-textarea { resize: vertical; min-height: 100px; }

        /* Success */
        .contact-success {
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }
        .contact-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(34,197,94,0.1);
          border: 2px solid rgba(34,197,94,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22c55e;
        }
        .contact-success-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          font-weight: 800;
          text-transform: uppercase;
          color: #fff;
        }
        .contact-success-desc {
          font-size: 15px;
          color: var(--gray-400);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .contact-inner { grid-template-columns: 1fr; gap: 48px; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .contact-form { padding: 24px; }
        }
      `}</style>
    </section>
  )
}
