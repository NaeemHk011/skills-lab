import { useState, useEffect, useCallback } from 'react'

const photos = [
  '/img/Gallary-1.jpg',
  '/img/Gallary-2.jpg',
  '/img/Gallary-3.jpg',
  '/img/Gallary-4.jpg',
  '/img/Gallary-5.jpg',
  '/img/Gallary-6.jpg',
  '/img/Gallary-7.jpg',
  '/img/Gallary-8.jpg',
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null) // index or null

  const prev = useCallback(() => {
    setLightbox((i) => (i === 0 ? photos.length - 1 : i - 1))
  }, [])

  const next = useCallback(() => {
    setLightbox((i) => (i === photos.length - 1 ? 0 : i + 1))
  }, [])

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prev, next, close])

  // lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section className="ig-section">

      {/* Header */}
      <div className="ig-header">
        <div className="ig-header-line" />
        <span className="ig-follow-label">FOLLOW THE JOURNEY</span>
        <div className="ig-header-line" />
      </div>

      <a
        href="https://www.instagram.com/gudeskillzlab"
        target="_blank"
        rel="noopener noreferrer"
        className="ig-handle"
      >
        @gudeskillzlab
      </a>

      {/* Horizontal scroll strip */}
      <div className="ig-strip-wrap">
        <div className="ig-strip">
          {photos.map((src, i) => (
            <div
              key={i}
              className="ig-card"
              onClick={() => setLightbox(i)}
            >
              <img src={src} alt={`Gude Skillz Lab ${i + 1}`} className="ig-card-img" />
              <div className="ig-card-overlay">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Follow button */}
      <div className="ig-cta">
        <a
          href="https://www.instagram.com/gudeskillzlab"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          Follow on Instagram
        </a>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="lb-backdrop" onClick={close}>
          <div className="lb-box" onClick={(e) => e.stopPropagation()}>

            {/* Close */}
            <button className="lb-close" onClick={close} aria-label="Close">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Prev */}
            <button className="lb-arrow lb-arrow--prev" onClick={prev} aria-label="Previous">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            {/* Image */}
            <img
              key={lightbox}
              src={photos[lightbox]}
              alt={`Gude Skillz Lab ${lightbox + 1}`}
              className="lb-img"
            />

            {/* Next */}
            <button className="lb-arrow lb-arrow--next" onClick={next} aria-label="Next">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>

            {/* Counter + dots */}
            <div className="lb-footer">
              <div className="lb-dots">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    className={`lb-dot${i === lightbox ? ' lb-dot--active' : ''}`}
                    onClick={() => setLightbox(i)}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
              <span className="lb-counter">{lightbox + 1} / {photos.length}</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .ig-section {
          padding: 80px 0;
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
          overflow: hidden;
        }

        /* Header */
        .ig-header {
          display: flex;
          align-items: center;
          gap: 20px;
          justify-content: center;
          margin-bottom: 14px;
          padding: 0 24px;
        }
        .ig-header-line {
          flex: 1;
          max-width: 120px;
          height: 1px;
          background: var(--border);
        }
        .ig-follow-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: var(--gray-500);
          white-space: nowrap;
        }
        .ig-handle {
          display: block;
          text-align: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 46px);
          letter-spacing: 0.06em;
          color: #fff;
          text-decoration: none;
          margin-bottom: 48px;
          transition: color 0.2s;
        }
        .ig-handle:hover { color: var(--blue-400); }

        /* Strip */
        .ig-strip-wrap {
          overflow-x: auto;
          padding: 0 40px 16px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .ig-strip-wrap::-webkit-scrollbar { display: none; }
        .ig-strip {
          display: flex;
          gap: 14px;
          width: max-content;
          padding-bottom: 4px;
        }

        /* Cards */
        .ig-card {
          position: relative;
          width: 220px;
          height: 340px;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .ig-card:hover {
          transform: translateY(-8px) scale(1.04);
          box-shadow: 0 24px 56px rgba(0,0,0,0.7), 0 0 0 1px rgba(39,170,226,0.35);
        }
        .ig-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .ig-card:hover .ig-card-img {
          transform: scale(1.08);
        }
        .ig-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(6,9,15,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ig-card:hover .ig-card-overlay { opacity: 1; }

        /* CTA */
        .ig-cta {
          display: flex;
          justify-content: center;
          margin-top: 44px;
        }
        .ig-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 1.5px solid var(--border-hover);
          color: var(--gray-300);
          padding: 13px 28px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: var(--transition);
        }
        .ig-btn:hover {
          border-color: #E1306C;
          color: #E1306C;
          background: rgba(225,48,108,0.06);
          transform: translateY(-2px);
        }

        /* ── Lightbox ── */
        .lb-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lbFadeIn 0.2s ease;
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lb-box {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          max-width: 1000px;
          padding: 60px 80px;
        }
        .lb-img {
          max-width: 100%;
          max-height: 82vh;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.8);
          animation: lbSlideIn 0.22s cubic-bezier(0.4,0,0.2,1);
          display: block;
        }
        @keyframes lbSlideIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* Close */
        .lb-close {
          position: absolute;
          top: 16px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          z-index: 2;
        }
        .lb-close:hover { background: rgba(255,255,255,0.18); }

        /* Arrows */
        .lb-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          z-index: 2;
        }
        .lb-arrow:hover {
          background: rgba(39,170,226,0.25);
          border-color: rgba(39,170,226,0.5);
        }
        .lb-arrow--prev { left: 16px; }
        .lb-arrow--next { right: 16px; }

        /* Footer */
        .lb-footer {
          position: absolute;
          bottom: 20px;
          left: 0; right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .lb-dots {
          display: flex;
          gap: 8px;
        }
        .lb-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          padding: 0;
        }
        .lb-dot--active {
          background: var(--blue-400);
          transform: scale(1.4);
        }
        .lb-dot:hover:not(.lb-dot--active) { background: rgba(255,255,255,0.5); }
        .lb-counter {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.06em;
          font-weight: 500;
        }

        @media (max-width: 640px) {
          .ig-section { padding: 60px 0; }
          .ig-strip-wrap { padding: 0 16px 16px; }
          .ig-card { width: 180px; height: 280px; }
          .lb-box { padding: 56px 16px 80px; }
          .lb-arrow--prev { left: 8px; }
          .lb-arrow--next { right: 8px; }
          .lb-arrow { width: 40px; height: 40px; }
        }
      `}</style>
    </section>
  )
}
