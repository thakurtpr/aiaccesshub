import { MessageCircle, PenLine, Code2, Search, Palette, Zap } from "lucide-react";
import { Reveal, SectionHeader, section } from "./ui";

const FEATURES = [
  { icon: MessageCircle, title: "AI Chat", text: "Get help with questions, ideas and everyday tasks." },
  { icon: PenLine, title: "Writing", text: "Draft, rewrite, summarize and improve your content." },
  { icon: Code2, title: "Coding", text: "Understand code, debug problems and explore solutions." },
  { icon: Search, title: "Research", text: "Organize information and explore complex topics." },
  { icon: Palette, title: "Creativity", text: "Brainstorm concepts, content and creative ideas." },
  { icon: Zap, title: "Productivity", text: "Turn repetitive work into faster workflows." },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="features-title">
      <div className={section}>
        <SectionHeader id="features-title" eyebrow="Features" title="Built for the way you work." subtitle="Use AI to move faster across work, study and creative tasks." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article className="glass h-full p-6 transition-colors hover:bg-white/[0.07]">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#6D5DFB]/30 to-[#22D3EE]/20 text-[var(--cyan)]">
                  <Icon size={22} />
                </span>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-[var(--muted)]">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
