"use client"

import { SectionGuide } from "@/components/guide"
import { motion } from "framer-motion"
import { Brain, Shield, GitBranch, FileCode2 } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const features = [
  {
    icon: Brain,
    label: "Core Moat",
    title: "Intuition Interpreter",
    description: "Codifies stakes, causality, escalation, voice, and decision logic from the artifacts your company already produces.",
  },
  {
    icon: Shield,
    label: "Security",
    title: "Enterprise-Grade Control",
    description: "Customer-owned data, encryption at rest and in transit, and architecture built for sensitive operating environments.",
  },
  {
    icon: GitBranch,
    label: "Visualization",
    title: "Knowledge Galaxies",
    description: "A drillable map of how every decision is made, replacing dashboards, KPI trackers, and exception reports with visual pathways.",
  },
  {
    icon: FileCode2,
    label: "Runtime",
    title: "Skills-Native Output",
    description: "Any AI agent can call Amigdala at a decision fork and receive a decision, confidence, citation, HITL signal, and audit trail.",
  },
]

const featuresGuideSteps = [
  {
    title: "Extract the decision logic",
    body: "Amigdala interprets the stakes, causality, escalation rules, and company voice embedded in enterprise artifacts.",
  },
  {
    title: "Attach evidence and controls",
    body: "Preserve citations, confidence, permissions, and human-review signals so context stays dependable instead of becoming a black box.",
  },
  {
    title: "Make the memory decision-ready",
    body: "The result is more than a document index: it is context an agent can use at the exact point it needs to decide.",
  },
]

export function FeatureGrid() {
  return (
    <section id="features" className="relative w-full px-8 sm:px-12 lg:px-24 py-32">
      <div className="max-w-7xl mx-auto">
        <SectionGuide
          title="Process artifacts into reliable context"
          steps={featuresGuideSteps}
          step={3}
          totalSteps={6}
          align="left"
        />
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
                CORE FEATURES
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-foreground">
              Four features. One primitive.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Amigdala turns scattered enterprise artifacts into actionable memory
            that agents and executives can trust.
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
