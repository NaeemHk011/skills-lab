import { useEffect, useRef } from 'react'

const stats = [
  { value: '15+',  label: 'Years Coaching' },
  { value: '20+',  label: 'Collegiate Athletes' },
  { value: '100+', label: 'Athletes Trained' },
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animFrame

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.1 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      alpha: Math.random() * 0.3 + 0.06,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(39,170,226,${p.alpha})`
        ctx.fill()
      })
      animFrame = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section">

      {/* Fixed background   image 2 */}
      <div className="hero-bg-img" />

      {/* Overlay: very dark left → transparent right */}
      <div className="hero-overlay" />

      {/* Subtle grid */}
      <div className="hero-grid" />

      {/* Particles */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Content   hard left */}
      <div className="hero-content">
        <div className="hero-left">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Elite Basketball Training · Waco, TX
          </div>

          <h1 className="hero-title">
            BUILD SKILL.<br />
            BUILD <span className="hero-title-blue">CONFIDENCE.</span><br />
            DOMINATE THE GAME.
          </h1>

          <p className="hero-desc">
            Gude Skillz Lab helps basketball athletes develop the skill,
            mindset, and game-ready habits needed to perform at their best.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn-primary hero-btn-main"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
            >
              Book a Session
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#programs"
              className="btn-secondary hero-btn-sec"
              onClick={(e) => { e.preventDefault(); handleScroll('#programs') }}
            >
              View Programs
            </a>
          </div>

          {/* Stats strip */}
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: #06090F;
        }

        /* Image 2   glowing player silhouette */
        .hero-bg-img {
          position: absolute;
          inset: 0;
          background-image: url('/hero2.jpg');
          background-size: cover;
          background-position: 65% center;
          background-repeat: no-repeat;
          z-index: 0;
        }

        /* Heavy dark on left, clear on right */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            95deg,
            rgba(6,9,15,0.97) 0%,
            rgba(6,9,15,0.92) 30%,
            rgba(6,9,15,0.65) 52%,
            rgba(6,9,15,0.15) 75%,
            rgba(6,9,15,0.05) 100%
          );
          z-index: 1;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(39,170,226,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(39,170,226,0.03) 1px, transparent 1px);
          background-size: 55px 55px;
          pointer-events: none;
          z-index: 2;
        }

        .hero-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        /* Content: left-pinned, lower (align-items: flex-end on section) */
        .hero-content {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          padding-bottom: 90px;
          padding-top: 80px;
        }

        /* Narrow left column   pushes text to far left */
        .hero-left {
          width: 420px;
          max-width: 46vw;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid rgba(39,170,226,0.22);
          background: rgba(6,9,15,0.5);
          backdrop-filter: blur(8px);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.09em;
          color: var(--blue-300);
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 7px #22c55e;
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.3); }
        }

        /* THIN FONT   Barlow Condensed light weight */
        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 4.2vw, 54px);
          font-weight: 300;
          line-height: 1.08;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #fff;
          margin-bottom: 16px;
          text-shadow: 0 2px 20px rgba(0,0,0,0.7);
        }
        .hero-title-blue {
          color: var(--blue-400);
          font-weight: 300;
        }

        .hero-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(203, 213, 225, 0.85);
          line-height: 1.75;
          max-width: 380px;
          margin-bottom: 28px;
          text-shadow: 0 1px 8px rgba(0,0,0,0.6);
          letter-spacing: 0.02em;
        }

        .hero-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .hero-btn-main  { font-size: 13px; padding: 11px 22px; }
        .hero-btn-sec   { font-size: 13px; padding: 11px 22px; }

        /* Stats bar */
        .hero-stats {
          display: flex;
          border: 1px solid rgba(39,170,226,0.18);
          border-radius: 8px;
          background: rgba(6,9,15,0.62);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          overflow: hidden;
          width: fit-content;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 14px 20px;
          border-right: 1px solid rgba(39,170,226,0.1);
          gap: 2px;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-value {
          font-family: 'Oswald', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 9.5px;
          font-weight: 400;
          color: var(--gray-500);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Scroll hint */
        .hero-scroll {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,0.2);
          font-size: 9.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          z-index: 5;
        }
        .hero-scroll-line {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, var(--blue-500), transparent);
          animation: scrollLine 1.8s ease-in-out infinite;
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top;    opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }

        @media (max-width: 900px) {
          .hero-left { width: 100%; max-width: 100%; }
          .hero-overlay {
            background: rgba(6,9,15,0.88);
          }
        }
        @media (max-width: 580px) {
          .hero-stats { flex-wrap: wrap; width: 100%; }
          .hero-stat  { flex: 1 1 calc(50% - 1px); }
          .hero-stat:nth-child(2) { border-right: none; }
          .hero-stat:nth-child(3) { border-top: 1px solid rgba(39,170,226,0.1); }
          .hero-stat:nth-child(4) { border-top: 1px solid rgba(39,170,226,0.1); border-right: none; }
          .hero-scroll { display: none; }
        }
      `}</style>
    </section>
  )
}
