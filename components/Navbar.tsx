
import React, { useState, useEffect } from 'react';
import { APP_NAME, NAV_LINKS } from '../constants';

const BoniatoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={className}
    aria-labelledby="boniatoIconTitle"
    role="img"
  >
    <title id="boniatoIconTitle">Boniato Logo</title>
    {/* Main Boniato Body - Orange */}
    <path
      d="M54.2,36.7C57.7,30,56.5,21.7,51.3,16c-5.2-5.7-13.2-7.7-20.5-5.2c-7.3,2.5-12.5,8.8-13.6,16.5 c-1.1,7.7,2.1,15.4,7.8,19.8c5.7,4.4,13.4,5.1,20,2.4C51.2,47.1,54.1,42.8,54.2,36.7z"
      fill="#F97316" // secondary.DEFAULT (Orange from Tailwind config)
    />
    {/* Eyes - Black */}
    <circle cx="28" cy="26" r="3.5" fill="#1F2937" /> {/* neutral.darkest */}
    <circle cx="40" cy="27" r="3.5" fill="#1F2937" />
    {/* Eye Sparkle - White */}
    <circle cx="29.5" cy="25" r="1.2" fill="white" />
    <circle cx="41.5" cy="26" r="1.2" fill="white" />
    {/* Mouth - Black */}
    <path
      d="M29,35 Q34,39 39,35"
      stroke="#1F2937" // neutral.darkest
      strokeWidth="2"
      fill="transparent"
      strokeLinecap="round"
    />
    {/* Sprout - Green */}
    <path
      d="M38,16 C38,13 40,11 42,12 C43,10 45,10 46,13 C44,14.5 41,15 38,16z"
      fill="#22C55E" // primary.DEFAULT (Green from Tailwind config)
    />
    <path
      d="M41,15 C41,12.5 42.5,10.5 44,11.5 C44.5,9.5 46.5,9.5 47,12 C45.5,13.5 43,14 41,15z"
      fill="#15803D" // primary.dark (Darker Green from Tailwind config)
      transform="rotate(15 42 12)"
    />
  </svg>
);


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeOpaque = window.scrollY > 20 || isMobileMenuOpen;
      if (isScrolled !== shouldBeOpaque) {
        setIsScrolled(shouldBeOpaque);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen, isScrolled]); // isScrolled added to dependencies

   useEffect(() => {
    if (isMobileMenuOpen) {
      setIsScrolled(true);
    } else if (window.scrollY <= 20) {
      setIsScrolled(false);
    }
  }, [isMobileMenuOpen]);


  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1)); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); 
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
  }`;
  
  // Adjusted text colors for light hero background
  const logoTextColor = isScrolled ? 'text-primary-DEFAULT' : 'text-primary-DEFAULT'; // Green on transparent/light bg
  const linkTextColor = isScrolled 
    ? 'text-neutral-dark hover:text-primary-DEFAULT' 
    : 'text-neutral-dark hover:text-primary-DEFAULT'; // Dark on transparent/light bg
  
  const mobileIconColor = isScrolled 
    ? 'text-neutral-dark hover:text-primary-DEFAULT' 
    : 'text-neutral-dark hover:text-primary-DEFAULT'; // Dark on transparent/light bg


  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center space-x-2">
            <BoniatoIcon className="w-8 h-8 transition-transform duration-300 transform hover:rotate-[-10deg]" />
            <span 
              className={`text-xl font-bold transition-colors duration-300 ${logoTextColor}`}
            >
              {APP_NAME}
            </span>
          </a>
          
          <div className="hidden md:flex space-x-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${linkTextColor}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${mobileIconColor}`}
              aria-label="Abrir menú principal"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg"> {/* Mobile menu always has white background */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-dark hover:text-primary-DEFAULT hover:bg-neutral-light"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;