import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01',
    title: 'Assess Your Game',
    desc: 'We start with a comprehensive skill assessment to understand where you are, what your goals are, and what it will take to get you there.',
  },
  {
    num: '02',
    title: 'Build Your Program',
    desc: "Coach Gude creates a custom training plan targeting your specific needs — whether it's handles, shooting, defense, or mental toughness.",
  },
  {
    num: '03',
    title: 'Train Hard & Consistently',
    desc: 'Show up, put in the work. Each session builds on the last — reps, drills, live situations, and constant coaching feedback.',
  },
  {
    num: '04',
    title: 'Elevate Your Game',
    desc: 'Track your progress, celebrate your wins, and watch your game-time performance reach a new level. This is what the lab is built for.',
  },
]

export default function Process() {
  return (
    <section className="process-section">
      {/* Background glow */}
      <div className="process-glow-left" />
      <div className="process-glow-right" />

      <div className="container">
        <div className="process-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            YOUR PATH TO<br /><span>BECOMING ELITE</span>
          </h2>
          <p className="section-desc" style={{ marginTop: '16px' }}>
            Four steps. Zero shortcuts. Everything you need to go from where you are to where you want to be.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={i} className="process-card">
              {/* Number watermark */}
              <div className="process-watermark">{s.num}</div>

              <div className="process-card-inner">
                <div className="process-num-tag">{s.num}</div>
                <h3 className="process-title">{s.title}</h3>
                <p className="process-desc">{s.desc}</p>
              </div>

              {/* Connector arrow — not on last */}
              {i < steps.length - 1 && (
                <div className="process-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process-cta">
          <Link to="/book-session" className="btn-primary">
            Start Your Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        .process-section {
          padding: 110px 0;
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }
        .process-glow-left {
          position: absolute;
          top: 0; left: -200px; bottom: 0;
          width: 500px;
          background: radial-gradient(ellipse at left, rgba(39,170,226,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .process-glow-right {
          position: absolute;
          top: 0; right: -200px; bottom: 0;
          width: 500px;
          background: radial-gradient(ellipse at right, rgba(39,170,226,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .process-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 80px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          position: relative;
        }

        .process-card {
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                      border-color 0.3s,
                      box-shadow 0.35s;
        }
        .process-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-hover);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(39,170,226,0.15);
        }

        /* Big watermark number */
        .process-watermark {
          position: absolute;
          top: -16px;
          right: -8px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 120px;
          line-height: 1;
          font-weight: 400;
          color: rgba(39,170,226,0.045);
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.02em;
        }

        .process-card-inner {
          position: relative;
          z-index: 1;
          padding: 36px 28px 40px;
        }

        .process-num-tag {
          font-family: 'Oswald', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--blue-600);
          background: rgba(39,170,226,0.1);
          border: 1px solid rgba(39,170,226,0.25);
          border-radius: 100px;
          padding: 4px 12px;
          display: inline-block;
          margin-bottom: 24px;
        }

        .process-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
          line-height: 1.05;
          margin-bottom: 14px;
        }

        .process-desc {
          font-size: 14px;
          color: var(--gray-500);
          line-height: 1.7;
        }

        /* Connector arrow positioned outside card on right edge */
        .process-arrow {
          position: absolute;
          top: 50%;
          right: -18px;
          transform: translateY(-50%);
          z-index: 10;
          width: 36px;
          height: 36px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-500);
        }

        .process-cta {
          display: flex;
          justify-content: center;
          margin-top: 64px;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .process-arrow { display: none; }
        }
        @media (max-width: 640px) {
          .process-section { padding: 72px 0; }
          .process-grid { grid-template-columns: 1fr; }
          .process-card:hover { transform: none; }
          .process-watermark { font-size: 90px; }
        }
      `}</style>
    </section>
  )
}
