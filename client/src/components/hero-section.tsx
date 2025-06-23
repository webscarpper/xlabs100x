import { motion } from "framer-motion";
import CandlestickChart from "./candlestick-chart";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Candlestick Chart Background */}
      <CandlestickChart />
      
      {/* Central Glowing X */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="w-64 h-64 opacity-20"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-[var(--neon-green)] rounded-xl shadow-2xl flex items-center justify-center glow-green">
            <span className="text-crypto-black font-black text-8xl">X</span>
          </div>
        </motion.div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Amplifying Web3 Projects by{" "}
          <span className="text-[var(--neon-green)] neon-text">100X</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Your catalyst for crypto growth. We turn emerging Web3 projects into market leaders through strategic marketing, community building, and industry connections.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            onClick={() => scrollToSection("services")}
            className="bg-[var(--neon-green)] text-crypto-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--dark-green)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("clients")}
            className="border-2 border-[var(--neon-green)] text-[var(--neon-green)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--neon-green)] hover:text-crypto-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Client Success
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
