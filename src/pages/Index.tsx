import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
{/* import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection'; */}
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import BackToTop from '@/components/BackToTop';
import InteractiveBackground from '@/components/InteractiveBackground';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showLoading && (
          <LoadingScreen onComplete={() => setShowLoading(false)} />
        )}
      </AnimatePresence>
      
      {!showLoading && (
        <div className="min-h-screen bg-background relative">
          <InteractiveBackground />
          <div className="relative z-10">
            <Navigation />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <PortfolioSection />
             {/* <ExperienceSection />
              <TestimonialsSection />*/ }
              <ContactSection />
            </main>
            <Footer />
            <ChatBot />
            <MusicPlayer />
            <BackToTop />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
