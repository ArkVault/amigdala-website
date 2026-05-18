"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const metrics = [
  { label: "Throughput", value: "12.4 TB/s", percentage: 88, desc: "Peak operational capacity" },
  { label: "Global Latency", value: "4.2 ms", percentage: 94, desc: "Edge-to-edge travel time" },
  { label: "Reasoning Precision", value: "99.98%", percentage: 99, desc: "Inference accuracy score" },
  { label: "Network Stability", value: "99.99%", percentage: 92, desc: "SLA guaranteed uptime" },
]

function MetricBar({ percentage, delay }: { percentage: number; delay: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), delay * 1000)
    return () => clearTimeout(timer)
  }, [percentage, delay])

  return (
    <div className="metric-bar rounded-full">
      <div 
        className="metric-bar-fill rounded-full transition-all duration-1500 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export function AboutSection() {
  return (
    <section className="relative w-full px-12 lg:px-24 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12">
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
                TELEMETRY
              </span>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl font-light text-foreground mb-6">
              Performance Standards
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Live telemetry benchmarks from our global node cluster. 
              Monitoring throughput and inference fidelity in real-time across 
              every edge deployment.
            </p>

            <div className="flex flex-col gap-4 p-6 bg-secondary/50 border border-border rounded-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  All Systems Operational
                </span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                Last updated: Real-time monitoring active
              </div>
            </div>
          </motion.div>

          {/* Right column - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                      {metric.label}
                    </span>
                    <span className="font-serif text-2xl font-light text-foreground">
                      {metric.value}
                    </span>
                  </div>
                  <MetricBar percentage={metric.percentage} delay={0.5 + i * 0.15} />
                  <span className="text-[10px] text-muted-foreground/60 text-right">
                    {metric.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
