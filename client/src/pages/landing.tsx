import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CatalystSection from "@/components/catalyst-section";
import ServicesSection from "@/components/services-section";
import ClientsSection from "@/components/clients-section";
import Footer from "@/components/footer";
import ContactModal from "@/components/contact-modal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Landing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-crypto-black text-white">
      <Navigation />
      <HeroSection />
      <CatalystSection />
      <ClientsSection />
      <ServicesSection />
      
      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-crypto-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-[var(--neon-green)]">100X</span> Your Project?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join the elite Web3 projects that have already achieved massive growth with our proven strategies.
          </motion.p>
          <motion.button 
            onClick={() => setIsContactModalOpen(true)}
            className="border-2 border-[var(--neon-green)] text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-[var(--neon-green)] hover:text-crypto-black transition-all inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>
      
      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
