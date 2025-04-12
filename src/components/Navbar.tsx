import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Update scroll progress
      const scrolled = (scrollPosition / (docHeight - windowHeight)) * 100;
      setScrollProgress(scrolled);
      
      // Show/hide scroll to top button
      setShowScrollTop(scrollPosition > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation and smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Initial check for hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set mounted to true after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Determine if we're on a dark background page
  const isDarkBg = pathname === '/blog' || pathname.startsWith('/blog/');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Update URL first
      window.history.pushState(null, '', `#${sectionId}`);
      // Then scroll to the element
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Don't render anything until after hydration
  if (!mounted) {
    return null;
  }

  const navLinks = [
    { to: '/', label: 'Home', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (pathname !== '/') {
        window.location.href = '/';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }},
    { to: '/#feel-good-move-better', label: 'Services', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      scrollToSection(e, 'feel-good-move-better');
      setIsMenuOpen(false);
    }},
    { to: '/#gallery', label: 'Gallery', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      scrollToSection(e, 'gallery');
      setIsMenuOpen(false);
    }},
    { to: '/#flow-strength-balance', label: 'Flow, Strength & Balance', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      scrollToSection(e, 'flow-strength-balance');
      setIsMenuOpen(false);
    }},
    { to: '/#about-victoria', label: 'About Me', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      scrollToSection(e, 'about-victoria');
      setIsMenuOpen(false);
    }},
    { to: '/contact', label: 'Contact', onClick: () => setIsMenuOpen(false) }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50"
        style={{ transform: 'translateZ(0)' }}
      >
        <div 
          className="h-full bg-[#bca16b] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header/Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-black/20 backdrop-blur-[2px]">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 -mt-1">
            <img 
              src="/images/villano-fitness-logo.png" 
              alt="Villano Fitness"
              width="200"
              height="80" 
              className="h-10 md:h-14 w-auto transition-opacity hover:opacity-80"
              style={{
                filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))'
              }}
            />
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#bca16b] hover:text-[#d4b87d] transition-colors -mt-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block flex-1 max-w-4xl ml-auto -mt-1">
            <ul className="flex items-center justify-end gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    onClick={link.onClick}
                    className={`text-base font-medium transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] ${
                      pathname === link.to ? 'text-[#bca16b]' : 'text-white hover:text-[#bca16b]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen bg-black/95 backdrop-blur-sm border-t border-[#bca16b]/20' : 'max-h-0'
        }`}>
          <ul className="container mx-auto px-6 py-3 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  onClick={link.onClick}
                  className={`block py-2 text-lg font-medium transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] ${
                    pathname === link.to ? 'text-[#bca16b]' : 'text-white hover:text-[#bca16b]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-4 right-4 bg-black/90 text-[#bca16b] p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-black hover:text-[#d4b87d] ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
} 