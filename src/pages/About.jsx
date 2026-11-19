import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/companyInfo';
import { ABOUT_DATA } from '../data/aboutData';
import { ASSETS } from '../assets/images';
import SectionHeading from '../components/common/SectionHeading';
import './About.css';

export default function About({ onOpenEnquire }) {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="page-header-badge">Corporate Profile</span>
          <h1 className="page-header-title">About Mahaveer Developers &amp; Construction</h1>
          <p className="page-header-lead">
            Rooted in Bhilai, Chhattisgarh. Delivering enduring residential row houses, structural concrete works, and land development with uncompromised civil engineering discipline.
          </p>
        </div>
      </section>

      {/* Heritage & Narrative */}
      <section className="section about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <span className="section-badge">Our Heritage</span>
              <h2 className="story-title">{ABOUT_DATA.headline}</h2>
              <p className="story-paragraph">{ABOUT_DATA.leadParagraph}</p>
              <p className="story-paragraph">
                The industrial and residential landscape of Bhilai demands construction that can withstand challenging soil strata, seasonal monsoon rainfall, and expanding urban requirements. We approach each project not simply as developers, but as civil engineering practitioners who inspect bearing capacities, verify rebar tie spacing, and ensure calibrated 21-day hydration before handover.
              </p>
              <div className="office-location-callout">
                <div className="location-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="location-details">
                  <span className="loc-label">Registered Office Location</span>
                  <span className="loc-val">{COMPANY_INFO.address.full}</span>
                </div>
              </div>
            </div>

            <div className="about-story-visual">
              <div className="story-image-card">
                <img src={ASSETS.hero} alt="Completed Row House Architecture" className="story-img" />
                <div className="story-image-label">
                  <span>Engineered Residential Construction &bull; Bhilai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-desc">{ABOUT_DATA.vision}</p>
            </div>

            <div className="vm-card">
              <div className="vm-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-desc">{ABOUT_DATA.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <SectionHeading
            badge="Guiding Principles"
            title="Core Values We Build Upon"
            subtitle="The uncompromising standards guiding every site inspection, supplier contract, and architectural design."
            align="center"
          />

          <div className="values-grid">
            {ABOUT_DATA.coreValues.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-num">0{idx + 1}</div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards */}
      <section className="section standards-section">
        <div className="container">
          <SectionHeading
            badge="Engineering Standards"
            title="Certified Civil Compliance"
            subtitle="Adhering to Indian standard civil codes for all concrete and steel structural works."
            align="center"
          />

          <div className="standards-grid">
            {ABOUT_DATA.constructionStandards.map((std, idx) => (
              <div key={idx} className="standard-card">
                <span className="std-badge">BIS Aligned</span>
                <h4 className="std-title">{std.standard}</h4>
                <p className="std-detail">{std.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure Placeholders */}
      <section className="section team-section">
        <div className="container">
          <SectionHeading
            badge="Site Organization"
            title="Engineering &amp; Site Leadership"
            subtitle="Dedicated professional oversight on every project stage in the Durg-Bhilai region."
            align="center"
          />

          <div className="team-grid">
            {ABOUT_DATA.teamPlaceholders.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar-box">
                  <div className="team-avatar-placeholder" aria-hidden="true">
                    <span>MDC</span>
                  </div>
                </div>
                <h4 className="team-role">{member.role}</h4>
                <p className="team-note">{member.note}</p>
                <p className="team-desc">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Action CTA */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <h3 className="about-cta-title">Discuss Your Home Construction Plan</h3>
            <p className="about-cta-desc">
              Have a plot or looking for planned row houses in Kohka? Connect with our civil team today for a transparent estimate.
            </p>
            <div className="about-cta-actions">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={() => onOpenEnquire && onOpenEnquire('About Consultation')}
              >
                <span>Request Consultation</span>
              </button>
              <Link to="/contact" className="btn-secondary-outline">
                <span>View Contact Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
