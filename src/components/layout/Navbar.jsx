import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/companyInfo';
import './Navbar.css';

export default function Navbar({ onEnquireClick }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for sticky elevation shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  const handleEnquire = (e) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    if (onEnquireClick) {
      onEnquireClick();
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Utility Bar (Desktop / Tablet) */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <span className="topbar-item">
              <svg
                className="topbar-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}</span>
            </span>
          </div>
          <div className="topbar-right">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="topbar-item topbar-link">
              <svg
                className="topbar-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="topbar-divider" aria-hidden="true">|</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-item topbar-link topbar-whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar" aria-label="Main Navigation">
        <div className="container navbar-container">
          {/* Text-Based Architectural Brand Logo */}
          <Link
            to="/"
            className="navbar-brand"
            aria-label="Mahaveer Developers & Construction Homepage"
          >
            <div className="brand-monogram" aria-hidden="true">
              <span>M</span>
            </div>
            <div className="brand-text">
              <span className="brand-title">MAHAVEER</span>
              <span className="brand-subtitle">DEVELOPERS &amp; CONSTRUCTION</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="navbar-links" role="list">
            {COMPANY_INFO.navLinks.map((link) => (
              <li key={link.label} className="navbar-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Action Button & Hamburger Toggle */}
          <div className="navbar-actions">
            <button
              type="button"
              className="btn-enquire"
              onClick={handleEnquire}
            >
              <span>Enquire Now</span>
              <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`hamburger-btn ${isDrawerOpen ? 'is-open' : ''}`}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-label={isDrawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-nav-drawer"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`drawer-backdrop ${isDrawerOpen ? 'is-visible' : ''}`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${isDrawerOpen ? 'is-open' : ''}`}
        aria-hidden={!isDrawerOpen}
      >
        <div className="mobile-drawer-header">
          <div className="brand-text">
            <span className="brand-title">MAHAVEER</span>
            <span className="brand-subtitle">DEVELOPERS &amp; CONSTRUCTION</span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mobile-drawer-body">
          <ul className="mobile-links" role="list">
            {COMPANY_INFO.navLinks.map((link) => (
              <li key={link.label} className="mobile-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <span>{link.label}</span>
                  <svg className="mobile-link-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-cta">
            <button
              type="button"
              className="btn-enquire btn-enquire-full"
              onClick={handleEnquire}
            >
              <span>Enquire Now</span>
              <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="mobile-drawer-contact">
            <p className="mobile-contact-title">Office &amp; Enquiries</p>
            <p className="mobile-contact-text">{COMPANY_INFO.address.full}</p>
            <div className="mobile-contact-actions">
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="mobile-contact-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Now</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-contact-pill whatsapp-pill"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
