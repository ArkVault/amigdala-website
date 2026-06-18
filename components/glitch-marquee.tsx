"use client"

import { SectionGuide } from "@/components/guide"
import { motion } from "framer-motion"

const sourceSignals = [
  "Slack",
  "Teams",
  "Tickets",
  "CRM",
  "ERP",
  "Brand Voice",
  "Escalations",
  "Decision Logs",
  "Audit Trails",
]

const signalsGuideSteps = [
  {
    title: "Treat each signal as an input",
    body: "Slack, Teams, tickets, CRM, ERP, and audit trails are sources of operating context.",
  },
  {
    title: "Keep motion from becoming noise",
    body: "Amigdala turns these moving fragments into stable memory agents can safely call.",
  },
  {
    title: "Preserve lineage",
    body: "Every answer should remain traceable back to the artifacts and events that shaped it.",
  },
]

export function GlitchMarquee() {
  return (
    <section className="w-full py-16 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 mb-8">
        <SectionGuide
          title="Understand the source stream"
          steps={signalsGuideSteps}
          align="left"
        />
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block w-12 h-[1px] bg-muted-foreground/30" />
          <span className="text-[10px] font-mono tracking-[0.18em] sm:tracking-[0.25em] uppercase text-muted-foreground">
            ENTERPRISE REALITY IN MOTION
          </span>
        </div>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling content */}
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {[...sourceSignals, ...sourceSignals, ...sourceSignals].map((signal, i) => (
            <span
              key={`${signal}-${i}`}
              className="text-lg font-serif text-muted-foreground/40 tracking-wide"
            >
              {signal}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
