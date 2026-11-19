import { useState } from 'react';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../data/projectsData';
import { getImageByKey } from '../assets/images';
import ProjectModal from '../components/common/ProjectModal';
import './Projects.css';

export default function Projects({ onOpenEnquire }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEnquire = (projectTitle) => {
    if (onOpenEnquire) {
      onOpenEnquire(projectTitle);
    }
  };

  return (
    <div className="projects-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="page-header-badge">Portfolio &amp; Configurations</span>
          <h1 className="page-header-title">Our Project Showcase</h1>
          <p className="page-header-lead">
            Explore our row housing models, custom turnkey residential plans, and land development layouts in the Bhilai-Durg corridor.
          </p>
          <div className="illustrative-notice-banner">
            <span>
              <strong>Note:</strong> Featured projects represent planned architectural typologies and illustrative concepts demonstrating our construction standards.
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="section gallery-section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="category-filter-bar" role="tablist" aria-label="Project Categories">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`filter-tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="gallery-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="gallery-card">
                <div className="gallery-img-box">
                  <img
                    src={getImageByKey(project.imageKey)}
                    alt={`${project.title} Architectural Elevation`}
                    className="gallery-card-img"
                  />
                  <div className="gallery-card-badges">
                    <span className="bhk-badge">{project.bhkType}</span>
                    <span className="illustrative-pill">[Concept Model]</span>
                  </div>
                </div>

                <div className="gallery-card-body">
                  <div className="gallery-cat-row">
                    <span className="gallery-category">{project.category}</span>
                  </div>

                  <h3 className="gallery-title">{project.title}</h3>
                  <p className="gallery-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{project.location}</span>
                  </p>

                  <p className="gallery-desc">{project.shortDescription}</p>

                  {/* Quick Meta */}
                  <div className="gallery-specs">
                    <div className="spec-col">
                      <span className="s-label">Carpet Area</span>
                      <span className="s-val">{project.carpetArea}</span>
                    </div>
                    <div className="spec-col">
                      <span className="s-label">Parking</span>
                      <span className="s-val">{project.parking}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="gallery-actions">
                    <button
                      type="button"
                      className="btn-inspect"
                      onClick={() => handleOpenDetails(project)}
                    >
                      <span>View Details &amp; Specs</span>
                    </button>
                    <button
                      type="button"
                      className="btn-enquire-pill"
                      onClick={() => handleEnquire(project.title)}
                    >
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Land Development Inquiry Teaser */}
          <div className="land-dev-teaser-card">
            <div className="teaser-content">
              <span className="teaser-badge">Land Development &amp; Plotted Layouts</span>
              <h3 className="teaser-title">Have Land in Bhilai or Durg for Development?</h3>
              <p className="teaser-desc">
                We partner with landowners to plan, demarcate, and construct infrastructure for residential plotted layouts. Full civil engineering, municipal sanction assistance, and internal road execution.
              </p>
            </div>
            <div className="teaser-action">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={() => onOpenEnquire && onOpenEnquire('Land Development Consultation')}
              >
                <span>Consult on Land Development</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal Lightbox */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onEnquireProject={handleEnquire}
      />
    </div>
  );
}
