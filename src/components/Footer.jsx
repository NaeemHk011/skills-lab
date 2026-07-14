import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home',              to: '/' },
  { label: 'About',             to: '/about' },
  { label: 'Training Programs', to: '/training' },
  { label: 'Camps',             to: '/camps' },
  { label: 'Contact',           to: '/contact' },
  { label: 'Sign Up',           to: '/book-session' },
]

const programLinks = [
  { label: 'Individual Training', to: '/training' },
  { label: 'Team Training',       to: '/training' },
  { label: 'Basketball Camps',    to: '/camps' },
  { label: 'Noah Shooting Lab',   to: '/training' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-line" />

      <div className="container footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Link to="/">
              <img src="/logo-white.png" alt="Gude Skillz Lab" className="footer-logo-img" />
            </Link>
          </div>
          <p className="footer-tagline">
            Helping Waco, TX basketball athletes build skill, confidence, and game-ready habits — one rep at a time.
          </p>
          <div className="footer-socials">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} className="footer-social" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <div className="footer-col-title">Explore</div>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-col">
          <div className="footer-col-title">Programs</div>
          <ul className="footer-links">
            {programLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li>
              <a href="tel:+12544982285" className="footer-link footer-link-contact">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.052.696.272 1.37.647 1.963.192.31.45.573.76.77l-1.52 1.52a16 16 0 0 0 6 6l1.52-1.52c.197.31.46.568.77.76.593.375 1.267.595 1.963.647A2 2 0 0 1 22 16.92z"/>
                </svg>
                +1 254-498-2285
              </a>
            </li>
            <li>
              <a href="mailto:GudeSkillzLab@gmail.com" className="footer-link footer-link-contact">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                GudeSkillzLab@gmail.com
              </a>
            </li>
            <li>
              <span className="footer-link footer-link-contact">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Waco, TX
              </span>
            </li>
          </ul>
          <Link to="/book-session" className="btn-primary footer-cta-btn">
            Book a Session
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">© 2026 Gude Skillz Lab. All rights reserved.</span>
          <span className="footer-copy">Waco, TX · Powered by excellence.</span>
        </div>
      </div>

      <style>{`
        .footer {
          background: #030508;
          border-top: 1px solid var(--border);
          position: relative;
        }
        .footer-top-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #27AAE2, transparent);
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 60px;
          padding: 64px 24px;
        }
        .footer-logo { margin-bottom: 16px; }
        .footer-logo-img {
          height: 58px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: opacity 0.2s;
        }
        .footer-logo-img:hover { opacity: 0.8; }
        .footer-tagline {
          font-size: 14px;
          color: var(--gray-500);
          line-height: 1.7;
          max-width: 280px;
          margin-bottom: 24px;
        }
        .footer-socials { display: flex; gap: 10px; }
        .footer-social {
          width: 38px; height: 38px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          display: flex; align-items: center; justify-content: center;
          color: var(--gray-400);
          transition: var(--transition);
        }
        .footer-social:hover {
          border-color: #27AAE2;
          color: #4dbde8;
          background: rgba(39,170,226,0.07);
        }
        .footer-col-title {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-300);
          margin-bottom: 20px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-link {
          font-size: 14px;
          color: var(--gray-500);
          transition: var(--transition);
          display: block;
          text-decoration: none;
        }
        .footer-link:hover { color: #4dbde8; }
        .footer-link-contact {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: default;
        }
        a.footer-link-contact { cursor: pointer; }
        .footer-link-contact svg { color: #27AAE2; flex-shrink: 0; }
        .footer-cta-btn {
          margin-top: 20px;
          font-size: 13px;
          padding: 10px 18px;
          text-decoration: none;
          display: inline-flex;
        }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.05); }
        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-copy { font-size: 12.5px; color: var(--gray-600); }

        @media (max-width: 1024px) {
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 580px) {
          .footer-inner { grid-template-columns: 1fr; gap: 32px; padding: 40px 24px; }
          .footer-bottom-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
