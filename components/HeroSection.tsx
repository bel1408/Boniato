import React from 'react';
import Button from './common/Button';
import { SECTION_IDS } from '../constants';

const HeroSection: React.FC = () => {
  const scrollToParticipate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(SECTION_IDS.participate);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative bg-neutral-lightest text-white min-h-[calc(100vh-0px)] flex items-center justify-center pt-16"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-black">Descubre lo que </span>
          <span className="text-secondary-light">realmente comes</span>,
          <br className="hidden sm:inline" />
          <span className="text-black"> personalizado para ti</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-black max-w-3xl mx-auto mb-10">
          Todo lo que tus productos esconden, BONIATO te lo cuenta.
        </p>
        <Button 
          onClick={scrollToParticipate}
          size="lg"
          variant="secondary"
          className="shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Quiero probar
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <a href={`#${SECTION_IDS.howItWorks}`} aria-label="Scroll down">
          <svg className="w-8 h-8 text-white opacity-70 hover:opacity-100 transition-opacity" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
