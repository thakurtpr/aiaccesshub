import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { SectionHeader, section } from "./ui";

const FAQS = [
  { q: "What is AI Access Hub?", a: "AI Access Hub is a digital services brand that helps customers access and use AI tools through simple plans and WhatsApp support." },
  { q: "What does the ₹450 plan include?", a: "See the current plan details provided by AI Access Hub. Availability and included features depend on the specific service." },
  { q: "Is AI Access Hub Google?", a: "No. AI Access Hub is an independent digital services brand and is not Google unless explicitly stated otherwise." },
  { q: "How do I order?", a: "Click the WhatsApp button, tell us which plan you want, and we'll provide the current details and next steps." },
  { q: "Can I cancel?", a: "Cancellation and refund terms depend on the specific plan. Contact us before purchase if you need clarification." },
  { q: "How quickly will I receive access?", a: "Timing depends on the service and current availability. We'll confirm the process before completing your order." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 md:py-24" aria-labelledby="faq-title">
      <div className={`${section} max-w-3xl`}>
        <SectionHeader id="faq-title" eyebrow="FAQ" title="Questions, answered." />
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass !rounded-2xl">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-semibold"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {f.q}
                    <ChevronDown size={20} className={clsx("shrink-0 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-5 pb-5 text-[var(--muted)]">
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
