import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { Logo, WhatsAppButton, section } from "./ui";

const LINKS = [
  { href: "#plans", label: "Plans" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="relative z-40 border-b border-white/10 bg-[#0A0D14] py-2 text-center text-xs text-[var(--muted)] sm:text-sm">
        <span className="inline-flex items-center gap-2 px-3">
          <span className="dot-live shrink-0" aria-hidden="true" />
          AI tools made simple • Monthly plans • WhatsApp support
        </span>
      </div>
      <header className={clsx("sticky top-0 z-40 transition-colors duration-200", scrolled ? "border-b border-white/10 bg-[#05060A]/70 backdrop-blur-xl" : "bg-transparent")}>
        <nav className={clsx(section, "flex h-16 items-center justify-between")} aria-label="Main">
          <a href="#top" aria-label="AI Access Hub home">
            <Logo />
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-[var(--muted)] transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <WhatsAppButton className="btn btn-primary !py-2.5 !text-sm">WhatsApp Us</WhatsAppButton>
          </div>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>
      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" className="fixed inset-0 z-50 flex flex-col bg-[#05060A] px-5 py-4 md:hidden">
          <div className="flex h-12 items-center justify-between">
            <Logo />
            <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10" aria-label="Close menu" onClick={() => setOpen(false)} autoFocus>
              <X size={22} />
            </button>
          </div>
          <ul className="mt-10 flex flex-col gap-6">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl font-bold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pb-6">
            <WhatsAppButton className="btn btn-primary w-full">WhatsApp Us</WhatsAppButton>
          </div>
        </div>
      )}
    </>
  );
}
