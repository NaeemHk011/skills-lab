import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home',              to: '/' },
  { label: 'About',             to: '/about' },
  { label: 'Training Programs', to: '/training' },
  { label: 'Camps',             to: '/camps' },
  { label: 'Contact',           to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav className="navbar">
      <div className="container navbar__inner">

        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/logo-white.png" alt="Gude Skillz Lab" className="navbar__logo-img" />
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className={`navbar__link${pathname === l.to ? ' active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/book-session" className="btn-primary navbar__cta">
          Book a Session
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {navLinks.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className={`navbar__mobile-link${pathname === l.to ? ' active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
        <Link to="/book-session" className="btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>
          Book a Session
        </Link>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 10px 0;
          background: #000000;
          border-bottom: 1px solid #27AAE2;
          box-shadow: 0 1px 24px rgba(39,170,226,0.3), 0 0 50px rgba(39,170,226,0.08);
        }
        .navbar::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #27AAE2 40%, #8dd7f5 50%, #27AAE2 60%, transparent 100%);
          animation: navShine 2.8s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(39,170,226,0.8), 0 0 20px rgba(39,170,226,0.4);
        }
        @keyframes navShine {
          0%   { left: -200px; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
        }
        .navbar__logo-img {
          height: 58px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: opacity 0.2s;
        }
        .navbar__logo-img:hover { opacity: 0.85; }

        .navbar__links {
          display: flex;
          list-style: none;
          gap: 2px;
          flex: 1;
          justify-content: center;
        }
        .navbar__link {
          display: block;
          padding: 7px 13px;
          font-size: 13px;
          font-weight: 500;
          color: var(--gray-400);
          border-radius: 6px;
          transition: var(--transition);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          white-space: nowrap;
        }
        .navbar__link:hover { color: #fff; background: rgba(39,170,226,0.1); }
        .navbar__link.active { color: #27AAE2; }

        .navbar__cta {
          font-size: 13px;
          padding: 10px 20px;
          white-space: nowrap;
          text-decoration: none;
        }

        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          margin-left: auto;
        }
        .navbar__hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: var(--transition);
        }
        .navbar__hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .navbar__hamburger.open span:nth-child(2) { opacity: 0; }
        .navbar__hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .navbar__mobile {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 16px 24px 20px;
          background: #000;
          border-top: 1px solid rgba(39,170,226,0.2);
        }
        .navbar__mobile.open { display: flex; }
        .navbar__mobile-link {
          font-size: 15px;
          font-weight: 500;
          color: var(--gray-400);
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: var(--transition);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-decoration: none;
        }
        .navbar__mobile-link:hover,
        .navbar__mobile-link.active { color: #27AAE2; }

        @media (max-width: 900px) {
          .navbar__links { display: none; }
          .navbar__cta   { display: none; }
          .navbar__hamburger { display: flex; }
        }
      `}</style>
    </nav>
  )
}
