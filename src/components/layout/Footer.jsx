import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/companyInfo';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: Brand & Profile */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <div className="footer-monogram" aria-hidden="true">
                <span>M</span>
              </div>
              <div className="brand-text">
                <span className="footer-brand-title">MAHAVEER</span>
                <span className="footer-brand-subtitle">DEVELOPERS &amp; CONSTRUCTION</span>
              </div>
            </div>
            <p className="footer-description">
              {COMPANY_INFO.description}
            </p>

            {/* Social Media Placeholders */}
            <div className="footer-social">
              <span className="footer-social-label">Connect with Us:</span>
              <div className="footer-social-links" role="list">
                {COMPANY_INFO.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="footer-social-icon"
                    aria-label={social.ariaLabel}
                    title={social.ariaLabel}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {social.name === 'Facebook' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    )}
                    {social.name === 'Instagram' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {social.name === 'LinkedIn' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {social.name === 'WhatsApp' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.531 1.79.813 2.796.813 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.77zm3.366 8.163c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.115-.515-1.745-.722-2.885-2.483-2.973-2.6-.088-.116-.708-.941-.708-1.796 0-.855.449-1.277.608-1.45.16-.174.348-.217.464-.217.116 0 .232.001.333.006.107.005.25.04.391.38.144.348.493 1.202.536 1.29.043.087.073.188.014.304-.058.116-.087.188-.174.289l-.261.304c-.087.087-.179.183-.077.358.101.174.45 1.218 1.579 1.717.388.172.695.228.938.151.272-.086.608-.709.695-.955.087-.247.174-.29.29-.247.116.043 1.347.636 1.579.752.232.116.388.174.444.271.056.097.056.562-.088.967z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-list" role="list">
              {COMPANY_INFO.navLinks.map((link) => (
                <li key={link.label} className="footer-list-item">
                  <Link to={link.path} className="footer-link">
                    <svg className="footer-link-bullet" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M6.22 4.22a.75.75 0 011.06 0l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 010-1.06z" />
                    </svg>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="footer-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-list" role="list">
              {COMPANY_INFO.services.map((service) => (
                <li key={service.title} className="footer-list-item">
                  <Link to={service.path} className="footer-link">
                    <svg className="footer-link-bullet" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M6.22 4.22a.75.75 0 011.06 0l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 010-1.06z" />
                    </svg>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              {/* Row House Configurations */}
              {COMPANY_INFO.projectTypes.map((project) => (
                <li key={project.title} className="footer-list-item">
                  <Link to={project.path} className="footer-link">
                    <svg className="footer-link-bullet" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M6.22 4.22a.75.75 0 011.06 0l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 010-1.06z" />
                    </svg>
                    <span>{project.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact Information */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-title">Office &amp; Contact</h4>
            <div className="footer-contact-items">
              {/* Address */}
              <div className="footer-contact-item">
                <div className="footer-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="footer-contact-details">
                  <span className="contact-label">Office Address</span>
                  <address className="contact-value">
                    {COMPANY_INFO.address.shop}, {COMPANY_INFO.address.street},<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="footer-contact-item">
                <div className="footer-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="footer-contact-details">
                  <span className="contact-label">Direct Phone</span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="contact-value contact-link">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="footer-contact-item">
                <div className="footer-contact-icon icon-whatsapp" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.531 1.79.813 2.796.813 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.77zm3.366 8.163c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.115-.515-1.745-.722-2.885-2.483-2.973-2.6-.088-.116-.708-.941-.708-1.796 0-.855.449-1.277.608-1.45.16-.174.348-.217.464-.217.116 0 .232.001.333.006.107.005.25.04.391.38.144.348.493 1.202.536 1.29.043.087.073.188.014.304-.058.116-.087.188-.174.289l-.261.304c-.087.087-.179.183-.077.358.101.174.45 1.218 1.579 1.717.388.172.695.228.938.151.272-.086.608-.709.695-.955.087-.247.174-.29.29-.247.116.043 1.347.636 1.579.752.232.116.388.174.444.271.056.097.056.562-.088.967z" />
                  </svg>
                </div>
                <div className="footer-contact-details">
                  <span className="contact-label">Instant Chat</span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value contact-link text-whatsapp"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="copyright-text">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <div className="footer-meta-notes">
            <span className="meta-badge">Bhilai, Chhattisgarh</span>
            <span className="meta-divider" aria-hidden="true">&bull;</span>
            <span className="meta-sub">Frontend Demonstration Prototype</span>
          </div>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
