import { useState } from 'react';
import { REVIEWS_DATA, QUALITY_PILLARS } from '../data/reviewsData';
import SectionHeading from '../components/common/SectionHeading';
import './Reviews.css';

export default function Reviews({ onOpenEnquire }) {
  const [reviewsList, setReviewsList] = useState(REVIEWS_DATA);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    project: '',
    rating: '5',
    feedback: '',
  });
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackForm.name.trim() || !feedbackForm.feedback.trim()) return;

    const newReview = {
      id: `review-${Date.now()}`,
      author: feedbackForm.name,
      location: 'Bhilai-Durg Client',
      projectType: feedbackForm.project || 'Residential Construction',
      category: 'Homeowner Feedback',
      comment: feedbackForm.feedback,
      aspectsRated: ['Client Feedback Submission'],
      isIllustrative: false,
      verificationStatus: 'Submitted For Verification',
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmittedFeedback(true);
    setFeedbackForm({
      name: '',
      project: '',
      rating: '5',
      feedback: '',
    });
  };

  return (
    <div className="reviews-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="page-header-badge">Trust &amp; Transparency</span>
          <h1 className="page-header-title">Client Feedback &amp; Quality Metrics</h1>
          <p className="page-header-lead">
            We hold our civil execution to the highest professional standards. Learn how we measure structural quality, itemized transparency, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Quality Pillars & Assurance Metrics */}
      <section className="section quality-metrics-section">
        <div className="container">
          <SectionHeading
            badge="Quality Assurance"
            title="How We Validate Every Build"
            subtitle="Our 4 quality checkpoints ensuring strict compliance before client handover."
            align="center"
          />

          <div className="quality-grid">
            {QUALITY_PILLARS.map((item, idx) => (
              <div key={idx} className="quality-card">
                <div className="quality-icon-circle">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="quality-title">{item.pillar}</h3>
                <span className="quality-metric">{item.metric}</span>
                <p className="quality-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="section testimonials-section">
        <div className="container">
          <SectionHeading
            badge="Verified Process"
            title="Representative Client Experiences"
            subtitle="Below are structured illustrative testimonials reflecting our project execution criteria."
            align="center"
          />

          <div className="reviews-container-grid">
            {reviewsList.map((review) => (
              <div key={review.id} className="detailed-review-card">
                <div className="card-top">
                  <div className="author-block">
                    <h4 className="author-name">{review.author}</h4>
                    <span className="author-loc">{review.location} &bull; {review.projectType}</span>
                  </div>
                  <span className="review-status-pill">{review.verificationStatus}</span>
                </div>

                <p className="card-quote">&ldquo;{review.comment}&rdquo;</p>

                <div className="aspects-rated-row">
                  <span className="aspects-label">Key Highlights Evaluated:</span>
                  <div className="aspects-tags">
                    {review.aspectsRated.map((asp, aIdx) => (
                      <span key={aIdx} className="aspect-tag">{asp}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Disclaimer Notice */}
          <div className="reviews-compliance-note">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
            </svg>
            <p>
              <strong>Policy on Authentic Reviews:</strong> In accordance with professional standards, Mahaveer Developers &amp; Construction does not publish fabricated client ratings. All testimonials displayed above illustrate our quality tracking methodology.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Submit Feedback Demo Form */}
      <section className="section feedback-submit-section">
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="feedback-form-card">
            <span className="feedback-badge">Client Portal</span>
            <h3 className="feedback-form-title">Have You Built with Mahaveer Developers?</h3>
            <p className="feedback-form-desc">
              Share your on-site experience regarding our civil team, structural execution, and timeline compliance.
            </p>

            {submittedFeedback ? (
              <div className="feedback-submitted-alert">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Thank You!</strong> Your feedback has been recorded in the local session demonstration and will be routed for client verification.
                </div>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="feedback-form">
                <div className="form-group">
                  <label htmlFor="fb-name" className="form-label">Your Name / Property Owner</label>
                  <input
                    id="fb-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Anand Deshmukh"
                    value={feedbackForm.name}
                    onChange={handleFeedbackChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fb-project" className="form-label">Project / Work Done in Bhilai</label>
                  <input
                    id="fb-project"
                    type="text"
                    name="project"
                    placeholder="e.g. 3BHK Row House or Concrete Slab Casting"
                    value={feedbackForm.project}
                    onChange={handleFeedbackChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fb-comment" className="form-label">Your Experience / Feedback</label>
                  <textarea
                    id="fb-comment"
                    name="feedback"
                    rows="3"
                    placeholder="How was the structural supervision, BOQ transparency, and material quality?"
                    value={feedbackForm.feedback}
                    onChange={handleFeedbackChange}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-hero-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Submit Client Feedback (Demo)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
