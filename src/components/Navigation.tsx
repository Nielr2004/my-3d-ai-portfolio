import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, User, Briefcase, Mail, Github, Linkedin, FileText } from 'lucide-react';
import Resume from '@/assets/Resume.pdf';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialItems = [
    { id: 'github', label: 'GitHub', icon: Github, href: 'https://github.com' }, // Replace with your GitHub URL
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/snehashis-roy/' }, // Replace with your LinkedIn URL
    { id: 'resume', label: 'Resume', icon: FileText, href: Resume, download: 'Snehashis_Roy_Resume.pdf' },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center"
    >
      <div className="group bg-background/50 backdrop-blur-lg border border-border rounded-full shadow-lg transition-all duration-300 hover:shadow-playful m-4">
        <div className="flex items-center justify-center p-2 space-x-2">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 relative group/item"
                onClick={() => scrollToSection(item.id)}
              >
                <motion.div whileHover={{ y: -2 }}>
                  <item.icon className="h-5 w-5 text-foreground/70 group-hover/item:text-primary transition-colors" />
                </motion.div>
                 <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover/item:scale-100 transition-all duration-200 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
                  {item.label}
                </span>
              </Button>
            </motion.div>
          ))}

          {/* Separator */}
          <div className="h-6 w-px bg-border mx-2"></div>

          {socialItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 relative group/item"
                asChild
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer" download={item.download}>
                  <motion.div whileHover={{ y: -2 }}>
                    <item.icon className="h-5 w-5 text-foreground/70 group-hover/item:text-primary transition-colors" />
                  </motion.div>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover/item:scale-100 transition-all duration-200 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
                    {item.label}
                  </span>
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
