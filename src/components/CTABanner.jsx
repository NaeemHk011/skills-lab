export default function CTABanner() {
  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta-section">
      <div className="cta-bg" />
      <div className="cta-grid" />

      <div className="container cta-inner">
        <div className="cta-orb" />

        <span className="section-tag" style={{ alignSelf: 'center' }}>Ready to Start?</span>

        <h2 className="cta-title">
          STOP WAITING.<br />
          <span>START TRAINING.</span>
        </h2>

        <p className="cta-desc">
          Every great player started with a decision. Make yours today   book a session at
          Gude Skillz Lab and take the first real step toward becoming the player you know you can be.
        </p>

        <div className="cta-actions">
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-primary cta-btn-main"
          >
            Book a Session Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button
            onClick={() => handleScroll('#programs')}
            className="btn-secondary"
          >
            Explore Programs
          </button>
        </div>

        <div className="cta-contact-strip">
          <a href="tel:+12544982285" className="cta-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
            </svg>
            +1 254-498-2285
          </a>
          <span className="cta-contact-sep" />
          <a href="mailto:GudeSkillzLab@gmail.com" className="cta-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            GudeSkillzLab@gmail.com
          </a>
        </div>
      </div>

      <style>{`
        .cta-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
          background: var(--bg-primary);
          text-align: center;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(39,170,226,0.12) 0%, transparent 50%, rgba(26,133,181,0.08) 100%);
        }
        .cta-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(39,170,226,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(39,170,226,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .cta-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .cta-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(39,170,226,0.15) 0%, transparent 70%);
          pointer-events: none;
          filter: blur(30px);
        }
        .cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(44px, 7vw, 84px);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.97;
          color: #fff;
        }
        .cta-title span { color: var(--blue-400); }
        .cta-desc {
          font-size: 17px;
          color: var(--gray-400);
          line-height: 1.75;
          max-width: 560px;
        }
        .cta-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }
        .cta-btn-main { padding: 16px 36px; font-size: 16px; }
        .cta-contact-strip {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cta-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--gray-400);
          transition: var(--transition);
        }
        .cta-contact-item:hover { color: var(--blue-400); }
        .cta-contact-item svg { color: var(--blue-500); }
        .cta-contact-sep {
          width: 1px;
          height: 16px;
          background: var(--gray-600);
        }
      `}</style>
    </section>
  )
}
