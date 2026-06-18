"use client"

import { BookOpenCheck, Eye, EyeOff, X } from "lucide-react"
import { cn } from "@/lib/utils"

type GuideStep = {
  title: string
  body: string
}

export function GuideToggle({ className }: { className?: string }) {
  return (
    <label
      htmlFor="amigdala-guide-toggle"
      className={cn(
        "amigdala-guide-toggle inline-flex h-9 cursor-pointer items-center gap-2 rounded-sm border border-border bg-background/80 px-3 text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-sm transition-colors hover:border-foreground/30 hover:text-foreground",
        className,
      )}
    >
      <span className="guide-toggle-off inline-flex items-center gap-2">
        <Eye size={14} strokeWidth={1.7} />
        <span className="hidden lg:inline">Use Amigdala</span>
        <span className="lg:hidden">Guide</span>
      </span>
      <span className="guide-toggle-on items-center gap-2">
        <EyeOff size={14} strokeWidth={1.7} />
        <span className="hidden lg:inline">Hide Guide</span>
        <span className="lg:hidden">Hide</span>
      </span>
    </label>
  )
}

export function SectionGuide({
  eyebrow = "Use Amigdala",
  title,
  steps,
  align = "right",
  className,
}: {
  eyebrow?: string
  title: string
  steps: GuideStep[]
  align?: "left" | "right"
  className?: string
}) {
  return (
    <aside
      className={cn(
        "amigdala-section-guide relative z-20 mb-8 w-full max-w-md border border-foreground/15 bg-background/95 p-5 shadow-[0_16px_40px_rgba(28,37,53,0.08)] backdrop-blur-md",
        align === "right" ? "ml-auto" : "mr-auto",
        className,
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary/70">
            <BookOpenCheck size={15} strokeWidth={1.7} className="text-foreground" />
          </div>
          <div>
            <span className="block text-[9px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </span>
            <h3 className="mt-1 font-serif text-lg font-light leading-tight text-foreground">
              {title}
            </h3>
          </div>
        </div>
        <label
          htmlFor="amigdala-guide-toggle"
          aria-label="Hide guide"
          role="button"
          className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          <X size={14} strokeWidth={1.7} />
        </label>
      </div>

      <ol className="grid gap-3">
        {steps.map((step, index) => (
          <li key={step.title} className="grid grid-cols-[auto,1fr] gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-foreground text-[10px] font-mono text-primary-foreground">
              {index + 1}
            </span>
            <div>
              <h4 className="text-[12px] font-medium text-foreground">{step.title}</h4>
              <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  )
}
