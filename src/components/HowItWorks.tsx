import { Reveal, SectionHeader, section } from "./ui";

const STEPS = [
  { n: "01", title: "Choose your plan", text: "Select the AI service you want." },
  { n: "02", title: "Contact us", text: "Click the WhatsApp button and send your requirement." },
  { n: "03", title: "Get started", text: "We'll explain the applicable activation/access process." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24" aria-labelledby="how-title">
      <div className={section}>
        <SectionHeader id="how-title" eyebrow="How it works" title="Three simple steps." />
        <ol className="relative grid gap-4 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-transparent via-[#6D5DFB]/60 to-transparent md:block" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <li className="glass relative h-full p-6">
                <span className="font-display text-5xl font-extrabold text-gradient">{s.n}</span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-2 text-[var(--muted)]">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
