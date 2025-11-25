import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import DecryptedText from './DecryptedText';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <>
          {/* Screen curtain - slides up from bottom */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.2
            }}
            className="fixed inset-0 z-50 bg-white"
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[51] flex items-center justify-center pointer-events-none"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <DecryptedText
                text="Kalyani Tewari"
                speed={80}
                maxIterations={20}
                sequential={true}
                revealDirection="center"
                animateOn="view"
                className="text-2xl md:text-3xl font-light tracking-wide text-black"
                parentClassName="font-serif"
                encryptedClassName="text-2xl md:text-3xl font-light tracking-wide text-gray-300"
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}