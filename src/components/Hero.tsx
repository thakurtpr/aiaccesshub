import { motion, useReducedMotion } from "motion/react";
import { Bot, Code2, PenLine, BarChart3, Sparkles, ShieldCheck, MessageCircle, Tag, Smartphone } from "lucide-react";
import { WhatsAppButton, WhatsAppIcon, section } from "./ui";

const WORKSPACE = [
  { icon: MessageCircle, label: "Chat" },
  { icon: PenLine, label: "Write" },
  { icon: BarChart3, label: "Analyze" },
  { icon: Sparkles, label: "Create" },
  { icon: Code2, label: "Code" },
];

const TRUST = [
  { icon: Tag, label: "Simple monthly plans" },
  { icon: MessageCircle, label: "WhatsApp support" },
  { icon: ShieldCheck, label: "Clear pricing" },
  { icon: Smartphone, label: "Mobile friendly" },
];

function Dashboard() {
  return (
    <div className="glass gradient-border relative w-full max-w-[520px] overflow-hidden p-4 sm:p-5" role="img" aria-label="Illustration of the AI Access Hub workspace">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Bot size={18} className="text-[var(--cyan)]" /> AI Access Hub
        </div>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
      </div>
      <p className="mb-3 text-xs uppercase tracking-widest text-[var(--muted)]">AI Workspace</p>
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div className="flex flex-col gap-2">
          {WORKSPACE.map(({ icon: Icon, label }, i) => (
            <div key={label} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${i === 0 ? "bg-[#6D5DFB]/25 text-white" : "text-[var(--muted)]"}`}>
              <Icon size={16} /> {label}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 rounded-2xl bg-black/30 p-3">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#6D5DFB]/40 px-3 py-2 text-sm">Summarize my notes into a study plan</div>
          <div className="max-w-[90%] space-y-2 rounded-2xl rounded-bl-sm bg-white/5 px-3 py-3">
            <div className="h-2 w-full rounded bg-white/15" />
            <div className="h-2 w-5/6 rounded bg-white/15" />
            <div className="h-2 w-2/3 rounded bg-gradient-to-r from-[#6D5DFB] to-[#22D3EE] opacity-70" />
          </div>
          <div className="mt-1 flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-xs text-[var(--muted)]">
            Ask anything…
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br from-[#6D5DFB] to-[#22D3EE] text-white">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    ({
      initial: reduce ? false : { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay },
    }) as const;

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16" aria-labelledby="hero-title">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 50% 10%, rgba(109,93,251,0.20), transparent 50%)" }} aria-hidden="true" />
      <div className={`${section} relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]`}>
        <div>
          <motion.p {...fade(0)} className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cyan)]">
            AI tools • Simple pricing
          </motion.p>
          <motion.h1 id="hero-title" {...fade(0.05)} className="hero-title">
            Powerful <span className="text-gradient">AI.</span>
            <br />
            Without the complicated setup.
          </motion.h1>
          <motion.p {...fade(0.12)} className="mt-6 max-w-xl text-lg text-[var(--muted)] md:text-xl">
            Access powerful AI tools for work, study, coding and creativity — with simple monthly plans and WhatsApp support.
          </motion.p>
          <motion.div {...fade(0.18)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton>
              <WhatsAppIcon size={20} /> Get Started on WhatsApp
            </WhatsAppButton>
            <a href="#plans" className="btn btn-ghost">
              View Plans
            </a>
          </motion.div>
          <motion.p {...fade(0.24)} className="mt-4 text-sm text-[var(--muted)]">
            Fast response • Simple process • WhatsApp support
          </motion.p>

          <motion.div {...fade(0.3)} className="glass gradient-border mt-10 max-w-xl p-6" id="offer">
            <span className="inline-block rounded-full bg-gradient-to-r from-[#6D5DFB] to-[#22D3EE] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Limited offer</span>
            <p className="mt-3 text-sm text-[var(--muted)]">Google AI Pro — offered through AI Access Hub</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
              <span className="font-display text-6xl font-extrabold leading-none tracking-tight md:text-7xl">₹450</span>
              <span className="text-lg text-[var(--muted)]">/ month</span>
              <span className="text-base text-[var(--muted)] line-through" aria-label="Reference price ₹2,000 per month">
                ₹2,000/month
              </span>
            </div>
            <WhatsAppButton className="btn btn-primary mt-5 w-full sm:w-auto">Get Started on WhatsApp</WhatsAppButton>
            <p className="mt-3 text-xs text-[var(--muted)]">Offer provided by AI Access Hub. Product availability and terms apply.</p>
          </motion.div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="orb absolute -top-8 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full md:h-[380px] md:w-[380px]" aria-hidden="true" />
          <motion.div
            className="relative w-full max-w-[520px]"
            initial={reduce ? false : { opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Dashboard />
          </motion.div>
        </div>
      </div>

      <ul className={`${section} relative mt-14 grid grid-cols-2 gap-3 md:grid-cols-4`} aria-label="Highlights">
        {TRUST.map(({ icon: Icon, label }) => (
          <li key={label} className="glass flex items-center gap-3 !rounded-2xl px-4 py-3 text-sm">
            <Icon size={18} className="shrink-0 text-[var(--cyan)]" /> {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
