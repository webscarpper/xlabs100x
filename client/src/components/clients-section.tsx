import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const clients = [
  {
    name: "AGIXBT",
    mcap: "30 Mil",
    followers: "20k",
    tgMembers: "5k",
    xLink: "https://x.com/agixbt"
  },
  {
    name: "Kaiko Studios",
    mcap: "11 Mil",
    followers: "20k",
    tgMembers: "3k",
    xLink: "https://x.com/KaikoHQ"
  },
  {
    name: "Trust Protocol AI",
    mcap: "5 Mil",
    followers: "12k",
    tgMembers: "7k",
    xLink: "https://x.com/TrustProtocolAI"
  },
  {
    name: "NoDev AI",
    mcap: "6 Mil",
    followers: "11k",
    tgMembers: "6k",
    xLink: "https://x.com/nodevsol"
  },
  {
    name: "Ez Money Services",
    mcap: "1.6 Mil",
    followers: "10k",
    tgMembers: "5k",
    xLink: "https://x.com/EzMoneyServices"
  },
  {
    name: "Quantum Trade",
    mcap: "1.1 Mil",
    followers: "8k",
    tgMembers: "4k",
    xLink: "https://x.com/QuantumTradePRO"
  },
  {
    name: "LFG",
    mcap: "1.6 Mil",
    followers: "6k",
    tgMembers: "3k",
    xLink: "https://x.com"
  },
  {
    name: "Floppa",
    mcap: "1.2 Mil",
    followers: "15k",
    tgMembers: "10k",
    xLink: "https://x.com"
  }
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-crypto-black">
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
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Past <span className="text-[var(--neon-green)]">Clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real projects. See how we've helped Web3 startups achieve massive growth and market success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="client-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{client.name}</h3>
                <motion.a 
                  href={client.xLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--neon-green)] hover:text-[var(--dark-green)] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaXTwitter className="text-2xl" />
                </motion.a>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Market Cap</span>
                  <span className="stat-gradient font-bold">{client.mcap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">X Followers</span>
                  <span className="stat-gradient font-bold">{client.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TG Members</span>
                  <span className="stat-gradient font-bold">{client.tgMembers}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
