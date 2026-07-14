const campFeatures = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Elite Instruction',
    desc: 'Learn directly from Coach Gude and experienced guest coaches in a structured environment.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'All Skill Levels',
    desc: 'Camps are designed to challenge beginners and advanced players alike with position-specific work.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Full-Day Schedule',
    desc: 'Structured morning-to-evening programming that maximizes reps, learning, and competitive play.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Safe Environment',
    desc: 'A positive, disciplined training space where athletes can take risks, grow, and compete freely.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Measurable Growth',
    desc: 'Athletes leave camp with documented progress reports and a clear plan for continued development.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'Recognition & Awards',
    desc: 'Top performers are recognized each day with awards and certificates of completion.',
  },
]

export default function Camps() {
  const handleScroll = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="camps" className="camps-section">
      <div className="container">
        {/* Header */}
        <div className="camps-header">
          <span className="section-tag">Basketball Camps</span>
          <h2 className="section-title">
            IMMERSIVE CAMPS THAT<br /><span>TRANSFORM PLAYERS</span>
          </h2>
          <p className="section-desc" style={{ marginTop: '16px' }}>
            Gude Skillz Lab camps are multi-day intensive programs designed to give athletes a concentrated
            dose of elite training, competition, and development in Waco, TX.
          </p>
        </div>

        {/* Main camp card */}
        <div className="camps-main-card">
          <div className="camps-main-content">
            <div className="camps-main-badge">Now Enrolling   Summer 2026</div>
            <h3 className="camps-main-title">GUDE SKILLZ<br />ELITE TRAINING CAMP</h3>
            <p className="camps-main-desc">
              Our flagship camp experience brings together the best athletes in the Waco area for
              days of focused skill work, competitive scrimmages, and team building. Open to all
              skill levels, ages 8–18.
            </p>
            <div className="camps-main-details">
              <div className="camps-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>Multiple dates available</span>
              </div>
              <div className="camps-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Waco, TX</span>
              </div>
              <div className="camps-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Ages 8–18 · All Skill Levels</span>
              </div>
            </div>
            <button onClick={handleScroll} className="btn-primary">
              Register for Camp
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          <div className="camps-main-visual">
            <img src="/img/camp-1.jpg" alt="Basketball Camp" className="camps-main-photo" />
          </div>
        </div>

        {/* Feature grid */}
        <div className="camps-features">
          {campFeatures.map((f, i) => (
            <div key={i} className="camps-feature">
              <div className="camps-feature-icon">{f.icon}</div>
              <div className="camps-feature-title">{f.title}</div>
              <div className="camps-feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .camps-section {
          padding: 100px 0;
          background: var(--bg-secondary);
        }
        .camps-header {
          max-width: 680px;
          margin-bottom: 56px;
        }
        .camps-main-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-card);
          margin-bottom: 48px;
          position: relative;
        }
        .camps-main-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--blue-600), transparent);
        }
        .camps-main-content {
          padding: 48px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .camps-main-badge {
          display: inline-flex;
          width: fit-content;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.3);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #22c55e;
        }
        .camps-main-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.0;
          color: #fff;
        }
        .camps-main-desc {
          font-size: 15px;
          color: var(--gray-400);
          line-height: 1.7;
        }
        .camps-main-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .camps-detail {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--gray-300);
        }
        .camps-detail svg { color: var(--blue-400); flex-shrink: 0; }
        .camps-main-visual {
          border-left: 1px solid var(--border);
          overflow: hidden;
          min-height: 320px;
        }
        .camps-main-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .camps-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .camps-feature {
          background: var(--bg-card);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: var(--transition);
        }
        .camps-feature:hover {
          background: var(--bg-card-hover);
        }
        .camps-feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: var(--blue-subtle);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-400);
        }
        .camps-feature-title {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
        }
        .camps-feature-desc {
          font-size: 13.5px;
          color: var(--gray-500);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .camps-main-card { grid-template-columns: 1fr; }
          .camps-main-visual { display: none; }
          .camps-features { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 580px) {
          .camps-features { grid-template-columns: 1fr; }
          .camps-main-content { padding: 28px; }
        }
      `}</style>
    </section>
  )
}
