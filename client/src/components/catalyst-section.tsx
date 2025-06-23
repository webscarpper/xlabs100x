
import { motion } from "framer-motion";

export default function CatalystSection() {
  return (
    <section className="pt-16 pb-20 bg-crypto-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-black mb-6 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your Catalyst for <span className="text-[var(--neon-green)]">Crypto Growth</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We turn emerging Web3 projects into market leaders through strategic marketing, community building, and industry connections.
        </motion.p>
      </div>
    </section>
  );
}
