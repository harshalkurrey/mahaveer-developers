import { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { COMPANY_INFO } from '../data/companyInfo';
import { getImageByKey } from '../assets/images';
import SectionHeading from '../components/common/SectionHeading';
import './Services.css';

export default function Services({ onOpenEnquire }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  return (
    <div className="services-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="page-header-badge">Civil &amp; Construction Solutions</span>
          <h1 className="page-header-title">Our Specialized Services</h1>
          <p className="page-header-lead">
            Comprehensive civil engineering consulting, high-strength concrete works, turnkey residential house construction, and planned land development across Bhilai, Chhattisgarh.
          </p>
        </div>
      </section>

      {/* Services Deep Dive List */}
      <section className="section services-detail-section">
        <div className="container">
          <div className="services-detailed-list">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`service-detail-item ${isEven ? 'row-reverse' : ''}`}
                >
                  <div className="service-detail-image-box">
                    <img
                      src={getImageByKey(service.imageKey)}
                      alt={`${service.title} Execution`}
                      className="service-detail-img"
                    />
                    <span className="service-detail-tag">{service.tag}</span>
                  </div>

                  <div className="service-detail-content">
                    <span className="service-number">Service 0{index + 1}</span>
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-subtitle">{service.subtitle}</p>
                    <p className="service-full-desc">{service.fullDesc}</p>

                    <div className="deliverables-block">
                      <h4 className="deliverables-title">Key Engineering Deliverables:</h4>
                      <ul className="deliverables-list">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="deliverable-item">
                            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-ideal-for">
                      <strong>Best Suited For:</strong> {service.idealFor}
                    </div>

                    <div className="service-action-wrap">
                      <button
                        type="button"
                        className="btn-enquire-service"
                        onClick={() => onOpenEnquire && onOpenEnquire(service.title)}
                      >
                        <span>Enquire for {service.title}</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison: Turnkey with Mahaveer vs Traditional Contractors */}
      <section className="section comparison-section">
        <div className="container">
          <SectionHeading
            badge="The Construction Advantage"
            title="Turnkey Engineering vs. Traditional Contractors"
            subtitle="Understand how our engineering oversight protects your family’s investment and structural longevity."
            align="center"
          />

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Parameters</th>
                  <th>Mahaveer Developers &amp; Construction</th>
                  <th>Unorganized Local Contractors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Structural Calculations</strong></td>
                  <td className="highlight-cell">Certified IS 456 &amp; IS 1893 seismic calculations</td>
                  <td>Rule-of-thumb guesswork without soil checks</td>
                </tr>
                <tr>
                  <td><strong>Budget Transparency</strong></td>
                  <td className="highlight-cell">100% Itemized BOQ with fixed material grade guarantees</td>
                  <td>Frequent verbal estimates followed by mid-project cost hikes</td>
                </tr>
                <tr>
                  <td><strong>Raw Material Vetting</strong></td>
                  <td className="highlight-cell">Primary brand TMT (Fe550D) &amp; factory-tested cement</td>
                  <td>Secondary rebars &amp; mixed sand ratios to save margins</td>
                </tr>
                <tr>
                  <td><strong>Curing &amp; Quality Tests</strong></td>
                  <td className="highlight-cell">Full 21-day monitored hydration with concrete cube testing</td>
                  <td>Inadequate 7-day curing leading to micro-shrinkage cracks</td>
                </tr>
                <tr>
                  <td><strong>Billing Schedule</strong></td>
                  <td className="highlight-cell">Strictly milestone-linked based on physical stage verification</td>
                  <td>Advance cash demands ahead of completed site milestones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section faq-section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            badge="Common Inquiries"
            title="Frequently Asked Construction Questions"
            subtitle="Straightforward answers regarding construction estimation, row houses, and municipal processes."
            align="center"
          />

          <div className="faq-accordion">
            {COMPANY_INFO.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-icon-indicator" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
