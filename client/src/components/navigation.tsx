import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-crypto-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 bg-[var(--neon-green)] rounded-lg flex items-center justify-center animate-pulse-green">
              <span className="text-crypto-black font-black text-xl">X</span>
            </div>
            <span className="text-2xl font-black text-white">
              100<span className="text-[var(--neon-green)]">X</span>labs
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-[var(--neon-green)] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("clients")}
              className="text-gray-300 hover:text-[var(--neon-green)] transition-colors"
            >
              Clients
            </button>
            <motion.button 
              onClick={() => scrollToSection("contact")}
              className="bg-[var(--neon-green)] text-crypto-black px-6 py-2 rounded-lg font-semibold hover:bg-[var(--dark-green)] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-crypto-black/95 backdrop-blur-md border-t border-gray-800 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-[var(--neon-green)] transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("clients")}
                className="text-gray-300 hover:text-[var(--neon-green)] transition-colors text-left"
              >
                Clients
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-[var(--neon-green)] text-crypto-black px-6 py-2 rounded-lg font-semibold hover:bg-[var(--dark-green)] transition-colors text-left w-fit"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
