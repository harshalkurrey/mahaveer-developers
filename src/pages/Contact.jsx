import { useState } from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import SectionHeading from '../components/common/SectionHeading';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'House Construction',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      newErrors.service = 'Please select a service or requirement.';
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
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
    <div className="contact-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="page-header-badge">Reach Our Office</span>
          <h1 className="page-header-title">Contact Mahaveer Developers</h1>
          <p className="page-header-lead">
            Visit our registered office in Kohka, Bhilai, or submit your project details below for an upfront feasibility and BOQ consultation.
          </p>
        </div>
      </section>

      {/* Contact Grid: Details + Interactive Form */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Verified Coordinates & Office Info */}
            <div className="contact-info-col">
              <span className="section-badge">Direct Communication</span>
              <h2 className="info-col-title">Engineering Office &amp; Site Contacts</h2>
              <p className="info-col-desc">
                We encourage property owners and land developers to visit us in person. Our lead engineers review soil feasibility, blueprints, and material specifications directly.
              </p>

              {/* Coordinates Cards */}
              <div className="contact-cards-stack">
                {/* Physical Address */}
                <div className="coord-card">
                  <div className="coord-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="coord-details">
                    <span className="coord-tag">Registered Office</span>
                    <address className="coord-val">
                      {COMPANY_INFO.address.shop}, {COMPANY_INFO.address.street},<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}
                    </address>
                  </div>
                </div>

                {/* Direct Telephone */}
                <div className="coord-card">
                  <div className="coord-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="coord-details">
                    <span className="coord-tag">Phone Inquiries</span>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="coord-val phone-link">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat */}
                <div className="coord-card whatsapp-coord-card">
                  <div className="coord-icon icon-wa" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.531 1.79.813 2.796.813 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.77zm3.366 8.163c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.115-.515-1.745-.722-2.885-2.483-2.973-2.6-.088-.116-.708-.941-.708-1.796 0-.855.449-1.277.608-1.45.16-.174.348-.217.464-.217.116 0 .232.001.333.006.107.005.25.04.391.38.144.348.493 1.202.536 1.29.043.087.073.188.014.304-.058.116-.087.188-.174.289l-.261.304c-.087.087-.179.183-.077.358.101.174.45 1.218 1.579 1.717.388.172.695.228.938.151.272-.086.608-.709.695-.955.087-.247.174-.29.29-.247.116.043 1.347.636 1.579.752.232.116.388.174.444.271.056.097.056.562-.088.967z" />
                    </svg>
                  </div>
                  <div className="coord-details">
                    <span className="coord-tag">Instant Messaging</span>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="coord-val wa-link"
                    >
                      Click to Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Transit Distances */}
              <div className="transit-guide-box">
                <h4 className="transit-title">Regional Connectivity &amp; Transit</h4>
                <ul className="transit-list">
                  <li>&bull; ~15 mins from Supela Chowk (G.E. Road)</li>
                  <li>&bull; ~20 mins from Durg Railway Junction</li>
                  <li>&bull; Convenient accessibility from Kurud Road and Kohka Market</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact & Estimation Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <h3 className="form-card-title">Send a Project Enquiry</h3>
                <p className="form-card-desc">
                  Fill in your details below. We typically review requirements and reply within business hours.
                </p>

                {isSuccess ? (
                  <div className="contact-success-state">
                    <div className="success-icon-badge" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h4 className="success-head">Enquiry Submitted Successfully</h4>
                    <p className="success-body">
                      Thank you for contacting Mahaveer Developers &amp; Construction.
                    </p>
                    <div className="demo-notice-pill">
                      <strong>Frontend Demonstration Mode:</strong> Your inputs have been validated locally. In production, this form triggers real-time lead routing to our site team in Bhilai.
                    </div>
                    <button
                      type="button"
                      className="btn-reset-form"
                      onClick={() => setIsSuccess(false)}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="page-enquiry-form" noValidate>
                    {/* Full Name */}
                    <div className="form-group">
                      <label htmlFor="contact-fullName" className="form-label">
                        Full Name <span className="required-star">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        name="fullName"
                        placeholder="Your full name"
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
                        <label htmlFor="contact-phone" className="form-label">
                          Mobile Number <span className="required-star">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          placeholder="10-digit phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`form-input ${errors.phone ? 'has-error' : ''}`}
                          disabled={isSubmitting}
                        />
                        {errors.phone && <span className="field-error">{errors.phone}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-label">
                          Email Address <span className="optional-label">(Optional)</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          placeholder="name@domain.com"
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
                      <label htmlFor="contact-service" className="form-label">
                        Requirement / Service of Interest <span className="required-star">*</span>
                      </label>
                      <select
                        id="contact-service"
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
                        <option value="General Inquiry">General Site Consultation</option>
                      </select>
                      {errors.service && <span className="field-error">{errors.service}</span>}
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label htmlFor="contact-message" className="form-label">
                        Project Details / Site Location <span className="optional-label">(Optional)</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your plot location, required floor area, or preferred row house type in Bhilai..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        disabled={isSubmitting}
                      ></textarea>
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      className="btn-submit-contact"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border" aria-hidden="true"></span>
                          <span>Validating &amp; Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Consultation Enquiry</span>
                          <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="privacy-microcopy">
                      Your details are handled with complete confidentiality. No unsolicited marketing.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <SectionHeading
            badge="Office Map &amp; Directions"
            title="Locate Us on Kurud Road, Kohka"
            subtitle="Conveniently situated in the residential hub of Kohka, Bhilai."
            align="center"
          />

          <div className="map-container-card">
            {/* Responsive Google Maps Embed with fallback overlay */}
            <iframe
              title="Mahaveer Developers & Construction Location"
              src="https://maps.google.com/maps?q=Shop+no+5,+Kurud+Rd,+Kohka,+Bhilai,+Chhattisgarh+490023&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            ></iframe>

            <div className="map-details-overlay">
              <span className="overlay-badge">Office Coordinates</span>
              <p className="overlay-address">
                <strong>Mahaveer Developers &amp; Construction</strong><br />
                {COMPANY_INFO.address.full}
              </p>
              <a
                href="https://maps.google.com/?q=Shop+no+5,+Kurud+Rd,+Kohka,+Bhilai,+Chhattisgarh+490023"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-directions"
              >
                <span>Open in Google Maps App</span>
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
