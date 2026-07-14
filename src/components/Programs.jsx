import { Link } from 'react-router-dom'

const programs = [
  {
    tag: 'Most Popular',
    title: 'Individual\nTraining',
    subtitle: '1-on-1 Private Sessions',
    desc: 'Personalized sessions tailored to your skill level and goals. Coach Gude identifies your weaknesses, builds your strengths, and creates a plan that gets results.',
    features: ['Custom skill assessment', 'Ball handling & footwork', 'Shooting mechanics', 'Game situations', 'Progress tracking'],
    img: '/img/home-5.jpg',
    link: '/training',
    highlight: true,
  },
  {
    tag: 'Great for Teams',
    title: 'Team\nTraining',
    subtitle: 'Small Group Sessions',
    desc: 'Structured group training that develops chemistry, communication, and collective skill. Competitive drills that push every player to their limit.',
    features: ['Team chemistry drills', 'Defensive rotations', 'Offensive systems', 'Live game situations', 'Film review'],
    img: '/img/home-6.jpg',
    link: '/training',
    highlight: false,
  },
  {
    tag: 'Seasonal',
    title: 'Basketball\nCamps',
    subtitle: 'Multi-Day Programs',
    desc: 'Immersive multi-day camps that create an elite training environment. Skill work, competitive play, and mental development in a high-energy setting.',
    features: ['Full-day schedule', 'Position-specific work', 'Competitive scrimmages', 'Guest coaches', 'Awards & certificates'],
    img: '/img/camp-1.jpg',
    link: '/camps',
    highlight: false,
  },
]

export default function Programs() {
  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="programs-header">
          <div>
            <span className="section-tag">Training Programs</span>
            <h2 className="section-title">CHOOSE YOUR <span>PATH TO</span><br />GREATNESS</h2>
          </div>
          <p className="section-desc">
            Every athlete is different. Multiple training formats designed to meet you exactly where you are and take you where you want to go.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((p, i) => (
            <div key={i} className={`prog-card${p.highlight ? ' prog-card--featured' : ''}`}>
              {/* Background image */}
              <div className="prog-card-bg" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="prog-card-overlay" />

              {/* Content */}
              <div className="prog-card-inner">
                <div className="prog-card-top">
                  <span className="prog-tag">{p.tag}</span>
                </div>

                <div className="prog-card-body">
                  <h3 className="prog-title">{p.title.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}</h3>
                  <div className="prog-subtitle">{p.subtitle}</div>
                  <p className="prog-desc">{p.desc}</p>

                  <ul className="prog-features">
                    {p.features.map((f) => (
                      <li key={f} className="prog-feature">
                        <span className="prog-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={p.link} className={p.highlight ? 'btn-primary prog-cta' : 'prog-cta-outline'}>
                  {p.highlight ? 'Book 1-on-1' : p.tag === 'Seasonal' ? 'View Camp Dates' : 'Book Team Session'}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .programs-section {
          padding: 110px 0;
          background: var(--bg-primary);
        }
        .programs-header {
          display: flex;
          gap: 60px;
          align-items: flex-end;
          margin-bottom: 60px;
        }
        .programs-header > div:first-child { flex-shrink: 0; }

        .programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Card base */
        .prog-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 580px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          border: 1px solid var(--border);
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.4s cubic-bezier(0.4,0,0.2,1),
                      border-color 0.3s;
        }
        .prog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.7);
          border-color: rgba(39,170,226,0.4);
        }
        .prog-card--featured {
          border-color: rgba(39,170,226,0.5);
          box-shadow: 0 0 40px rgba(39,170,226,0.12);
        }
        .prog-card--featured:hover {
          box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(39,170,226,0.2);
        }

        /* Background image */
        .prog-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .prog-card:hover .prog-card-bg { transform: scale(1.07); }

        /* Overlay — strong gradient from bottom, subtle top */
        .prog-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(6,9,15,0.98) 0%,
            rgba(6,9,15,0.88) 40%,
            rgba(6,9,15,0.55) 70%,
            rgba(6,9,15,0.25) 100%
          );
          transition: background 0.4s;
        }
        .prog-card--featured .prog-card-overlay {
          background: linear-gradient(
            to top,
            rgba(6,9,15,0.98) 0%,
            rgba(6,9,15,0.90) 40%,
            rgba(6,9,15,0.60) 70%,
            rgba(6,9,15,0.30) 100%
          );
        }

        /* Inner layout */
        .prog-card-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 28px 28px 32px;
        }
        .prog-card-top { margin-bottom: auto; }

        /* Tag */
        .prog-tag {
          display: inline-flex;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--blue-400);
          background: rgba(39,170,226,0.12);
          border: 1px solid rgba(39,170,226,0.3);
          border-radius: 100px;
          padding: 5px 14px;
        }

        /* Body — sits at bottom */
        .prog-card-body { margin-top: auto; padding-top: 200px; }

        .prog-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 44px;
          line-height: 0.95;
          letter-spacing: 0.03em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .prog-subtitle {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--blue-400);
          margin-bottom: 14px;
        }
        .prog-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .prog-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 28px;
        }
        .prog-feature {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
        }
        .prog-check {
          color: var(--blue-400);
          font-weight: 700;
          font-size: 12px;
          flex-shrink: 0;
        }

        /* CTAs */
        .prog-cta {
          justify-content: center;
          text-decoration: none;
          display: inline-flex;
        }
        .prog-cta-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.2);
          color: #fff;
          padding: 13px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-decoration: none;
          transition: var(--transition);
          justify-content: center;
          width: 100%;
        }
        .prog-cta-outline:hover {
          border-color: var(--blue-400);
          color: var(--blue-400);
          background: rgba(39,170,226,0.1);
        }

        @media (max-width: 1024px) {
          .programs-header { flex-direction: column; gap: 20px; align-items: flex-start; }
          .programs-grid { grid-template-columns: 1fr 1fr; }
          .prog-card:nth-child(3) { grid-column: span 2; min-height: 420px; }
          .prog-card:nth-child(3) .prog-card-body { padding-top: 100px; }
        }
        @media (max-width: 680px) {
          .programs-grid { grid-template-columns: 1fr; }
          .prog-card:nth-child(3) { grid-column: span 1; min-height: 520px; }
          .prog-card:nth-child(3) .prog-card-body { padding-top: 200px; }
          .prog-card:hover { transform: none; }
        }
      `}</style>
    </section>
  )
}
