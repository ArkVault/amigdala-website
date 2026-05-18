"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  return (
    <section id="problem" className="relative w-full min-h-screen flex items-center px-8 sm:px-12 lg:px-24 pt-32 pb-20">
      <div className="relative z-10 grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
        {/* Left content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-muted-foreground/30" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground">
              SELF-EVOLVING ENTERPRISE KNOWLEDGE
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-foreground leading-[1.1] mb-8"
          >
            The self-evolving enterprise knowledge engine
            <br />
            <span className="italic">for executives.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="text-sm lg:text-base text-muted-foreground max-w-md mb-10 leading-relaxed"
          >
            Amigdala continuously digests how your company runs, keeps that context alive,
            and gives every AI agent decision-ready knowledge with confidence, citation,
            human review, and audit trails.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="/app"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-foreground text-primary-foreground px-6 py-3 text-[11px] font-mono tracking-[0.12em] uppercase rounded-sm"
            >
              <span>Request Pilot</span>
              <ArrowRight size={14} strokeWidth={2} />
            </motion.a>
          </motion.div>
        </div>

        {/* Right side - Problem brief */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="col-span-12 lg:col-span-5 flex flex-col justify-center lg:pl-12"
        >
          <div className="border border-border bg-background/80 backdrop-blur-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                Observed failure mode
              </span>
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-foreground mb-8">
              Companies pay to reload context every session.
            </h2>
            <div className="grid grid-cols-1 gap-px bg-border">
            {[
              { label: "Symptom", desc: "Every Claude Code, ChatGPT, Copilot, and internal agent session starts by rebuilding the same company context." },
              { label: "Root cause", desc: "The organization has no persistent, actionable memory layer that agents can call when a decision fork appears." },
              { label: "Consequence", desc: "Budgets leak, pilots stall, and executives still make decisions on tribal knowledge instead of grounded enterprise reality." },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease }}
                className="bg-background p-5 flex flex-col gap-3"
              >
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/60">
                  0{i + 1} · {stat.label}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {stat.desc}
                </span>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
