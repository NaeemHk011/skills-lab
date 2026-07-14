const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Skill Development',
    desc: 'Fundamentals-first approach that builds a strong technical foundation for every player.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Game-Ready Training',
    desc: 'Drills and scenarios designed to translate directly into real-game performance.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Confidence Building',
    desc: 'Mental reps alongside physical ones   because the game is won in the mind first.',
  },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-inner">

        {/* Left   visual */}
        <div className="about-visual">
          <div className="about-img-wrap">
            <img src="/img/about-coach.jpg" alt="Coach Gude" className="about-img-placeholder" />

            {/* Floating card */}
            <div className="about-float-card">
              <div className="about-float-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                </svg>
              </div>
              <div>
                <div className="about-float-value">200+</div>
                <div className="about-float-label">Athletes Elevated</div>
              </div>
            </div>
          </div>

          {/* Background accent */}
          <div className="about-bg-accent" />
        </div>

        {/* Right   content */}
        <div className="about-content">
          <span className="section-tag">About Coach Gude</span>
          <h2 className="section-title">
            TRAINING WITH<br />
            <span>PURPOSE &amp; PASSION</span>
          </h2>
          <p className="section-desc" style={{ marginTop: '20px', marginBottom: '32px' }}>
            Coach Gude founded Gude Skillz Lab with one mission   to give every athlete
            in Waco, TX the coaching, structure, and belief they need to unlock their
            full potential on the court. With years of experience developing players at
            every level, Coach Gude brings intensity, precision, and genuine care to
            every session.
          </p>
          <p className="section-desc" style={{ marginBottom: '40px' }}>
            Whether you're just starting out or preparing for the next level, Gude Skillz
            Lab is where athletes become players.
          </p>

          {/* Pillars */}
          <div className="about-pillars">
            {pillars.map((p, i) => (
              <div key={i} className="about-pillar">
                <div className="about-pillar-icon">{p.icon}</div>
                <div>
                  <div className="about-pillar-title">{p.title}</div>
                  <div className="about-pillar-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 100px 0;
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
        }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-visual {
          position: relative;
        }
        .about-img-wrap {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: visible;
        }
        .about-img-placeholder {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          object-fit: cover;
          display: block;
        }
        .about-float-card {
          position: absolute;
          bottom: -20px;
          right: -24px;
          background: var(--bg-card);
          border: 1px solid var(--border-hover);
          border-radius: var(--radius);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.5);
        }
        .about-float-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--blue-subtle);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-400);
          flex-shrink: 0;
        }
        .about-float-value {
          font-family: 'Oswald', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .about-float-label {
          font-size: 11px;
          color: var(--gray-500);
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 2px;
        }
        .about-bg-accent {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(39,170,226,0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }
        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .about-pillar {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 20px;
          border-radius: var(--radius);
          background: var(--bg-card);
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .about-pillar:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
        }
        .about-pillar-icon {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          background: var(--blue-subtle);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-400);
          flex-shrink: 0;
        }
        .about-pillar-title {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }
        .about-pillar-desc {
          font-size: 13.5px;
          color: var(--gray-500);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-img-placeholder { aspect-ratio: 16/9; }
        }
      `}</style>
    </section>
  )
}
