"use client"

import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

interface Tier {
  id: string
  name: string
  price: string
  period: string
  tag: string | null
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

const TIERS: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "0",
    period: "/ forever",
    tag: null,
    description: "For individuals exploring knowledge management.",
    features: [
      "10K requests / month",
      "Community models",
      "Single workspace",
      "Email support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Professional",
    price: "149",
    period: "/ month",
    tag: "Popular",
    description: "For teams building production applications.",
    features: [
      "Unlimited requests",
      "All foundation models",
      "Unlimited workspaces",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
    ],
    cta: "Start Building",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    tag: null,
    description: "For organizations with advanced requirements.",
    features: [
      "Everything in Pro",
      "Dedicated infrastructure",
      "Custom SLA",
      "On-premise deployment",
      "24/7 dedicated support",
      "Security audit reports",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

function PricingCard({ tier, index }: { tier: Tier; index: number }) {
  const isCustom = tier.price === "Custom"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease }}
      className={`flex flex-col h-full p-8 ${
        tier.highlighted
          ? "bg-foreground text-primary-foreground"
          : "bg-background border border-border"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className={`text-[11px] font-mono tracking-[0.15em] uppercase ${
          tier.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          {tier.name}
        </span>
        {tier.tag && (
          <span className="bg-primary-foreground text-foreground text-[9px] font-mono tracking-[0.1em] uppercase px-2 py-1 rounded-sm">
            {tier.tag}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {isCustom ? (
            <span className="font-serif text-3xl lg:text-4xl font-light">Custom</span>
          ) : (
            <>
              <span className="font-serif text-3xl lg:text-4xl font-light">${tier.price}</span>
              <span className={`text-sm ${tier.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {tier.period}
              </span>
            </>
          )}
        </div>
        <p className={`text-sm mt-3 ${tier.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {tier.description}
        </p>
      </div>

      {/* Features */}
      <div className="flex-1 mb-8">
        <div className="flex flex-col gap-3">
          {tier.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Check
                size={14}
                strokeWidth={2}
                className={`mt-0.5 shrink-0 ${tier.highlighted ? "text-primary-foreground/70" : "text-foreground"}`}
              />
              <span className={`text-[13px] ${tier.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full flex items-center justify-center gap-2 py-3 text-[11px] font-mono tracking-[0.12em] uppercase rounded-sm transition-colors ${
          tier.highlighted
            ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            : "bg-foreground text-primary-foreground hover:bg-foreground/90"
        }`}
      >
        <span>{tier.cta}</span>
        <ArrowRight size={14} strokeWidth={2} />
      </motion.button>
    </motion.div>
  )
}

export function PricingSection() {
  return (
    <section className="relative w-full px-12 lg:px-24 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
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
              PRICING
            </span>
            <div className="w-12 h-[1px] bg-muted-foreground/30" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Start free, scale as you grow. All plans include access to our core knowledge engine.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {TIERS.map((tier, i) => (
            <PricingCard key={tier.id} tier={tier} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <span className="text-[11px] text-muted-foreground">
            All plans billed annually. Cancel anytime.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
