import { motion } from "framer-motion";
import { Users, Zap, Heart, Rocket, Handshake, Network, Code } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "KOL & Influencer Management",
    description: "We handle Web3-native influencers across multiple verticals: Network of over 500 KOLs from T1 to T3. Lowest prices and we continuously work with them. Reporting on reach, CTR, conversion for more trust.",
    deliverable: "High-ROI influencer runs, without middlemen"
  },
  {
    icon: Zap,
    title: "Advisory & Strategic Guidance",
    description: "Token launch strategy, go-to-market positioning. Unlimited experience with more than 50 projects built. High understanding of how to ensure smooth launches. Built countless communities long-term.",
    deliverable: "smooth launch with no frontrunners, long term community growth"
  },
  {
    icon: Heart,
    title: "Community Building - Full-Stack Team",
    description: "We embed a fully equipped community ops team into your project: Community Manager – voice of your brand across all platforms. Moderators – 24/7 active coverage on Discord & Telegram. Collab Managers – handle partnerships, whitelist swaps, AMA sourcing.",
    deliverable: "Active, self-sustaining community + daily engagement growth"
  },
  {
    icon: Rocket,
    title: "Social Media Management",
    description: "We don't just post, we engineer virality on Web3-native platforms: Scheduled content across X (Twitter), Farcaster, Lens. On-brand copywriting for threads, memes, announcements. Visual assets, motion graphics, trendjacking.",
    deliverable: "Daily presence, follower growth, tweet-to-funnel conversion"
  },
  {
    icon: Handshake,
    title: "VC & Liquidity Network Access",
    description: "Connect with capital and liquidity: We got a network of more than 20 VCs. Warm intros to crypto-native VCs & angels. Pitch polishing + investor narrative coaching.",
    deliverable: "Strategic intros and dealflow acceleration"
  },
  {
    icon: Network,
    title: "Strategic Web3 Connections (CEXs, DApps, Infra)",
    description: "We plug you into the right circles — and the right stacks: Direct lines to tier 1/2 CEXs, token listing contacts, launchpads. Access to infra partners (RPCs, nodes, indexing, wallets). Intros to builders and L1/L2 ecosystems.",
    deliverable: "Warm intros, listing pathways, and infra activation through trusted Web3 networks"
  },
  {
    icon: Code,
    title: "Full-Stack Dev Team",
    description: "From frontend magic to backend architecture, our dev squad ships fast and scales clean: Frontend devs fluent in React, Tailwind, Next.js. Smart contract engineers (Solidity, Rust, Vyper). Backend / infra: Node.js, APIs, RPC endpoints, subgraphs.",
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
                <h3 className="text-2xl font-bold mb-4 text-[var(--neon-green)]">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
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
