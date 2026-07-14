import { Link } from 'react-router-dom'

const metrics = [
  { label: 'Shot Arc',         desc: 'Optimal angle for every shot' },
  { label: 'Shot Depth',       desc: 'Short, perfect, or long tracking' },
  { label: 'Left/Right Data',  desc: 'Lateral drift on every attempt' },
  { label: 'Consistency Score',desc: 'Measure repetition and form' },
]

export default function Noah() {
  return (
    <section className="noah-section">
      <div className="noah-top-line" />
      <div className="container">

        {/* Header row */}
        <div className="noah-header">
          <div className="noah-header-left">
            <span className="section-tag">Noah Shooting Analysis Lab</span>
            <h2 className="section-title">
              DISCOVER EXACTLY WHY<br />
              <span>SHOTS GO IN — OR MISS.</span>
            </h2>
          </div>
          <p className="noah-header-desc section-desc">
            Every NOAH shooting session is powered by the same advanced shot tracking
            technology trusted by college and professional basketball programs.
          </p>
        </div>

        {/* Content + image row */}
        <div className="noah-body">

          {/* Left — text */}
          <div className="noah-text">
            <p className="noah-para">
              Instantly measure shot arc, depth, left/right accuracy, and shooting consistency
              to identify exactly what needs improvement. Every workout is backed by real
              data — not guesswork — helping athletes build confidence and become more
              consistent shooters.
            </p>

            <div className="noah-metrics">
              {metrics.map((m) => (
                <div key={m.label} className="noah-metric">
                  <div className="noah-metric-dot" />
                  <div>
                    <div className="noah-metric-label">{m.label}</div>
                    <div className="noah-metric-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="noah-actions">
              <Link to="/training" className="btn-primary">
                View NOAH Pricing
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/book-session" className="btn-secondary">Book a Session</Link>
            </div>
          </div>

          {/* Right — main image */}
          <div className="noah-img-main-wrap">
            <img src="/img/noah-main.png" alt="NOAH Shot Tracker in action" className="noah-img-main" />
          </div>
        </div>

      </div>

      <style>{`
        .noah-section {
          padding: 100px 0;
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
        }
        .noah-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blue-600), transparent);
        }

        /* Header */
        .noah-header {
          display: flex;
          gap: 60px;
          align-items: flex-end;
          margin-bottom: 64px;
        }
        .noah-header-left { flex-shrink: 0; max-width: 540px; }
        .noah-header-desc { max-width: 420px; }

        /* Body */
        .noah-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          margin-bottom: 0;
        }

        /* Text side */
        .noah-para {
          font-size: 16.5px;
          color: var(--gray-400);
          line-height: 1.8;
          margin-bottom: 36px;
        }
        .noah-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }
        .noah-metric {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 16px;
          transition: var(--transition);
        }
        .noah-metric:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
        }
        .noah-metric-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--blue-600);
          flex-shrink: 0;
          margin-top: 5px;
        }
        .noah-metric-label {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 3px;
        }
        .noah-metric-desc {
          font-size: 12.5px;
          color: var(--gray-500);
          line-height: 1.5;
        }
        .noah-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Main image */
        .noah-img-main-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 60px rgba(39,170,226,0.08);
          background: var(--bg-card);
        }
        .noah-img-main {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        @media (max-width: 1024px) {
          .noah-header { flex-direction: column; gap: 24px; align-items: flex-start; }
          .noah-header-desc { max-width: 100%; }
          .noah-body { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .noah-section { padding: 72px 0; }
          .noah-metrics { grid-template-columns: 1fr; }
          .noah-actions { flex-direction: column; }
        }
      `}</style>
    </section>
  )
}
