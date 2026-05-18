"use client"

import { motion } from "framer-motion"

export function Navbar() {
  const links = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#benefits" },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-5 py-4 md:px-12 md:py-8 max-md:bg-background/55 max-md:supports-[backdrop-filter]:bg-background/40 max-md:backdrop-blur-xl max-md:backdrop-saturate-150 max-md:border-b max-md:border-border/40"
    >
      <nav className="flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="font-kinghood text-2xl sm:text-3xl tracking-wide text-foreground">
            Amigdala
          </span>
        </motion.div>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Right side: Login + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center gap-3 sm:gap-6"
        >
          <a
            href="/app"
            className="hidden sm:inline text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Partner Login
          </a>
          <motion.a
            href="/app"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-primary-foreground px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-mono tracking-[0.12em] uppercase rounded-sm whitespace-nowrap"
          >
            Request Pilot
          </motion.a>
        </motion.div>
      </nav>
    </motion.header>
  )
}
