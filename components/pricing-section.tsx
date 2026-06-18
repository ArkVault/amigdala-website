"use client"

import { SectionGuide } from "@/components/guide"
import { ArrowRight, Check, CircleDollarSign, ClipboardCheck, Network, Workflow } from "lucide-react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const benefits = [
  {
    icon: CircleDollarSign,
    label: "Budget",
    title: "Reduce repeated AI-token spend",
    description: "Stop paying each agent session to relearn the same enterprise reality. Persistent context makes AI usage more efficient and procurement-modelable.",
  },
  {
    icon: Workflow,
    label: "Execution",
    title: "Move AI pilots into production",
    description: "Agents get operating context, decision rules, citations, and escalation paths, so teams can ship AI workflows that survive outside demos.",
  },
  {
    icon: Network,
    label: "Leadership",
    title: "Replace tribal knowledge with decision pathways",
    description: "Executives see how decisions are made across functions, countries, and systems without waiting for dashboard cleanups or status meetings.",
  },
  {
    icon: ClipboardCheck,
    label: "Governance",
    title: "Make every recommendation auditable",
    description: "Each output can include decision, confidence, citation, human-in-the-loop signal, and audit trail for sensitive enterprise environments.",
  },
]

const proofPoints = [
  "Persistent company context for AI agents",
  "Visual decision galaxies for executives",
  "Sector packs for FS, legal, pharma, aviation, transport, healthcare, and government",
  "Value-aligned commercial model: knowledge base, AI credits, and outcome share",
]

const benefitsGuideSteps = [
  {
    title: "Tie value to repeated work",
    body: "Quantify where agents and people repeatedly rebuild context, then model the savings from persistent memory.",
  },
  {
    title: "Pick one production pilot",
    body: "Choose a workflow with real decisions, required citations, and a clear human escalation path.",
  },
  {
    title: "Measure auditability",
    body: "Track whether each recommendation includes source lineage, confidence, review status, and decision trail.",
  },
]

function BenefitCard({ benefit, index }: { benefit: (typeof benefits)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease }}
      className="flex flex-col h-full p-8 bg-background"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground">
          {benefit.label}
        </span>
        <div className="w-10 h-10 flex items-center justify-center border border-border rounded-sm">
          <benefit.icon size={18} strokeWidth={1.5} className="text-foreground" />
        </div>
      </div>

      <h3 className="font-serif text-xl font-light text-foreground mb-4">
        {benefit.title}
      </h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">
        {benefit.description}
      </p>

      <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/50 mt-8">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  )
}

export function PricingSection() {
  return (
    <section id="benefits" className="relative w-full px-8 sm:px-12 lg:px-24 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionGuide
          title="Turn the story into a pilot"
          steps={benefitsGuideSteps}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-muted-foreground/30" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground">
              BENEFITS
            </span>
            <div className="w-12 h-[1px] bg-muted-foreground/30" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-foreground mb-4">
            Benefits that compound every session
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Amigdala creates leverage by keeping organizational context alive,
            turning AI interactions into reusable company knowledge instead of
            one-off prompts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.label} benefit={benefit} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease }}
          className="mt-10 border border-border bg-secondary/40 p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <Check size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-foreground" />
                <span className="text-[12px] text-muted-foreground leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 flex items-center justify-center gap-2 bg-foreground text-primary-foreground px-6 py-3 text-[11px] font-mono tracking-[0.12em] uppercase rounded-sm"
          >
            <span>Build a Pilot</span>
            <ArrowRight size={14} strokeWidth={2} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
