import { motion } from "framer-motion";
import CandlestickChart from "./candlestick-chart";
import heroImage from "@assets/WhatsApp Image 2025-06-23 at 09.52.05_39ead9f8_1750665480428.jpg";
import logoImage from "@assets/100xLabs LOGO full res_1750665480428.png";
import titleLogo from "@assets/final banner 100xlabs_1750669475373.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-crypto-black"
    >
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8 relative w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img 
            src={titleLogo} 
            alt="100xlabs" 
            className="w-full h-auto"
          />
        </motion.div>

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