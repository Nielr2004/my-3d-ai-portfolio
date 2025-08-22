import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const roles = [
    "A Web Developer", 
    "A Frontend Developer", 
    "An UI/UX Developer",
    "A Backend Developer",
    "An AI/ML Developer",
    "A Gen AI Developer",
    "A Data Analyst",
    "A Data Visualizer"
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 150;
    const currentRole = roles[index];

    const handleTyping = () => {
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center pt-20 lg:pt-0">
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold"
            >
              <h1>Hi, I'm Snehashis Roy</h1>
              <h2 className="text-transparent bg-gradient-playful bg-clip-text min-h-[80px] sm:min-h-[100px] md:min-h-[120px] font-pacifico text-3xl sm:text-4xl md:text-6xl">
                {text}
                <span className="opacity-50 animate-pulse">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              I love bringing ideas to life with code, creating cool stuff for the web that's both fun to use and looks great.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-64 sm:h-80 lg:h-[500px] relative"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-8 h-8 text-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
