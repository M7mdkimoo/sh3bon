
import React, { useState, useEffect } from 'react';
import PromoBanner from './components/PromoBanner';
import AnnouncementBanner from './components/AnnouncementBanner';
import Hero from './components/Hero';
import Catchphrase from './components/Catchphrase';
import CoffeeMenu from './components/CoffeeMenu';
import About from './components/About';
import QualitySection from './components/QualitySection';
import Contact from './components/Contact';
import SoundToggle from './components/SoundToggle';

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-[#F5F5DC] overflow-x-hidden">
      <AnnouncementBanner />
      <PromoBanner />
      <SoundToggle />
      <main>
        <Hero scrollPosition={scrollPosition} />
        <Catchphrase />
        <CoffeeMenu />
        <About />
        <QualitySection />
        <Contact />
      </main>
    </div>
  );
};

export default App;
