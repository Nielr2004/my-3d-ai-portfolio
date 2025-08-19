import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import BackToTop from '@/components/BackToTop';

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
        <div className="min-h-screen bg-background">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />
          <ServicesSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
          <ChatBot />
          <BackToTop />
        </div>
      )}
    </>
  );
};

export default Index;
