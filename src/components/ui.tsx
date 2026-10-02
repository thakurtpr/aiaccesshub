import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { WHATSAPP_URL } from "../config/business";

export const section = "mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-12";

export function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" />
      <path d="M9.5 8.5c0 3 2 5.500 5 6l1-1.500-1.800-0.900-0.700 0.600c-0.800-0.400-1.500-1.100-1.900-1.900l0.600-0.700-0.900-1.800-1.300 0.200z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppButton({ children, className = "btn btn-primary" }: { children: ReactNode; className?: string }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ id, eyebrow, title, subtitle }: { id?: string; eyebrow?: string; title: ReactNode; subtitle?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan)]">{eyebrow}</p>}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-[var(--muted)]">{subtitle}</p>}
    </Reveal>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#6D5DFB] to-[#22D3EE]" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="2.6" fill="#fff" />
          <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
        </svg>
      </span>
      AI Access Hub
    </span>
  );
}
