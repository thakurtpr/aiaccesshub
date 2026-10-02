import { GraduationCap, Terminal, Clapperboard, Briefcase } from "lucide-react";
import { Reveal, SectionHeader, section } from "./ui";

const AUDIENCE = [
  { icon: GraduationCap, title: "Students", text: "Study, research, summarize and learn faster." },
  { icon: Terminal, title: "Developers", text: "Debug, explain and explore code with AI." },
  { icon: Clapperboard, title: "Creators", text: "Generate ideas, write content and plan campaigns." },
  { icon: Briefcase, title: "Professionals", text: "Write, analyze, organize and automate everyday work." },
];

export default function Audience() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="audience-title">
      <div className={section}>
        <SectionHeader id="audience-title" eyebrow="Who it's for" title="Made for people who use AI daily." />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {AUDIENCE.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article className="glass relative h-full overflow-hidden p-5 md:p-6">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#6D5DFB]/20 blur-2xl" aria-hidden="true" />
                <Icon size={28} className="relative text-[var(--cyan)]" />
                <h3 className="relative mt-4 text-lg md:text-xl">{title}</h3>
                <p className="relative mt-2 text-sm text-[var(--muted)] md:text-base">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
