import { Link } from 'react-router-dom'

const whyFeatures = [
  {
    icon: '🏀',
    title: 'We Develop Players',
    desc: 'Every session is designed with one goal — making athletes better on and off the court.',
  },
  {
    icon: '🏆',
    title: 'Experienced Coaches',
    desc: 'Led by Coach Gude with 15+ years of player development experience at all levels.',
  },
  {
    icon: '🧠',
    title: 'Elite Basketball IQ',
    desc: 'We teach players how to read the game, make decisions faster, and compete smarter.',
  },
  {
    icon: '🎯',
    title: 'Shooting Fundamentals',
    desc: 'Proven shooting mechanics refined through repetition and data-backed analysis.',
  },
  {
    icon: '⚡',
    title: 'Game Special Situations',
    desc: 'Drills rooted in real game scenarios — end of clock, zone offense, press breaks and more.',
  },
  {
    icon: '📍',
    title: 'Position Mentorship',
    desc: 'Position-specific coaching so every player receives guidance tailored to their role.',
  },
]

export default function Camps() {
  return (
    <>
      <style>{`
        /* ── Hero ── */
        .camps-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          margin-top: 70px;
          background-image: url('/img/camp-1.jpg');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .camps-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(6,9,15,0.92) 0%,
            rgba(6,9,15,0.76) 55%,
            rgba(6,9,15,0.88) 100%
          );
        }
        .camps-hero__content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }
        .camps-hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(56px, 9vw, 104px);
          line-height: 0.95;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 28px;
          color: #fff;
        }
        .camps-hero__title span { color: var(--blue-400); }
        .camps-hero__sub {
          font-size: 17px;
          color: var(--gray-300);
          line-height: 1.75;
          max-width: 580px;
          margin-bottom: 40px;
        }
        .camps-hero__bottom-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blue-600), transparent);
        }

        /* ── Summer Camps ── */
        .camps-list {
          padding: 110px 0;
          background: var(--bg-primary);
        }
        .camps-list__header {
          text-align: center;
          margin-bottom: 64px;
        }
        .camps-list__header .section-desc {
          margin: 16px auto 0;
          text-align: center;
          max-width: 600px;
        }
        .camps-list__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(38px, 5vw, 60px);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
        }
        .camps-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .camp-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
          position: relative;
        }
        .camp-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(39,170,226,0.14);
        }
        .camp-card__top-accent {
          height: 4px;
          background: linear-gradient(90deg, var(--blue-600), var(--blue-400));
        }
        .camp-card__body {
          padding: 36px 36px 0;
        }
        .camp-card__tags {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .camp-card__tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(39,170,226,0.08);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--blue-400);
        }
        .camp-card__tag--accent {
          background: rgba(39,170,226,0.18);
          border-color: rgba(39,170,226,0.4);
          color: var(--blue-300);
        }
        .camp-card__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          letter-spacing: 0.05em;
          color: #fff;
          margin-bottom: 12px;
        }
        .camp-card__desc {
          font-size: 15px;
          color: var(--gray-400);
          line-height: 1.75;
          margin-bottom: 28px;
        }
        .camp-card__features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }
        .camp-card__feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          color: var(--gray-300);
        }
        .camp-card__feat-check {
          color: var(--blue-400);
          font-weight: 700;
          flex-shrink: 0;
        }
        .camp-card__footer {
          padding: 24px 36px 36px;
          background: rgba(39,170,226,0.04);
          border-top: 1px solid var(--border);
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .camp-card__price-wrap {}
        .camp-card__price-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-500);
          margin-bottom: 4px;
        }
        .camp-card__price {
          font-family: 'Oswald', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--blue-300);
        }
        .camp-card__earlybird {
          font-size: 11.5px;
          color: #4ade80;
          font-weight: 600;
          letter-spacing: 0.04em;
          margin-top: 4px;
        }

        /* ── Why Our Camps ── */
        .camps-why {
          padding: 110px 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .camps-why__header {
          text-align: center;
          margin-bottom: 64px;
        }
        .camps-why__header .section-desc {
          margin: 16px auto 0;
          text-align: center;
          max-width: 600px;
        }
        .camps-why__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(38px, 5vw, 60px);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .why-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px 28px;
          transition: var(--transition);
        }
        .why-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(39,170,226,0.1);
        }
        .why-card__icon {
          width: 52px;
          height: 52px;
          background: rgba(39,170,226,0.08);
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 20px;
        }
        .why-card__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.06em;
          color: #fff;
          margin-bottom: 10px;
        }
        .why-card__desc {
          font-size: 14.5px;
          color: var(--gray-400);
          line-height: 1.7;
        }

        /* ── Camp CTA ── */
        .camp-cta {
          padding: 110px 0;
          background: var(--bg-primary);
          text-align: center;
        }
        .camp-cta__inner {
          max-width: 800px;
          margin: 0 auto;
          background: linear-gradient(135deg, #0d1a2e 0%, #0a1422 100%);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 72px 56px;
          position: relative;
          overflow: hidden;
        }
        .camp-cta__inner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blue-600), transparent);
        }
        .camp-cta__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(38px, 5vw, 58px);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 20px;
        }
        .camp-cta__sub {
          font-size: 16.5px;
          color: var(--gray-400);
          line-height: 1.75;
          max-width: 580px;
          margin: 0 auto 40px;
        }

        @media (max-width: 900px) {
          .camps-cards { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .camp-cta__inner { padding: 48px 28px; }
        }
        @media (max-width: 600px) {
          .camps-hero { min-height: 75vh; }
          .camps-list, .camps-why, .camp-cta { padding: 72px 0; }
          .why-grid { grid-template-columns: 1fr; }
          .camp-card__body { padding: 28px 24px 0; }
          .camp-card__footer { padding: 20px 24px 28px; }
        }
      `}</style>

      {/* ─── 1. Hero ─── */}
      <section className="camps-hero">
        <div className="camps-hero__overlay" />
        <div className="container">
          <div className="camps-hero__content">
            <span className="section-tag">Basketball Camps</span>
            <h1 className="camps-hero__title">
              Develop Skills.<br />
              <span>Build Confidence.</span>
            </h1>
            <p className="camps-hero__sub">
              Gude Skillz Lab summer basketball camps bring together athletes of all levels for an
              immersive, skill-focused training experience in Waco, TX.
            </p>
            <a
              href="#camps-list"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('camps-list')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Camps
            </a>
          </div>
        </div>
        <div className="camps-hero__bottom-line" />
      </section>

      {/* ─── 2. Summer Camps ─── */}
      <section className="camps-list" id="camps-list">
        <div className="container">
          <div className="camps-list__header">
            <span className="section-tag">Summer Basketball Camps in Waco</span>
            <h2 className="camps-list__title">Find the Right Camp for Your Game</h2>
            <p className="section-desc">
              Our camps are designed to challenge and develop players at every stage — from
              beginners to advanced athletes.
            </p>
          </div>
          <div className="camps-cards">
            {/* Card 1 — Beginners */}
            <div className="camp-card">
              <div className="camp-card__top-accent" />
              <div className="camp-card__body">
                <div className="camp-card__tags">
                  <span className="camp-card__tag">Ages 7–11</span>
                </div>
                <div className="camp-card__name">Beginners Camp</div>
                <p className="camp-card__desc">
                  Perfect introduction to basketball fundamentals. Athletes will learn proper form,
                  basic dribbling, passing, and shooting in a fun, supportive environment.
                </p>
                <ul className="camp-card__features">
                  {[
                    'Ball handling basics',
                    'Shooting form',
                    'Passing & footwork',
                    'Fun competitive games',
                    'Certificate of completion',
                  ].map((f) => (
                    <li key={f} className="camp-card__feature">
                      <span className="camp-card__feat-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="camp-card__footer">
                <div className="camp-card__price-wrap">
                  <div className="camp-card__price-label">Pricing</div>
                  <div className="camp-card__price">Contact for Pricing</div>
                  <div className="camp-card__earlybird">Early Bird: Register now!</div>
                </div>
                <Link to="/book-session" className="btn-primary" style={{ fontSize: '14px', padding: '12px 22px' }}>
                  Register Now
                </Link>
              </div>
            </div>

            {/* Card 2 — Intermediate/Advanced */}
            <div className="camp-card">
              <div className="camp-card__top-accent" style={{ background: 'linear-gradient(90deg, #4dbde8, #8dd7f5)' }} />
              <div className="camp-card__body">
                <div className="camp-card__tags">
                  <span className="camp-card__tag">Ages 12–18</span>
                  <span className="camp-card__tag camp-card__tag--accent">Competitive</span>
                </div>
                <div className="camp-card__name">Intermediate / Advanced Camp</div>
                <p className="camp-card__desc">
                  For players who already have foundational skills and want to take their game to
                  the next level. High-intensity training, game situations, and film work.
                </p>
                <ul className="camp-card__features">
                  {[
                    'Advanced ball handling',
                    'Shot creation drills',
                    'Defensive schemes',
                    'Live game situations',
                    'Film review session',
                  ].map((f) => (
                    <li key={f} className="camp-card__feature">
                      <span className="camp-card__feat-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="camp-card__footer">
                <div className="camp-card__price-wrap">
                  <div className="camp-card__price-label">Pricing</div>
                  <div className="camp-card__price">Contact for Pricing</div>
                  <div className="camp-card__earlybird">Early Bird: Register now!</div>
                </div>
                <Link to="/book-session" className="btn-primary" style={{ fontSize: '14px', padding: '12px 22px' }}>
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Why Our Camps ─── */}
      <section className="camps-why">
        <div className="container">
          <div className="camps-why__header">
            <span className="section-tag">Why Our Camps</span>
            <h2 className="camps-why__title">Develop Skills. Compete With Purpose.</h2>
            <p className="section-desc">
              Every drill, every rep, every game situation — designed to build players who perform
              when it matters.
            </p>
          </div>
          <div className="why-grid">
            {whyFeatures.map((feat) => (
              <div key={feat.title} className="why-card">
                <div className="why-card__icon">{feat.icon}</div>
                <div className="why-card__title">{feat.title}</div>
                <p className="why-card__desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Camp CTA ─── */}
      <section className="camp-cta">
        <div className="container">
          <div className="camp-cta__inner">
            <span className="section-tag">Upcoming Camps</span>
            <h2 className="camp-cta__title">
              Ask About Upcoming<br />Gude Skillz Lab Camps
            </h2>
            <p className="camp-cta__sub">
              Our camp schedule fills up fast. Reach out today to reserve your athlete's spot and
              be first to hear about new camp dates.
            </p>
            <Link to="/contact" className="btn-primary">Get Camp Info</Link>
          </div>
        </div>
      </section>
    </>
  )
}
