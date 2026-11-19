import { useEffect } from 'react';
import { getImageByKey } from '../../assets/images';
import './ProjectModal.css';

export default function ProjectModal({ project, isOpen, onClose, onEnquireProject }) {
  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const projectImg = getImageByKey(project.imageKey);

  const handleEnquire = () => {
    onClose();
    if (onEnquireProject) {
      onEnquireProject(project.title);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="project-modal-header">
          <div className="project-modal-meta">
            <span className="project-tag">{project.category}</span>
            <span className="project-bhk-tag">{project.bhkType}</span>
            <span className="illustrative-badge">[Illustrative Concept]</span>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close project details">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="project-modal-body">
          {/* Main Visual */}
          <div className="project-modal-image-wrapper">
            <img src={projectImg} alt={`${project.title} Architectural Elevation`} className="project-modal-img" />
            <div className="project-image-caption">
              <span>Architectural Render &bull; Mahaveer Developers &amp; Construction</span>
            </div>
          </div>

          <div className="project-modal-content">
            <h3 id="project-modal-title" className="project-modal-title">{project.title}</h3>
            <p className="project-modal-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{project.location}</span>
            </p>

            <p className="project-modal-desc">{project.overview || project.shortDescription}</p>

            {/* Quick Specs Grid */}
            <div className="project-specs-grid">
              <div className="spec-card">
                <span className="spec-label">Carpet Area</span>
                <span className="spec-value">{project.carpetArea}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">Super Built-Up</span>
                <span className="spec-value">{project.superBuiltUp}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">Configuration</span>
                <span className="spec-value">{project.configuration}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">Parking Access</span>
                <span className="spec-value">{project.parking}</span>
              </div>
            </div>

            {/* Highlights List */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="project-section-block">
                <h4 className="block-title">Key Architectural Highlights</h4>
                <ul className="project-highlights-list">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Structural Specs */}
            {project.structuralSpecs && (
              <div className="project-section-block">
                <h4 className="block-title">Engineering &amp; Structural Standards</h4>
                <div className="structural-specs-table">
                  {Object.entries(project.structuralSpecs).map(([key, val]) => (
                    <div key={key} className="table-row">
                      <span className="table-key">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      <span className="table-val">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compliance Disclaimer */}
            <div className="project-disclaimer-box">
              <p>
                <strong>Compliance Transparency:</strong> The project visuals and specifications displayed above are illustrative architectural models intended to demonstrate Mahaveer Developers construction standards. Exact layouts, floor elevations, and finishes will be formally certified per sanctioned municipal approvals upon booking.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="project-modal-footer">
          <button type="button" className="btn-close-modal" onClick={onClose}>
            Back to Projects
          </button>
          <button type="button" className="btn-modal-enquire" onClick={handleEnquire}>
            <span>Enquire for this Project</span>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
