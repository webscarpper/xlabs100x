import { motion } from "framer-motion";
import { Users, Brain, Heart, Rocket, DollarSign, Network, Code } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "KOL & Influencer Management",
    description: [
      "Network of over 500 KOLs from T1 to T3 across multiple verticals",
      "Lowest prices with continuous collaboration and relationship management",
      "Detailed reporting on reach, CTR, and conversion metrics for transparency"
    ],
    deliverable: "High-ROI influencer runs, without middlemen"
  },
  {
    icon: Brain,
    title: "Advisory & Strategic Guidance",
    description: [
      "Token launch strategy and go-to-market positioning expertise",
      "Unlimited experience with 50+ successfully launched projects",
      "Proven methods to ensure smooth launches and long-term community growth"
    ],
    deliverable: "smooth launch with no frontrunners, long term community growth"
  },
  {
    icon: Heart,
    title: "Community Building - Full-Stack Team",
    description: [
      "Community Manager as the voice of your brand across all platforms",
      "24/7 active moderators providing coverage on Discord & Telegram",
      "Collab Managers handling partnerships, whitelist swaps, and AMA sourcing"
    ],
    deliverable: "Active, self-sustaining community + daily engagement growth"
  },
  {
    icon: Rocket,
    title: "Social Media Management",
    description: [
      "Scheduled content across X (Twitter), Farcaster, and Lens platforms",
      "On-brand copywriting for threads, memes, and announcements",
      "Visual assets, motion graphics, and trendjacking for maximum virality"
    ],
    deliverable: "Daily presence, follower growth, tweet-to-funnel conversion"
  },
  {
    icon: DollarSign,
    title: "VC & Liquidity Network Access",
    description: [
      "Direct access to our network of 20+ established VCs",
      "Warm introductions to crypto-native VCs and angel investors",
      "Pitch polishing and investor narrative coaching services"
    ],
    deliverable: "Strategic intros and dealflow acceleration"
  },
  {
    icon: Network,
    title: "Strategic Web3 Connections (CEXs, DApps, Infra)",
    description: [
      "Direct lines to tier 1/2 CEXs, token listing contacts, and launchpads",
      "Access to infrastructure partners (RPCs, nodes, indexing, wallets)",
      "Introductions to builders and L1/L2 ecosystem partners"
    ],
    deliverable: "Warm intros, listing pathways, and infra activation through trusted Web3 networks"
  },
  {
    icon: Code,
    title: "Full-Stack Dev Team",
    description: [
      "Frontend developers fluent in React, Tailwind, and Next.js",
      "Smart contract engineers specialized in Solidity, Rust, and Vyper",
      "Backend infrastructure: Node.js, APIs, RPC endpoints, and subgraphs"
    ],
    deliverable: "Fully deployed dApp or feature-ready stack built for speed, security & scale"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[var(--dark-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Our <span className="text-[var(--neon-green)]">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive Web3 marketing solutions designed to accelerate your project's growth and maximize market impact.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="service-card rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[var(--neon-green)] rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-crypto-black text-xl" size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <ul className="text-gray-300 mb-6 space-y-2">
                  {service.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-[var(--neon-green)] mr-2 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-crypto-black rounded-lg p-4">
                  <p className="text-sm text-[var(--neon-green)] font-semibold">Deliverable:</p>
                  <p className="text-white">{service.deliverable}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
