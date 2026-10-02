import { Reveal, WhatsAppButton, WhatsAppIcon, section } from "./ui";
import { BUSINESS, WHATSAPP_URL } from "../config/business";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#plans", label: "Plans" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" aria-labelledby="final-title">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 50% 100%, rgba(109,93,251,0.25), transparent 60%)" }} aria-hidden="true" />
      <Reveal className={`${section} relative text-center`}>
        <h2 id="final-title" className="section-title mx-auto max-w-3xl">Your next AI workflow starts here.</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">Explore the current plans or talk to us on WhatsApp.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton>
            <WhatsAppIcon size={20} /> WhatsApp Us
          </WhatsAppButton>
          <a href="#plans" className="btn btn-ghost">View Plans</a>
        </div>
      </Reveal>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0D14] pb-24 pt-14 md:pb-14">
      <div className={section}>
        <p className="font-display text-[clamp(40px,10vw,120px)] font-extrabold leading-none tracking-tight text-white/90">AI ACCESS HUB</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <nav aria-label="Footer">
            <ul className="space-y-2">
              {LINKS.map((l) => (
                <li key={l.href}><a href={l.href} className="text-[var(--muted)] hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-2 font-semibold">Contact</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-white">WhatsApp</a>
            <p className="mt-2 text-[var(--muted)]">{BUSINESS.domain.replace("https://", "")}</p>
          </div>
          <p className="text-sm text-[var(--muted)]">AI Access Hub is an independent digital services brand. Product names and trademarks belong to their respective owners.</p>
        </div>
        <p className="mt-10 text-sm text-[var(--muted)]">© 2026 AI Access Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
