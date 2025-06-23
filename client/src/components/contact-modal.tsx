import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { FaTelegram } from "react-icons/fa";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleTelegramClick = () => {
    window.open('https://t.me/locked_in_lucas', '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg mx-4 bg-crypto-black border border-gray-800 rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-[var(--neon-green)] transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-black text-white mb-4">
                Let's <span className="text-[var(--neon-green)]">Connect</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                DM us on Telegram for inquiries
              </p>

              {/* Telegram Button */}
              <motion.button
                onClick={handleTelegramClick}
                className="inline-flex items-center gap-3 bg-[var(--neon-green)] text-crypto-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--dark-green)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTelegram className="h-6 w-6" />
                Contact on Telegram
              </motion.button>
            </div>

            {/* Instructions */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Send className="h-5 w-5 text-[var(--neon-green)]" />
                When messaging please include:
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Describe in detail what you are building</li>
                <li>• Add all key information about your project</li>
                <li>• Your goals and timeline</li>
                <li>• How we can help you achieve 100X growth</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}