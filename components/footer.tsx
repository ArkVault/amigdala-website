"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const footerLinks = {
  product: ["Platform", "Features", "Integrations", "Pricing"],
  company: ["About", "Blog", "Careers", "Press"],
  resources: ["Documentation", "API Reference", "Status", "Support"],
  legal: ["Privacy", "Terms", "Security"],
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease }}
      className="w-full border-t border-border px-12 lg:px-24 py-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <span className="font-serif text-xl italic tracking-wide text-foreground">
              Amigdala
            </span>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
              The knowledge engine for enterprise. 
              Precision reasoning meets fluid intelligence.
            </p>
          </div>

          {/* Product */}
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Product
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Company
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Resources
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Legal
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border">
          <span className="text-[11px] text-muted-foreground">
            {"\u00A9"} 2026 Amigdala. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[11px] text-muted-foreground hover:text-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
