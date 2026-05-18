"use client"

import { motion } from "framer-motion"
import { DatabaseZap, Eye, Orbit } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const solutionSteps = [
  {
    icon: DatabaseZap,
    label: "01 · Digest",
    title: "Continuously understands enterprise reality",
    description: "Slack, Teams, tickets, CRM, ERP, brand voice, and operating artifacts become reliable context agents can call with one command.",
  },
  {
    icon: Eye,
    label: "02 · Save",
    title: "Stops context from being reloaded",
    description: "Persistent context lives where decisions happen, reducing repeated token spend and preventing every AI session from forgetting the company.",
  },
  {
    icon: Orbit,
    label: "03 · Render",
    title: "Turns decisions into a Galaxy",
    description: "Executives see decision pathways instead of static dashboards, with confidence, citation, escalation, and auditability attached.",
  },
]

export function AboutSection() {
  return (
    <section id="solution" className="relative w-full px-8 sm:px-12 lg:px-24 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-muted-foreground/30" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground">
                PROPOSED SOLUTION
              </span>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl font-light text-foreground mb-6">
              The observe-act layer between AI agents and how your company runs.
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Amigdala does not replace your systems or become another dashboard.
              It watches the operating reality already moving through the business,
              remembers what matters, and returns action-ready guidance when agents
              or executives need to decide.
            </p>

            <div className="flex flex-col gap-4 p-6 bg-secondary/50 border border-border rounded-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  Self-evolving · Context-aware · Audit-ready
                </span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                The data lives where the decisions happen.
              </div>
            </div>
          </motion.div>

          {/* Right column - Solution steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-px bg-border">
              {solutionSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease }}
                  className="bg-background p-7 flex flex-col sm:flex-row gap-5"
                >
                  <div className="w-11 h-11 flex items-center justify-center border border-border rounded-sm shrink-0">
                    <step.icon size={18} strokeWidth={1.5} className="text-foreground" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                      {step.label}
                    </span>
                    <h3 className="font-serif text-xl font-light text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
