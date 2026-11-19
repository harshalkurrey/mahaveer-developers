import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import EnquiryModal from './components/common/EnquiryModal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

import './components/layout/MainLayout.css';

// Automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainAppShell() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryService, setEnquiryService] = useState('House Construction');

  const handleOpenEnquire = (serviceName = '') => {
    setEnquiryService(serviceName || 'House Construction');
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquire = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="main-layout">
      <ScrollToTop />

      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Navbar onEnquireClick={() => handleOpenEnquire('General Consultation')} />

      {/* Dynamic Route Content */}
      <main id="main-content" className="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home onOpenEnquire={handleOpenEnquire} />} />
          <Route path="/about" element={<About onOpenEnquire={handleOpenEnquire} />} />
          <Route path="/services" element={<Services onOpenEnquire={handleOpenEnquire} />} />
          <Route path="/projects" element={<Projects onOpenEnquire={handleOpenEnquire} />} />
          <Route path="/reviews" element={<Reviews onOpenEnquire={handleOpenEnquire} />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route redirects to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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

export default function App() {
  return (
    <BrowserRouter>
      <MainAppShell />
    </BrowserRouter>
  );
}
