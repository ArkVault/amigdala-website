"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, Globe } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const features = [
  {
    icon: Brain,
    label: "Neural Mesh",
    title: "Distributed Intelligence",
    description: "Decentralized inference nodes operating across the global edge fabric for zero-latency reasoning and seamless knowledge retrieval.",
  },
  {
    icon: Zap,
    label: "Speed",
    title: "Millisecond Retrieval",
    description: "High-precision vector indexing ensuring data parity within single-digit millisecond windows for instant context delivery.",
  },
  {
    icon: Shield,
    label: "Security",
    title: "Enterprise Grade",
    description: "SOC2 Type II compliant with end-to-end encryption. Your knowledge stays private with isolated compute environments.",
  },
  {
    icon: Globe,
    label: "Scale",
    title: "Global Deployment",
    description: "Deploy across 50+ edge regions with automatic failover and load balancing for consistent worldwide performance.",
  },
]

export function FeatureGrid() {
  return (
    <section className="relative w-full px-12 lg:px-24 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-muted-foreground/30" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-foreground">
              Architectural Foundation
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Built on a substrate of precision engineering and fluid intelligence, 
            designed for the demands of modern enterprise.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="bg-background p-8 flex flex-col gap-6 group hover:bg-secondary/50 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center border border-border rounded-sm group-hover:border-foreground/30 transition-colors">
                  <feature.icon size={18} strokeWidth={1.5} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Label */}
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-muted-foreground">
                {feature.label}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl font-light text-foreground">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
