const testimonials = [
  {
    name: 'Marcus J.',
    role: 'High School Guard · Waco, TX',
    rating: 5,
    text: "Coach Gude completely transformed my game. After 3 months of 1-on-1 sessions, my handles are sharper, my shot is more consistent, and I'm playing with way more confidence.",
    initials: 'MJ',
  },
  {
    name: 'Coach T. Williams',
    role: 'Middle School Head Coach',
    rating: 5,
    text: "I brought my whole team to Gude Skillz Lab for pre-season training. The improvement in just two weeks was undeniable. Coach Gude knows how to get results from every type of player.",
    initials: 'TW',
  },
  {
    name: 'Aaliyah R.',
    role: 'Club Team Player · Age 14',
    rating: 5,
    text: "The camp was the best basketball experience I've ever had. We worked on everything and Coach Gude made sure every player got individual attention. I came out a completely different player.",
    initials: 'AR',
  },
  {
    name: 'David S.',
    role: 'Parent of an Athlete',
    rating: 5,
    text: "My son has been training with Coach Gude for 6 months and the growth is incredible — not just in skill, but in discipline and work ethic too. Gude Skillz Lab is the real deal.",
    initials: 'DS',
  },
  {
    name: 'Jordan M.',
    role: 'College Prep Player · Waco, TX',
    rating: 5,
    text: "If you're serious about taking your game to the next level, Gude Skillz Lab is where you need to be. Coach Gude pushes you, believes in you, and has the knowledge to back it all up.",
    initials: 'JM',
  },
  {
    name: 'Coach Reyes',
    role: 'AAU Team Director',
    rating: 5,
    text: "We've partnered with Gude Skillz Lab for player development and the results speak for themselves. Professional, disciplined, and genuinely invested in every athlete's success.",
    initials: 'CR',
  },
]

const avatarColors = [
  'linear-gradient(135deg,#1a85b5,#27AAE2)',
  'linear-gradient(135deg,#0d6e9a,#4dbde8)',
  'linear-gradient(135deg,#27AAE2,#8dd7f5)',
  'linear-gradient(135deg,#1a85b5,#27AAE2)',
  'linear-gradient(135deg,#0d6e9a,#4dbde8)',
  'linear-gradient(135deg,#27AAE2,#8dd7f5)',
]

function StarRow({ count }) {
  return (
    <div className="t-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

function Card({ t, i }) {
  return (
    <div className="t-card">
      <div className="t-card-top">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(39,170,226,0.25)">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
        </svg>
        <StarRow count={t.rating} />
      </div>
      <p className="t-text">"{t.text}"</p>
      <div className="t-author">
        <div className="t-avatar" style={{ background: avatarColors[i % avatarColors.length] }}>
          {t.initials}
        </div>
        <div>
          <div className="t-name">{t.name}</div>
          <div className="t-role">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="t-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            WHAT ATHLETES &amp;<br /><span>COACHES ARE SAYING</span>
          </h2>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="t-track-wrap">
        <div className="t-track t-track--left">
          {doubled.map((t, i) => <Card key={i} t={t} i={i} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="t-track-wrap" style={{ marginTop: '20px' }}>
        <div className="t-track t-track--right">
          {[...doubled].reverse().map((t, i) => <Card key={i} t={t} i={i} />)}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 110px 0;
          background: var(--bg-secondary);
          overflow: hidden;
        }
        .t-header {
          text-align: center;
          margin-bottom: 64px;
        }

        /* Scrolling tracks */
        .t-track-wrap {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        .t-track {
          display: flex;
          gap: 20px;
          width: max-content;
        }
        .t-track--left {
          animation: scrollLeft 40s linear infinite;
        }
        .t-track--right {
          animation: scrollRight 40s linear infinite;
        }
        .t-track:hover { animation-play-state: paused; }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        /* Card */
        .t-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px 28px 24px;
          width: 360px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: border-color 0.3s, box-shadow 0.3s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .t-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(39,170,226,0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .t-card:hover {
          border-color: var(--border-hover);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }
        .t-card:hover::before { opacity: 1; }

        .t-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .t-stars {
          display: flex;
          gap: 3px;
        }
        .t-text {
          font-size: 14px;
          color: var(--gray-400);
          line-height: 1.72;
          flex: 1;
        }
        .t-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--border);
        }
        .t-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          letter-spacing: 0.05em;
        }
        .t-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
        }
        .t-role {
          font-size: 12px;
          color: var(--gray-500);
        }

        @media (max-width: 640px) {
          .testimonials-section { padding: 72px 0; }
          .t-card { width: 300px; padding: 22px; }
        }
      `}</style>
    </section>
  )
}
