import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        window.history.pushState(null, '', `#${sectionId}`);
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== '/') {
                  window.location.href = '/';
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="mb-4"
            >
              <img 
                src="/images/villano-fitness-logo.png" 
                alt="Villano Fitness"
                className="h-20 md:h-24 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-center md:text-left">
              Empowering you to move better, feel stronger, and live healthier in Palm Coast.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-[#bca16b] font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (pathname !== '/') {
                      window.location.href = '/';
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-[#bca16b] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/#feel-good-move-better" 
                  onClick={(e) => scrollToSection(e, 'feel-good-move-better')}
                  className="text-gray-400 hover:text-[#bca16b] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/#gallery" 
                  onClick={(e) => scrollToSection(e, 'gallery')}
                  className="text-gray-400 hover:text-[#bca16b] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/#flow-strength-balance" 
                  onClick={(e) => scrollToSection(e, 'flow-strength-balance')}
                  className="text-gray-400 hover:text-[#bca16b] transition-colors"
                >
                  Flow, Strength & Balance
                </Link>
              </li>
              <li>
                <Link 
                  to="/#about-victoria" 
                  onClick={(e) => scrollToSection(e, 'about-victoria')}
                  className="text-gray-400 hover:text-[#bca16b] transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-[#bca16b] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-[#bca16b] font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-400 hover:text-[#bca16b] transition-colors flex items-center justify-center md:justify-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@villanofitness.com" 
                  className="text-gray-400 hover:text-[#bca16b] transition-colors flex items-center justify-center md:justify-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@villanofitness.com
                </a>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-[#bca16b] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-[#bca16b] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center text-sm">
            © {new Date().getFullYear()} Villano Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 