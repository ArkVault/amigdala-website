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
    title: "Connect agents where they already work",
    body: "Codex, Claude Code, internal agents, and other systems call Amigdala when a real decision fork appears.",
  },
  {
    title: "Return grounded guidance",
    body: "Each call can return decision-ready context with citations, confidence, escalation signals, and audit detail.",
  },
  {
    title: "Let systems act with context",
    body: "The agent gets the company-specific reasoning it needs without re-ingesting or re-prompting the organization on every run.",
  },
]

export function GlitchMarquee() {
  return (
    <section className="w-full py-16 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 mb-8">
        <SectionGuide
          title="Make context available to every agent"
          steps={signalsGuideSteps}
          step={5}
          totalSteps={6}
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
