import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Resume from '@/assets/Resume.pdf';
import { Button } from '@/components/ui/button';

const welcomeText = "Welcome to Snehashis's place";
const quotes = [
  "\"The only way to do great work is to love what you do.\" - Steve Jobs",
  "\"Code is like humor. When you have to explain it, it’s bad.\" - Cory House",
  "\"First, solve the problem. Then, write the code.\" - John Johnson",
  "\"Creativity is intelligence having fun.\" - Albert Einstein"
];

const roles = ["world !", "coder !", "users !", "awesome !"];

const LoaderTextAnimation = () => {
    return (
        <div className="h-12 text-4xl font-semibold text-foreground flex items-center justify-center overflow-hidden font-pacifico">
            <motion.span 
                className="text-primary mr-2 text-5xl"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >[</motion.span>
            <p className="mr-2">Hello</p>
            <div className="h-10 overflow-hidden">
                <motion.ul
                    className="list-none p-0 m-0"
                    animate={{ y: [0, -40, -80, -120, -80, -40, 0] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {roles.map(role => (
                        <li key={role} className="h-10 leading-10">
                            {role}
                        </li>
                    ))}
                     <li key="world-end" className="h-10 leading-10">
                        world !
                    </li>
                </motion.ul>
            </div>
            <motion.span 
                className="text-primary ml-2 text-5xl"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >]
            </motion.span>
        </div>
    );
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nielr2004', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/snehashis-roy-40691725a/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:roysnehashis2004@gmail.com', label: 'Email' }
  ];

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 2500);
    
    const completionTimer = setTimeout(() => {
        onComplete();
    }, 5000); // Let the screen show for 5 seconds

    return () => {
      clearInterval(quoteTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const textCharVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center font-sans p-6"
    >
      <div className="text-center space-y-8 flex flex-col items-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-playful bg-clip-text font-pacifico pb-6"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {welcomeText.split("").map((char, index) => (
            <motion.span key={index} variants={textCharVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <LoaderTextAnimation />
        
        <div className="h-12 w-96 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-muted-foreground italic"
            >
              {quotes[quoteIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-16 text-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-transparent bg-gradient-playful bg-clip-text font-pacifico pb-2">
          Snehashis Roy
        </h3>
        <div className="flex justify-center gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-fast group"
            >
              <social.icon className="h-5 w-5 text-primary" />
            </motion.a>
          ))}
        </div>
        <Button variant="default" size="sm" className="w-fit" asChild>
          <a href={Resume} download="Snehashis_Roy_Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Grab My Resume
          </a>
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Snehashis Roy. Built with fun!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
