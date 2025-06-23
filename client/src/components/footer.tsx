import { motion } from "framer-motion";
import titleLogo from "@assets/Untitled design (1)_1750668996300.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-crypto-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center mb-6 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={titleLogo} 
              alt="100xlabs" 
              className="h-12 w-auto"
            />
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
