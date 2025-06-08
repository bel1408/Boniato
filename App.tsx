
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import StudyParticipationSection from './components/StudyParticipationSection';
import Footer from './components/Footer';
import { SECTION_IDS } from './constants';

const App: React.FC = () => {
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Optional: stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div id={SECTION_IDS.hero} ref={addToRefs} className="fade-in-section">
          <HeroSection />
        </div>
        <div id={SECTION_IDS.howItWorks} ref={addToRefs} className="fade-in-section">
          <HowItWorksSection />
        </div>
        <div id={SECTION_IDS.features} ref={addToRefs} className="fade-in-section">
          <FeaturesSection />
        </div>
        <div id={SECTION_IDS.participate} ref={addToRefs} className="fade-in-section">
          <StudyParticipationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
    