import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-cosmic/90 backdrop-blur-lg border-b border-electric/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-electric"
          >
            Portfolio
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-electric transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-electric transition-smooth"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-electric transition-smooth"
            >
              Contact
            </button>
          </div>

          <Button 
            variant="electric" 
            size="sm"
            onClick={() => scrollToSection('contact')}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;