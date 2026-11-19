import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EnquiryModal from '../common/EnquiryModal';
import './MainLayout.css';

/**
 * Reusable Main Layout Component
 * Houses the sticky Navbar, dynamic page content area, Footer, and global Enquiry Modal.
 */
export default function MainLayout({ children }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryService, setEnquiryService] = useState('');

  const handleOpenEnquire = (serviceName = '') => {
    setEnquiryService(serviceName || 'House Construction');
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquire = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="main-layout">
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Navbar onEnquireClick={() => handleOpenEnquire()} />

      {/* Main Content Area */}
      <main id="main-content" className="main-content" tabIndex="-1">
        {typeof children === 'function' ? children({ openEnquire: handleOpenEnquire }) : children}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquire}
        initialService={enquiryService}
      />
    </div>
  );
}
