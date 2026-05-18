"use client"

import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-12 py-8"
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="font-serif text-2xl italic tracking-wide text-foreground">
            Aerlig
          </span>
        </motion.div>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-12">
          {["Platform", "Solutions", "Resources", "Company"].map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Right side: Login + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center gap-6"
        >
          <a
            href="#"
            className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Login
          </a>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-primary-foreground px-6 py-2.5 text-[11px] font-mono tracking-[0.12em] uppercase rounded-sm"
          >
            Get Access
          </motion.button>
        </motion.div>
      </nav>
    </motion.header>
  )
}
