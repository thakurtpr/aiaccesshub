import { Check } from "lucide-react";
import { Reveal, SectionHeader, WhatsAppButton, section } from "./ui";

const INCLUDED = ["Monthly access", "AI tools for work & study", "WhatsApp support", "Clear pricing", "Easy ordering process"];

export default function Pricing() {
  return (
    <section id="plans" className="relative py-16 md:py-24" aria-labelledby="pricing-title">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(109,93,251,0.14), transparent 55%)" }} aria-hidden="true" />
      <div className={`${section} relative`}>
        <SectionHeader id="pricing-title" eyebrow="Plans" title="Simple pricing." />
        <Reveal className="mx-auto max-w-lg">
          <div className="glass gradient-border p-7 md:p-9">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl">AI Pro Monthly</h3>
              <span className="rounded-full bg-gradient-to-r from-[#6D5DFB] to-[#22D3EE] px-3 py-1 text-xs font-bold uppercase text-white">Limited offer</span>
            </div>
            <p className="mt-1 text-sm text-[var(--muted)]">Google AI Pro, offered through AI Access Hub</p>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-3">
              <span className="font-display text-7xl font-extrabold leading-none tracking-tight">₹450</span>
              <span className="text-lg text-[var(--muted)]">per month</span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Reference: <span className="line-through">₹2,000/month</span> → Offer: ₹450/month
            </p>
            <ul className="mt-6 space-y-3">
              {INCLUDED.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#22D3EE]/15 text-[var(--cyan)]">
                    <Check size={14} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <WhatsAppButton className="btn btn-primary mt-8 w-full">Get Started on WhatsApp</WhatsAppButton>
            <p className="mt-3 text-center text-xs text-[var(--muted)]">Availability and applicable service terms apply.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
