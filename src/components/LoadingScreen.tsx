import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const welcomeText = "Welcome to Snehashis's place";
const quotes = [
  "\"The only way to do great work is to love what you do.\" - Steve Jobs",
  "\"Code is like humor. When you have to explain it, it’s bad.\" - Cory House",
  "\"First, solve the problem. Then, write the code.\" - John Johnson",
  "\"Creativity is intelligence having fun.\" - Albert Einstein"
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const quoteTimer = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 2500); // Change quote every 2.5 seconds

    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };
  }, [onComplete]);

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const textCharVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 bg-background z-50 flex items-center justify-center font-['Inter',_sans-serif]"
    >
      <div className="text-center space-y-8 flex flex-col items-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-playful bg-clip-text"
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

        <div className="w-80 h-1.5 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-playful"
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        
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
    </motion.div>
  );
};

export default LoadingScreen;
