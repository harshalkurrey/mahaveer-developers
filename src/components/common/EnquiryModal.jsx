import { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../../data/companyInfo';
import './EnquiryModal.css';

export default function EnquiryModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: initialService || 'House Construction',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update initial service if passed from outside
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
      setErrors({});
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

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    if (!cleanPhone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service or project of interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network submission with mock latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after successful submission
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: 'House Construction',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="modal-badge">Direct Site Consultation</span>
            <h3 id="modal-title" className="modal-title">Enquire with Mahaveer Developers</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {isSuccess ? (
            <div className="enquiry-success-card">
              <div className="success-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="success-title">Enquiry Successfully Received</h4>
              <p className="success-message">
                Thank you for your interest in Mahaveer Developers &amp; Construction.
              </p>
              <div className="demo-notice-pill">
                <strong>Demonstration Note:</strong> This frontend prototype verified form inputs locally. In production, this instantly dispatches an SMS &amp; WhatsApp lead to the site office in Kohka, Bhilai.
              </div>
              <div className="direct-reachout-box">
                <p>For urgent on-site consultations, connect directly:</p>
                <div className="reachout-links">
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="reachout-btn phone-btn">
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reachout-btn whatsapp-btn"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
              <button type="button" className="btn-done" onClick={onClose}>
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="enquiry-form" noValidate>
              <p className="form-lead">
                Fill in your project requirements. Our engineering team in Kohka, Bhilai will review feasibility and get in touch.
              </p>

              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="modal-fullName" className="form-label">
                  Full Name <span className="required-star">*</span>
                </label>
                <input
                  id="modal-fullName"
                  type="text"
                  name="fullName"
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
              </div>

              {/* Phone & Email Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-phone" className="form-label">
                    Mobile Number <span className="required-star">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-email" className="form-label">
                    Email Address <span className="optional-label">(Optional)</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              {/* Service Selection */}
              <div className="form-group">
                <label htmlFor="modal-service" className="form-label">
                  Service / Project Requirement <span className="required-star">*</span>
                </label>
                <select
                  id="modal-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`form-select ${errors.service ? 'has-error' : ''}`}
                  disabled={isSubmitting}
                >
                  <option value="House Construction">House Construction (Turnkey Living)</option>
                  <option value="2BHK Row House">2BHK Modern Row House</option>
                  <option value="3BHK Row House">3BHK Luxury Row House</option>
                  <option value="4BHK Row House">4BHK Executive Row House</option>
                  <option value="Concrete Construction">Concrete Construction (Heavy RCC)</option>
                  <option value="Civil Engineering Consulting">Civil Engineering Consulting</option>
                  <option value="Land Development">Land Development &amp; Plotted Layouts</option>
                  <option value="General Inquiry">General Construction Inquiry</option>
                </select>
                {errors.service && <span className="field-error">{errors.service}</span>}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="modal-message" className="form-label">
                  Project Details / Site Location <span className="optional-label">(Optional)</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows="3"
                  placeholder="Share details like plot size, preferred location in Bhilai, or timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Submit CTA Button */}
              <div className="form-actions">
                <button type="submit" className="btn-submit-enquiry" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border" aria-hidden="true"></span>
                      <span>Validating &amp; Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Enquiry</span>
                      <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className="privacy-microcopy">
                We respect your privacy. No spam. Direct engineering correspondence only.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
