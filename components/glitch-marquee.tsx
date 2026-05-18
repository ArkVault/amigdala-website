"use client"

import { motion } from "framer-motion"

const partners = [
  "Anthropic",
  "OpenAI",
  "Google Cloud",
  "AWS",
  "Microsoft Azure",
  "Snowflake",
  "Databricks",
  "Stripe",
]

export function GlitchMarquee() {
  return (
    <section className="w-full py-16 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 lg:px-24 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-muted-foreground/30" />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground">
            TRUSTED BY INDUSTRY LEADERS
          </span>
        </div>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

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
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <span
              key={`${partner}-${i}`}
              className="text-lg font-serif text-muted-foreground/40 tracking-wide"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
