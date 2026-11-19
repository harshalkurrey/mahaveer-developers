import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES_DATA } from '../data/servicesData';
import { PROJECTS_DATA } from '../data/projectsData';
import { REVIEWS_DATA, QUALITY_PILLARS } from '../data/reviewsData';
import { ASSETS, getImageByKey } from '../assets/images';
import SectionHeading from '../components/common/SectionHeading';
import ProjectModal from '../components/common/ProjectModal';
import './Home.css';

export default function Home({ onOpenEnquire }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const featuredProjects = PROJECTS_DATA.slice(0, 3); // 2BHK, 3BHK, 4BHK Row Houses

  const handleOpenProjectDetails = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
  };

  const handleEnquireFromProject = (projectTitle) => {
    if (onOpenEnquire) {
      onOpenEnquire(projectTitle);
    }
  };

  return (
    <div className="home-page">
      {/* ==========================================================================
          1. Hero Section
          ========================================================================== */}
      <section className="hero-section" aria-label="Hero Introduction">
        <div className="hero-background-wrapper">
          <img src={ASSETS.hero} alt="Modern Luxury Row House Architecture" className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              Engineering Excellence &bull; Bhilai, Chhattisgarh
            </span>

            <h1 className="hero-title">
              Precision Engineering. <br />
              <span className="text-gold">Enduring Homes</span> in Bhilai.
            </h1>

            <p className="hero-subtitle">
              Premier turnkey residential row houses, reinforced concrete engineering, and planned land development. Built with certified materials, itemized BOQ transparency, and structural rigor in Kohka.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="btn-hero-primary">
                <span>Explore Row House Projects</span>
                <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <button
                type="button"
                className="btn-hero-secondary"
                onClick={() => onOpenEnquire && onOpenEnquire('General Consultation')}
              >
                <span>Request Site Consultation</span>
              </button>
            </div>

            {/* Quick Verified Highlights */}
            <div className="hero-stats-bar">
              <div className="hero-stat-item">
                <span className="stat-label">Core Specialization</span>
                <span className="stat-value">2, 3 &amp; 4 BHK Row Houses</span>
              </div>
              <div className="stat-divider" aria-hidden="true"></div>
              <div className="hero-stat-item">
                <span className="stat-label">Engineering Benchmark</span>
                <span className="stat-value">IS 456 Concrete Standards</span>
              </div>
              <div className="stat-divider" aria-hidden="true"></div>
              <div className="hero-stat-item">
                <span className="stat-label">Registered Office</span>
                <span className="stat-value">Kurud Rd, Kohka, Bhilai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          2. Company Introduction Teaser
          ========================================================================== */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-visual-wrapper">
              <div className="intro-image-card">
                <img src={ASSETS.serviceHouse} alt="House Construction in Progress Bhilai" className="intro-img" />
                <div className="intro-experience-badge">
                  <span className="badge-highlight">Bhilai-Durg</span>
                  <span className="badge-caption">Civil Engineering Focus</span>
                </div>
              </div>
            </div>

            <div className="intro-content">
              <span className="section-badge">Building With Integrity</span>
              <h2 className="intro-title">
                Structural Strength Meets Contemporary Living.
              </h2>
              <p className="intro-text">
                At <strong>Mahaveer Developers &amp; Construction</strong>, we believe constructing a home is not just an assembly of materials—it is a lifelong commitment to the families who reside within them.
              </p>
              <p className="intro-text">
                Headquartered in Kohka, Bhilai, our team blends civil engineering rigor with transparent commercial ethics. Whether executing high-ductility RCC framing, developing planned row housing colonies, or advising clients on foundation soil dynamics, our hallmark is zero compromise on structural safety.
              </p>

              <div className="intro-feature-checks">
                <div className="feature-check">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>100% Itemized Bill of Quantities (BOQ) with verified material grades</span>
                </div>
                <div className="feature-check">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Strict adherence to IS 456 concrete and IS 1893 seismic safety codes</span>
                </div>
                <div className="feature-check">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Regional soil strata expertise addressing black-cotton soil settlement</span>
                </div>
              </div>

              <div className="intro-actions">
                <Link to="/about" className="btn-secondary-outline">
                  <span>Learn Our Corporate Story</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          3. Core Services Overview
          ========================================================================== */}
      <section className="section services-preview-section">
        <div className="container">
          <SectionHeading
            badge="Engineering Capabilities"
            title="Our Four Core Pillars"
            subtitle="From structural design consulting to turnkey residential construction and infrastructure development."
            align="center"
          />

          <div className="services-grid">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-img-wrapper">
                  <img src={getImageByKey(service.imageKey)} alt={service.title} className="service-card-img" />
                  <span className="service-card-tag">{service.tag}</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-subtitle">{service.subtitle}</p>
                  <p className="service-card-desc">{service.shortDesc}</p>
                  <ul className="service-mini-deliverables">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx}>&bull; {item}</li>
                    ))}
                  </ul>
                  <div className="service-card-actions">
                    <Link to="/services" className="service-link">
                      <span>View Specifications</span>
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="services-cta-row">
            <Link to="/services" className="btn-secondary-outline">
              <span>View All Detailed Services &amp; FAQs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          4. Featured Projects (Row House Spotlight)
          ========================================================================== */}
      <section className="section featured-projects-section">
        <div className="container">
          <SectionHeading
            badge="Featured Developments"
            title="Modern Row House Configurations"
            subtitle="Explore our thoughtfully engineered 2BHK, 3BHK, and 4BHK row house models designed for the Kurud Road and Kohka residential corridors."
            align="center"
          />

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card-image-box">
                  <img
                    src={getImageByKey(project.imageKey)}
                    alt={`${project.title} Architectural Facade`}
                    className="project-card-image"
                  />
                  <div className="project-card-badge-row">
                    <span className="project-card-type">{project.bhkType}</span>
                    <span className="project-card-illustrative">[Illustrative Concept]</span>
                  </div>
                </div>

                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{project.location}</span>
                  </p>
                  <p className="project-card-desc">{project.shortDescription}</p>

                  <div className="project-card-specs-row">
                    <div className="spec-item">
                      <span className="spec-title">Carpet Area</span>
                      <span className="spec-val">{project.carpetArea}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-title">Parking</span>
                      <span className="spec-val">{project.parking}</span>
                    </div>
                  </div>

                  <div className="project-card-actions">
                    <button
                      type="button"
                      className="btn-view-details"
                      onClick={() => handleOpenProjectDetails(project)}
                    >
                      <span>View Details &amp; Specs</span>
                    </button>
                    <button
                      type="button"
                      className="btn-quick-enquire"
                      onClick={() => onOpenEnquire && onOpenEnquire(project.title)}
                    >
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta-row">
            <Link to="/projects" className="btn-hero-primary">
              <span>View Full Projects &amp; Land Development Portfolio</span>
              <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          5. Why Choose Us (Engineering Pillars)
          ========================================================================== */}
      <section className="section why-choose-section">
        <div className="container">
          <SectionHeading
            badge="The Mahaveer Standard"
            title="Why Property Buyers Choose Us"
            subtitle="Transparent contracts, civil engineering oversight, and verified construction methodologies."
            align="center"
          />

          <div className="why-grid">
            {COMPANY_INFO.whyChooseUs.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-number">0{index + 1}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          6. Construction Process
          ========================================================================== */}
      <section className="section process-section">
        <div className="container">
          <SectionHeading
            badge="Phase-Wise Workflow"
            title="Our 4-Step Engineering Journey"
            subtitle="From initial soil feasibility tests to the day you receive your house keys."
            align="center"
          />

          <div className="process-timeline-grid">
            {COMPANY_INFO.constructionProcess.map((step) => (
              <div key={step.step} className="process-card">
                <div className="process-step-badge">{step.step}</div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          7. Customer Reviews & Quality Assurance
          ========================================================================== */}
      <section className="section reviews-preview-section">
        <div className="container">
          <SectionHeading
            badge="Quality &amp; Client Feedback"
            title="Commitment to Structural Integrity"
            subtitle="Our clients value transparency, tested raw materials, and on-schedule structural handovers."
            align="center"
          />

          <div className="reviews-grid">
            {REVIEWS_DATA.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-card-header">
                  <div className="review-author-info">
                    <h4 className="review-author">{review.author}</h4>
                    <span className="review-loc">{review.location}</span>
                  </div>
                  <span className="review-tag">{review.category}</span>
                </div>
                <p className="review-text">&ldquo;{review.comment}&rdquo;</p>
                <div className="review-card-footer">
                  <span className="review-verified-badge">
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>{review.verificationStatus}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-cta-row">
            <Link to="/reviews" className="btn-secondary-outline">
              <span>View Reviews &amp; Quality Metrics</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          8. Direct Action Consultation Banner
          ========================================================================== */}
      <section className="section consultation-banner-section">
        <div className="container">
          <div className="consultation-banner-card">
            <div className="banner-content">
              <span className="banner-badge">Ready to Build in Bhilai?</span>
              <h2 className="banner-title">
                Schedule a Personal Consultation at Our Kohka Office.
              </h2>
              <p className="banner-desc">
                Bring your plot details or explore our upcoming row house developments. Our engineers provide upfront feasibility assessments and transparent BOQ estimates.
              </p>
              <div className="banner-actions">
                <button
                  type="button"
                  className="btn-hero-primary"
                  onClick={() => onOpenEnquire && onOpenEnquire('Site Consultation')}
                >
                  <span>Request Project Estimate</span>
                  <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </button>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="btn-call-direct">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectModal}
        onEnquireProject={handleEnquireFromProject}
      />
    </div>
  );
}
