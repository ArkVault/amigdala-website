"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const contrast = [
  {
    label: "Personal second brain",
    examples: "Obsidian · Notion · Roam",
    desc: "Fragile context management for the hobbyist AI enthusiast — one person's notes. A flat, passive wiki that waits to be read and breaks with ingest approaches.",
    muted: true,
  },
  {
    label: "Amigdala",
    examples: "Robust · Hybrid · Evolving",
    desc: "A robust, hybrid, evolving knowledge engine: your whole company's knowledge and operating context, kept alive and elevated to an enterprise-grade memory layer every agent and executive can act on.",
    muted: false,
  },
]

export function CategoryStatement() {
  return (
    <section
      id="category"
      className="relative w-full px-8 sm:px-12 lg:px-24 py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
          {/* Left column - the punch line */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-muted-foreground/30" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground">
                NOT A SECOND BRAIN
              </span>
            </div>

            <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground leading-[1.1] mb-6">
              We are not a personal
              <br />
              second brain.
            </h2>

            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md">
              An Obsidian or Notion vault is a personal wiki — one mind taking
              notes. Amigdala takes your <span className="text-foreground">company&apos;s</span>{" "}
              knowledge and context and elevates it to an{" "}
              <span className="text-foreground">enterprise degree</span>: a living
              memory layer with confidence, citation, human review, and audit trails.
            </p>
          </motion.div>

          {/* Right column - contrast pair */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="grid grid-cols-1 gap-px bg-border">
              {contrast.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease }}
                  className={`p-7 flex flex-col gap-3 ${
                    item.muted
                      ? "bg-background"
                      : "bg-secondary/60 border-l-2 border-emerald-500/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.muted
                          ? "bg-muted-foreground/30"
                          : "bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.7)]"
                      }`}
                    />
                    <span
                      className={`text-[9px] font-mono tracking-[0.2em] uppercase ${
                        item.muted ? "text-muted-foreground/50" : "text-emerald-500/80"
                      }`}
                    >
                      {item.examples}
                    </span>
                  </div>
                  <h3
                    className={`font-serif text-xl lg:text-2xl font-light ${
                      item.muted ? "text-muted-foreground/70" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </h3>
                  <p
                    className={`text-[13px] leading-relaxed ${
                      item.muted ? "text-muted-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
