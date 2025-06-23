import { motion } from "framer-motion";
import logoImage from "@assets/100xLabs LOGO full res_1750665480428.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-crypto-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={logoImage} 
              alt="100xlabs logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-black text-white">
              100<span className="text-[var(--neon-green)]">X</span>labs
            </span>
          </motion.div>
          
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-2">Ready to amplify your Web3 project?</p>
            <p className="text-sm text-gray-500">© 2025 100xlabs. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
