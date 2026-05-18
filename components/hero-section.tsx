"use client"

import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center px-12 lg:px-24 pt-32 pb-20">
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
              AERLIG INTELLIGENCE
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-foreground leading-[1.1] mb-8"
          >
            The Knowledge Engine
            <br />
            <span className="italic">for Enterprise</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="text-sm lg:text-base text-muted-foreground max-w-md mb-10 leading-relaxed"
          >
            Open your organization&apos;s knowledge engine and manage source context. 
            Precision reasoning meets fluid intelligence for the modern enterprise stack.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-foreground text-primary-foreground px-6 py-3 text-[11px] font-mono tracking-[0.12em] uppercase rounded-sm"
            >
              <span>Get Started</span>
              <ArrowRight size={14} strokeWidth={2} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-3 text-[11px] font-mono tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 border border-border rounded-full">
                <Play size={12} strokeWidth={2} className="ml-0.5" />
              </span>
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right side - Stats/Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="col-span-12 lg:col-span-5 flex flex-col justify-center lg:pl-12"
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Response Time", value: "4.2ms", desc: "Average latency" },
              { label: "Accuracy", value: "99.98%", desc: "Reasoning precision" },
              { label: "Uptime", value: "99.99%", desc: "SLA guaranteed" },
              { label: "Enterprise", value: "500+", desc: "Active deployments" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease }}
                className="flex flex-col gap-2"
              >
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/60">
                  {stat.label}
                </span>
                <span className="font-serif text-2xl lg:text-3xl font-light text-foreground">
                  {stat.value}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {stat.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
