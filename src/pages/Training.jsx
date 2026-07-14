import { Link } from 'react-router-dom'

export default function Training() {
  const noahPlans = [
    {
      name: '5 Min Stats',
      price: '$35',
      features: ['Shot arc data', 'Release angle', 'Left/right data', 'Shot depth'],
      popular: false,
    },
    {
      name: '10 Min Stats',
      price: '$50',
      features: ['Everything in 5 Min', 'Extended session', 'More shot attempts', 'Trend tracking'],
      popular: false,
    },
    {
      name: '15 Min Stats + Report',
      price: '$149',
      features: ['Full analysis report', 'All 10 min features', 'Written recommendations', 'Email delivery'],
      popular: true,
    },
  ]

  const oneOnOneFeatures = ['Custom skill plan', 'Ball handling', 'Shooting mechanics', 'Game situations', 'Progress tracking']

  const oneOnOnePlans = [
    { name: 'Single Session', sub: '30 Min', price: '$50', save: null },
    { name: '4-Pack Sessions', sub: '60 Min each', price: '$180', save: 'Save $40' },
    { name: 'Per Session Rate', sub: 'When booking 4+', price: '$40', save: null },
  ]

  const groupPlans = [
    {
      name: 'Drop-In Class',
      price: '$30',
      unit: '/session',
      features: ['Up to 8 athletes', 'Skill-focused drills', 'All positions welcome'],
    },
    {
      name: 'Group Pack (5)',
      price: '$25',
      unit: '/session',
      features: ['5 prepaid sessions', 'Save $25 total', 'Flexible scheduling'],
    },
    {
      name: 'Team Session',
      price: 'Contact',
      unit: ' for pricing',
      features: ['Full team training', 'Custom drills & plays', 'Film review available'],
    },
  ]

  const memberships = [
    {
      name: 'Starter',
      price: '$75',
      unit: '/mo',
      features: ['2 sessions/month', 'Group classes included'],
      popular: false,
    },
    {
      name: 'Athlete',
      price: '$140',
      unit: '/mo',
      features: ['4 sessions/month', 'Priority scheduling', 'NOAH analysis session'],
      popular: true,
    },
    {
      name: 'Elite',
      price: '$250',
      unit: '/mo',
      features: ['Unlimited sessions', 'All features', 'Monthly film review', 'Direct coach access'],
      popular: false,
    },
  ]

  const bundles = [
    { name: '5 Session Bundle', price: '$180', save: 'Save $20', badge: null, features: ['Flexible scheduling'] },
    { name: '10 Session Bundle', price: '$340', save: 'Save $60', badge: 'Best Value', features: ['Best value badge'] },
    { name: '20 Session Bundle', price: '$480', save: 'Save $120', badge: 'Premium', features: ['Phone support'] },
  ]

  return (
    <>
      <style>{`
        /* ── Hero ── */
        .train-hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          margin-top: 70px;
          background-image: url('/img/training-hero-bg.jpg');
          background-size: cover;
          background-position: center top;
          overflow: hidden;
        }
        .train-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(6,9,15,0.95) 0%,
            rgba(6,9,15,0.85) 60%,
            rgba(6,9,15,0.92) 100%
          );
        }
        .train-hero__content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }
        .train-hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(52px, 8vw, 96px);
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 24px;
          color: #fff;
        }
        .train-hero__title span { color: var(--blue-400); }
        .train-hero__sub {
          font-size: 17px;
          color: var(--gray-300);
          line-height: 1.75;
          max-width: 580px;
          margin-bottom: 40px;
        }
        .train-hero__bottom-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blue-600), transparent);
        }

        /* ── Shared section styles ── */
        .train-section {
          padding: 110px 0;
        }
        .train-section--alt {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .train-section--dark {
          background: #060c16;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .train-section__header {
          margin-bottom: 56px;
        }
        .train-section__header--center {
          text-align: center;
        }
        .train-section__header--center .section-desc {
          margin: 16px auto 0;
          text-align: center;
        }
        .train-section__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(36px, 5vw, 58px);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 0;
        }
        .train-section__desc {
          font-size: 16.5px;
          color: var(--gray-400);
          line-height: 1.75;
          max-width: 600px;
          margin-top: 16px;
        }

        /* ── Cards grid ── */
        .cards-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .price-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px 28px;
          position: relative;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }
        .price-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(39,170,226,0.12);
        }
        .price-card--popular {
          border-color: var(--blue-600);
          background: linear-gradient(145deg, #0a1929 0%, var(--bg-card) 100%);
          box-shadow: 0 0 40px rgba(39,170,226,0.18);
        }
        .price-card--popular:hover {
          box-shadow: 0 16px 60px rgba(39,170,226,0.28);
        }
        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--blue-600);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 100px;
          white-space: nowrap;
        }
        .price-card__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.06em;
          color: #fff;
          margin-bottom: 4px;
        }
        .price-card__sub {
          font-size: 13px;
          color: var(--gray-500);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 600;
        }
        .price-card__price {
          font-family: 'Oswald', sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: var(--blue-400);
          line-height: 1;
          margin-bottom: 4px;
        }
        .price-card__price-unit {
          font-size: 16px;
          font-weight: 400;
          color: var(--gray-500);
        }
        .price-card__save {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: #4ade80;
          background: rgba(74,222,128,0.1);
          border: 1px solid rgba(74,222,128,0.25);
          border-radius: 100px;
          padding: 3px 10px;
          margin-bottom: 24px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .price-card__divider {
          height: 1px;
          background: var(--border);
          margin: 20px 0;
        }
        .price-card__features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .price-card__feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          color: var(--gray-300);
        }
        .price-card__check {
          color: var(--blue-400);
          font-size: 14px;
          flex-shrink: 0;
          font-weight: 700;
        }
        .price-card__cta {
          margin-top: 28px;
          display: block;
          text-align: center;
          padding: 13px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: var(--transition);
          background: transparent;
          border: 1.5px solid var(--border-hover);
          color: var(--gray-300);
          text-decoration: none;
        }
        .price-card--popular .price-card__cta {
          background: var(--blue-600);
          border-color: var(--blue-600);
          color: #fff;
        }
        .price-card__cta:hover {
          background: var(--blue-600);
          border-color: var(--blue-600);
          color: #fff;
          transform: none;
        }

        /* ── NOAH section layout ── */
        .noah-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-bottom: 64px;
        }
        .noah-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .noah-img-wrap img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }

        /* ── Membership dark bg ── */
        .membership-wrap {
          max-width: 1100px;
          margin: 0 auto;
        }
        .membership-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 56px;
        }

        /* ── Bottom CTA ── */
        .train-bottom-cta {
          padding: 110px 0;
          background: var(--bg-primary);
          text-align: center;
          border-top: 1px solid var(--border);
        }
        .train-bottom-cta__title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: clamp(40px, 5vw, 62px);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 20px;
        }
        .train-bottom-cta__sub {
          font-size: 16.5px;
          color: var(--gray-400);
          line-height: 1.75;
          max-width: 540px;
          margin: 0 auto 40px;
        }

        @media (max-width: 1024px) {
          .cards-3, .membership-cards { grid-template-columns: 1fr 1fr; }
          .noah-layout { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .cards-3, .membership-cards { grid-template-columns: 1fr; }
          .train-section { padding: 72px 0; }
          .train-bottom-cta { padding: 72px 0; }
          .noah-img-wrap img { height: 240px; }
        }
      `}</style>

      {/* ─── 1. Hero ─── */}
      <section className="train-hero">
        <div className="train-hero__overlay" />
        <div className="container">
          <div className="train-hero__content">
            <span className="section-tag">Training Programs</span>
            <h1 className="train-hero__title">
              Basketball Training<br />
              <span>in Waco, TX</span>
            </h1>
            <p className="train-hero__sub">
              Individual sessions, group classes, shooting analysis, and monthly memberships —
              all designed to develop real game skills.
            </p>
            <a
              href="#training-programs"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('training-programs')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Schedule
            </a>
          </div>
        </div>
        <div className="train-hero__bottom-line" />
      </section>

      {/* ─── 2. NOAH Shooting Analysis ─── */}
      <section className="train-section" id="training-programs">
        <div className="container">
          <div className="noah-layout">
            <div>
              <span className="section-tag">Noah Shooting Analysis Lab</span>
              <h2 className="train-section__title">Data-Driven Shooting Analysis</h2>
              <p className="train-section__desc">
                Powered by the NOAH Shot Tracker — the same technology used by NBA and college programs.
              </p>
            </div>
            <div className="noah-img-wrap">
              <img src="/img/training-noah.png" alt="NOAH Shooting Analysis" />
            </div>
          </div>
          <div className="cards-3">
            {noahPlans.map((plan) => (
              <div key={plan.name} className={`price-card${plan.popular ? ' price-card--popular' : ''}`}>
                {plan.popular && <span className="popular-badge">Most Popular</span>}
                <div className="price-card__name">{plan.name}</div>
                <div className="price-card__price">
                  {plan.price}
                </div>
                <div className="price-card__divider" />
                <ul className="price-card__features">
                  {plan.features.map((f) => (
                    <li key={f} className="price-card__feature">
                      <span className="price-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/book-session" className="price-card__cta">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. 1-on-1 Pricing ─── */}
      <section className="train-section train-section--alt">
        <div className="container">
          <div className="train-section__header">
            <span className="section-tag">Private Sessions</span>
            <h2 className="train-section__title">1-on-1 Training Pricing</h2>
          </div>
          <div className="cards-3">
            {oneOnOnePlans.map((plan) => (
              <div key={plan.name} className="price-card">
                <div className="price-card__name">{plan.name}</div>
                <div className="price-card__sub">{plan.sub}</div>
                <div className="price-card__price">{plan.price}</div>
                {plan.save && <span className="price-card__save">{plan.save}</span>}
                <div className="price-card__divider" />
                <ul className="price-card__features">
                  {oneOnOneFeatures.map((f) => (
                    <li key={f} className="price-card__feature">
                      <span className="price-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/book-session" className="price-card__cta">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Group Class Pricing ─── */}
      <section className="train-section">
        <div className="container">
          <div className="train-section__header">
            <span className="section-tag">Group Training</span>
            <h2 className="train-section__title">Group Class Pricing</h2>
          </div>
          <div className="cards-3">
            {groupPlans.map((plan) => (
              <div key={plan.name} className="price-card">
                <div className="price-card__name">{plan.name}</div>
                <div className="price-card__price">
                  {plan.price}
                  <span className="price-card__price-unit">{plan.unit}</span>
                </div>
                <div className="price-card__divider" />
                <ul className="price-card__features">
                  {plan.features.map((f) => (
                    <li key={f} className="price-card__feature">
                      <span className="price-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/book-session" className="price-card__cta">
                  {plan.price === 'Contact' ? 'Get a Quote' : 'Book Now'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Monthly Membership ─── */}
      <section className="train-section train-section--dark">
        <div className="container">
          <div className="train-section__header train-section__header--center">
            <span className="section-tag">Membership</span>
            <h2 className="train-section__title" style={{ textAlign: 'center' }}>
              Train Year-Round with a Monthly Membership
            </h2>
            <p className="section-desc" style={{ margin: '16px auto 0', textAlign: 'center' }}>
              Commit to your development with a recurring membership and unlock priority scheduling,
              unlimited access, and more.
            </p>
          </div>
          <div className="membership-cards membership-wrap">
            {memberships.map((m) => (
              <div key={m.name} className={`price-card${m.popular ? ' price-card--popular' : ''}`}>
                {m.popular && <span className="popular-badge">Most Popular</span>}
                <div className="price-card__name">{m.name}</div>
                <div className="price-card__price">
                  {m.price}
                  <span className="price-card__price-unit">{m.unit}</span>
                </div>
                <div className="price-card__divider" />
                <ul className="price-card__features">
                  {m.features.map((f) => (
                    <li key={f} className="price-card__feature">
                      <span className="price-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/book-session" className="price-card__cta">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Multi-Session Bundle ─── */}
      <section className="train-section train-section--alt">
        <div className="container">
          <div className="train-section__header train-section__header--center">
            <span className="section-tag">Bundles</span>
            <h2 className="train-section__title" style={{ textAlign: 'center' }}>
              Save with a Multi-Session Bundle
            </h2>
          </div>
          <div className="cards-3">
            {bundles.map((b) => (
              <div key={b.name} className={`price-card${b.badge === 'Best Value' ? ' price-card--popular' : ''}`}>
                {b.badge && <span className="popular-badge">{b.badge}</span>}
                <div className="price-card__name">{b.name}</div>
                <div className="price-card__price">{b.price}</div>
                <span className="price-card__save">{b.save}</span>
                <div className="price-card__divider" />
                <ul className="price-card__features">
                  {b.features.map((f) => (
                    <li key={f} className="price-card__feature">
                      <span className="price-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/book-session" className="price-card__cta">Buy Bundle</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. Bottom CTA ─── */}
      <section className="train-bottom-cta">
        <div className="container">
          <h2 className="train-bottom-cta__title">Get on the Schedule</h2>
          <p className="train-bottom-cta__sub">
            Ready to start training? Book your first session with Coach Gude today.
          </p>
          <Link to="/book-session" className="btn-primary">Book a Session</Link>
        </div>
      </section>
    </>
  )
}
