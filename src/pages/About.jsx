import { Link } from 'react-router-dom'

export default function About() {
  const credentials = [
    '15+ Years of Coaching Experience',
    '20+ Athletes Developed to the Collegiate Level',
    'Dr. Dish Shooting Machine on Site',
    'Private Indoor Facility in Waco, TX',
    'Individual Training Specialist',
    'Small Group Session Expert',
    'Team Training Available',
    'Game Situation & Film Work',
  ]

  return (
    <>
      <style>{`
        /* ── Hero ── */
        .about-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          margin-top: 70px;
          background-image: url('/img/about-hero-bg.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .about-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(6,9,15,0.92) 0%,
            rgba(6,9,15,0.78) 60%,
            rgba(6,9,15,0.88) 100%
          );
        }
        .about-hero__content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }
        .about-hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(52px, 8vw, 96px);
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 24px;
          color: #fff;
        }
        .about-hero__title span { color: var(--blue-400); }
        .about-hero__sub {
          font-size: 17px;
          color: var(--gray-300);
          line-height: 1.75;
          max-width: 580px;
          margin-bottom: 40px;
        }
        .about-hero__bottom-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blue-600), transparent);
        }

        /* ── Meet Coach ── */
        .meet-coach {
          padding: 110px 0;
          background: var(--bg-primary);
        }
        .meet-coach__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .meet-coach__desc {
          font-size: 16.5px;
          color: var(--gray-400);
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .meet-coach__bullets {
          list-style: none;
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .meet-coach__bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15.5px;
          color: var(--gray-300);
          font-weight: 500;
        }
        .meet-coach__check {
          color: var(--blue-600);
          font-size: 16px;
          flex-shrink: 0;
          font-weight: 700;
        }
        .meet-coach__photo-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 0 60px rgba(39,170,226,0.12), 0 30px 60px rgba(0,0,0,0.5);
        }
        .meet-coach__photo-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          box-shadow: inset 0 0 0 1px rgba(39,170,226,0.2);
          z-index: 2;
          pointer-events: none;
        }
        .meet-coach__photo {
          width: 100%;
          height: 560px;
          object-fit: cover;
          display: block;
          border-radius: 16px;
        }
        .meet-coach__photo-accent {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          background: rgba(6,9,15,0.88);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 16px 20px;
          z-index: 3;
          backdrop-filter: blur(8px);
        }
        .meet-coach__photo-accent p {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--blue-300);
          margin: 0;
        }

        /* ── Experience Grid ── */
        .exp-grid {
          padding: 110px 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .exp-grid__header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 64px;
        }
        .exp-grid__header .section-desc {
          margin: 16px auto 0;
          text-align: center;
          max-width: 560px;
        }
        .exp-grid__list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 900px;
          margin: 0 auto;
        }
        .exp-grid__item {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: var(--transition);
        }
        .exp-grid__item:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(39,170,226,0.1);
        }
        .exp-grid__icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--blue-subtle);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--blue-400);
          font-size: 16px;
        }
        .exp-grid__label {
          font-size: 15px;
          font-weight: 600;
          color: var(--gray-100);
          line-height: 1.3;
        }

        /* ── Youth CTA ── */
        .youth-cta {
          padding: 110px 0;
          background: var(--bg-primary);
        }
        .youth-cta__card {
          background: #0d1a2e;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 72px 64px;
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 80px rgba(39,170,226,0.07);
        }
        .youth-cta__card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blue-600), transparent);
        }
        .youth-cta__card .section-tag { margin-bottom: 24px; }
        .youth-cta__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(38px, 5vw, 58px);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 20px;
        }
        .youth-cta__sub {
          font-size: 16.5px;
          color: var(--gray-400);
          line-height: 1.75;
          max-width: 620px;
          margin: 0 auto 40px;
        }

        /* ── Bottom CTA ── */
        .about-bottom-cta {
          padding: 110px 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          text-align: center;
        }
        .about-bottom-cta__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(38px, 5vw, 60px);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 20px;
        }
        .about-bottom-cta__sub {
          font-size: 16.5px;
          color: var(--gray-400);
          line-height: 1.75;
          max-width: 560px;
          margin: 0 auto 40px;
        }
        .about-bottom-cta__btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .meet-coach__grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .meet-coach__photo-wrap { order: -1; }
          .meet-coach__photo { height: 420px; }
          .exp-grid__list { grid-template-columns: 1fr; }
          .youth-cta__card { padding: 48px 28px; }
        }
        @media (max-width: 600px) {
          .about-hero { min-height: 70vh; }
          .meet-coach, .exp-grid, .youth-cta, .about-bottom-cta { padding: 72px 0; }
        }
      `}</style>

      {/* ─── 1. Hero ─── */}
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <div className="container">
          <div className="about-hero__content">
            <span className="section-tag">About Us</span>
            <h1 className="about-hero__title">
              The Story Behind<br />
              <span>Gude Skillz Lab</span>
            </h1>
            <p className="about-hero__sub">
              Built for TX: years of player development, the Dr. Dish shooting machine,
              20+ athletes developed to the collegiate level — committed to the lab style.
            </p>
            <Link to="/training" className="btn-primary">Explore Training</Link>
          </div>
        </div>
        <div className="about-hero__bottom-line" />
      </section>

      {/* ─── 2. Meet Coach Gude ─── */}
      <section className="meet-coach">
        <div className="container">
          <div className="meet-coach__grid">
            {/* Left */}
            <div>
              <span className="section-tag">Meet Coach Gude</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>
                A Coach Built for the Lab
              </h2>
              <p className="meet-coach__desc">
                Coach Gude has spent years developing basketball players in Waco, TX. With access
                to the Dr. Dish shooting machine, a private indoor facility, and a commitment to
                player-first training — Gude Skillz Lab is where serious athletes come to get
                better. 20+ athletes developed to the collegiate level. 15+ years of player
                development experience.
              </p>
              <ul className="meet-coach__bullets">
                {[
                  '15+ years of player development',
                  '20+ athletes to the collegiate level',
                  'Dr. Dish shooting machine',
                  'Private indoor facility',
                  'Individual, small-group & team training',
                ].map((item) => (
                  <li key={item} className="meet-coach__bullet">
                    <span className="meet-coach__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/book-session" className="btn-primary">
                Book a Session with Coach Gude
              </Link>
            </div>

            {/* Right */}
            <div className="meet-coach__photo-wrap">
              <img
                src="/img/about-coach.jpg"
                alt="Coach Gude with athlete"
                className="meet-coach__photo"
              />
              <div className="meet-coach__photo-accent">
                <p>Coach Gude · Waco, TX · 15+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Experience Grid ─── */}
      <section className="exp-grid">
        <div className="container">
          <div className="exp-grid__header">
            <span className="section-tag">Experience</span>
            <h2 className="section-title">Experience That Translates to the Court</h2>
            <p className="section-desc" style={{ margin: '16px auto 0', textAlign: 'center', maxWidth: '580px' }}>
              15 years of coaching experience across individual, group, and team training environments.
            </p>
          </div>
          <div className="exp-grid__list">
            {credentials.map((cred) => (
              <div key={cred} className="exp-grid__item">
                <div className="exp-grid__icon">✦</div>
                <span className="exp-grid__label">{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Youth CTA ─── */}
      <section className="youth-cta">
        <div className="container">
          <div className="youth-cta__card">
            <span className="section-tag">Community</span>
            <h2 className="youth-cta__title">Support Gude Youth Development</h2>
            <p className="youth-cta__sub">
              Gude Skillz Lab is committed to developing the next generation of Waco basketball
              talent. Through affordable camps and community programs, we make elite training
              accessible.
            </p>
            <a href="mailto:GudeSkillzLab@gmail.com" className="btn-primary">
              Donate / Support
            </a>
          </div>
        </div>
      </section>

      {/* ─── 5. Bottom CTA ─── */}
      <section className="about-bottom-cta">
        <div className="container">
          <h2 className="about-bottom-cta__title">Train With Coach Gude in Waco</h2>
          <p className="about-bottom-cta__sub">
            Individual sessions, team training, and camps — all designed to make you a better player.
          </p>
          <div className="about-bottom-cta__btns">
            <Link to="/book-session" className="btn-primary">Book a Session</Link>
            <Link to="/training" className="btn-secondary">View Training Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
