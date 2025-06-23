import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Allow fade out animation to complete
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <motion.div
        className="fixed inset-0 bg-crypto-black z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-crypto-black z-50 flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Candlestick Wick (Top) */}
        <motion.div
          className="w-1 bg-[var(--neon-green)]"
          initial={{ height: 0 }}
          animate={{ height: 20 }}
          transition={{ 
            duration: 0.4, 
            ease: "easeOut",
            delay: 0.1
          }}
        />
        
        {/* Candlestick Body */}
        <motion.div
          className="w-8 bg-[var(--neon-green)]"
          initial={{ height: 0 }}
          animate={{ height: 120 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.5
          }}
        />
        
        {/* Candlestick Wick (Bottom) */}
        <motion.div
          className="w-1 bg-[var(--neon-green)]"
          initial={{ height: 0 }}
          animate={{ height: 15 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeOut",
            delay: 1.7
          }}
        />
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-[var(--neon-green)] rounded-lg blur-lg opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ 
            duration: 1.8, 
            ease: "easeOut",
            delay: 0.2
          }}
        />
      </div>
    </div>
  );
}