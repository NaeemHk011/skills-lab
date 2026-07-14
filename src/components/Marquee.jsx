const items = [
  'GUDE SKILLZ LAB',
  'WACO, TX',
  'ELITE BASKETBALL TRAINING',
  'NOAH SHOOTING LAB',
  'SKILL · CONFIDENCE · GAME',
  '15+ YEARS COACHING',
  'GUDE SKILLZ LAB',
  'WACO, TX',
  'ELITE BASKETBALL TRAINING',
  'NOAH SHOOTING LAB',
  'SKILL · CONFIDENCE · GAME',
  '15+ YEARS COACHING',
]

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        .marquee-wrap {
          background: var(--blue-600);
          overflow: hidden;
          padding: 14px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(0,0,0,0.2);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-item {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 15px;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.92);
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 18px;
          padding-right: 18px;
        }
        .marquee-dot {
          font-size: 9px;
          opacity: 0.6;
        }
      `}</style>
    </div>
  )
}
