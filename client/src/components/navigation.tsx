import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/100xLabs LOGO full res_1750665480428.png";
import titleLogo from "@assets/Untitled design (1)_1750668996300.png";

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
        isScrolled ? "bg-black backdrop-blur-md border-b border-gray-800" : "bg-black"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src={titleLogo} 
              alt="100xlabs" 
              className="h-12 w-auto"
            />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-[var(--neon-green)] transition-colors font-bold"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("clients")}
              className="text-gray-300 hover:text-[var(--neon-green)] transition-colors font-bold"
            >
              Clients
            </button>
            <X className="text-[var(--neon-green)] h-6 w-6" />
            <motion.button 
              onClick={() => scrollToSection("contact")}
              className="bg-[var(--neon-green)] text-crypto-black px-6 py-2 rounded-lg font-semibold hover:bg-[var(--dark-green)] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
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
                className="text-gray-300 hover:text-[var(--neon-green)] transition-colors text-left font-bold"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("clients")}
                className="text-gray-300 hover:text-[var(--neon-green)] transition-colors text-left font-bold"
              >
                Clients
              </button>
              <X className="text-[var(--neon-green)] h-6 w-6" />
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-[var(--neon-green)] text-crypto-black px-6 py-2 rounded-lg font-semibold hover:bg-[var(--dark-green)] transition-colors text-left w-fit"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
