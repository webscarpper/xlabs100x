
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ name: "", email: "", company: "", message: "" });
        }, 2000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            className="relative w-full max-w-lg mx-4 bg-crypto-black border border-gray-800 rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
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

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white mb-2">
                    Let's <span className="text-[var(--neon-green)]">Connect</span>
                  </h2>
                  <p className="text-gray-400">
                    Ready to 100X your Web3 project? Get in touch and let's discuss how we can help you achieve massive growth.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white font-semibold flex items-center gap-2">
                        <User className="h-4 w-4 text-[var(--neon-green)]" />
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-900/50 border-gray-700 text-white focus:border-[var(--neon-green)] focus:ring-[var(--neon-green)]"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-semibold flex items-center gap-2">
                        <Mail className="h-4 w-4 text-[var(--neon-green)]" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-900/50 border-gray-700 text-white focus:border-[var(--neon-green)] focus:ring-[var(--neon-green)]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white font-semibold">
                      Company/Project
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-gray-900/50 border-gray-700 text-white focus:border-[var(--neon-green)] focus:ring-[var(--neon-green)]"
                      placeholder="Your company or project name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white font-semibold flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[var(--neon-green)]" />
                      Message *
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:border-[var(--neon-green)] focus:ring-1 focus:ring-[var(--neon-green)] resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--neon-green)] text-crypto-black px-6 py-3 rounded-xl font-bold text-lg hover:bg-[var(--dark-green)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-crypto-black"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <motion.div
                  className="w-16 h-16 bg-[var(--neon-green)] rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  <Send className="h-8 w-8 text-crypto-black" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
