import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <ChatBot />
    </div>
  );
};

export default Index;
