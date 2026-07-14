import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 15, suffix: '+', label: 'Years Coaching',               desc: 'A decade-plus of player development' },
  { value: 20, suffix: '+', label: 'Collegiate Athletes Developed', desc: 'Players elevated to the next level' },
  { value: 100, suffix: '+', label: 'Athletes Trained',            desc: 'Built into every session' },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target])

  return <>{count}{suffix}</>
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-bg-line" />
      <div className="container">
        <div className="stats-top">
          <h2 className="stats-heading">Waco's Basketball Skills Lab</h2>
          <p className="stats-sub">A decade-plus of basketball player development — built into every session.</p>
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number">
                <CountUp target={s.value} suffix={s.suffix} active={active} />
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          position: relative;
          padding: 80px 0;
          background: linear-gradient(135deg, #0a1628 0%, #060c18 50%, #0d1f35 100%);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }
        .stats-bg-line {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(39,170,226,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(39,170,226,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .stats-top {
          text-align: center;
          margin-bottom: 56px;
        }
        .stats-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #fff;
          margin-bottom: 12px;
        }
        .stats-sub {
          font-size: 16px;
          color: var(--gray-400);
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto;
        }
        .stats-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          max-width: 860px;
          margin: 0 auto;
        }
        .stat-item {
          text-align: center;
          padding: 32px 24px;
          border-right: 1px solid var(--border);
          position: relative;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: var(--blue-600);
          border-radius: 1px;
          opacity: 0;
          transition: var(--transition);
        }
        .stat-item:hover::after { opacity: 1; }
        .stat-number {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 700;
          color: #fff;
          line-height: 1;
          background: linear-gradient(135deg, #fff 0%, var(--blue-300) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }
        .stat-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #fff;
          margin-bottom: 6px;
        }
        .stat-desc {
          font-size: 13px;
          color: var(--gray-500);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr; max-width: 400px; }
          .stat-item { border-right: none; border-top: 1px solid var(--border); }
          .stat-item:first-child { border-top: none; }
        }
      `}</style>
    </section>
  )
}
