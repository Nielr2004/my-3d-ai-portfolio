import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Import your images here
import wavingImage from '@/assets/waving.png';
import codingImage from '@/assets/coding.png';
import drinkingImage from '@/assets/drinking.png';
import vibingImage from '@/assets/vibing.png';

// 2. Add your imported images to this array
const images = [
  wavingImage,
  codingImage,
  vibingImage,
  drinkingImage,
];

const Scene3D = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // This sets up the timer for the slideshow
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changes image every 3 seconds

    return () => clearInterval(interval); // Cleans up the timer
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-lg">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Waving character avatar slideshow"
          initial={{ opacity: 0, scale: 1.1, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: -50 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute w-full h-full object-contain"
        />
      </AnimatePresence>
    </div>
  );
};

export default Scene3D;
