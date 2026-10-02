import { MessagesSquare, BadgeIndianRupee, MessageCircle, ListChecks } from "lucide-react";
import { Reveal, SectionHeader, WhatsAppButton, WhatsAppIcon, section } from "./ui";

const EXPECT = [
  { icon: MessagesSquare, title: "Clear communication" },
  { icon: BadgeIndianRupee, title: "Straightforward pricing" },
  { icon: MessageCircle, title: "Direct WhatsApp support" },
  { icon: ListChecks, title: "Simple ordering" },
];

export default function WhatsAppCTA() {
  return (
    <>
      <section className="py-12 md:py-16" aria-labelledby="cta-title">
        <div className={section}>
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#6D5DFB] via-[#3B82F6] to-[#22D3EE] px-6 py-14 text-center md:px-12 md:py-20">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_50%)]" aria-hidden="true" />
              <h2 id="cta-title" className="section-title relative text-white">
                Ready to get started?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/90">Have a question about the plan? Talk to us directly on WhatsApp.</p>
              <WhatsAppButton className="btn btn-light relative mt-8 !px-8 !py-4 !text-lg">
                <WhatsAppIcon size={22} /> Chat on WhatsApp →
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="expect-title">
        <div className={section}>
          <SectionHeader id="expect-title" eyebrow="Our promise" title="What customers can expect" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {EXPECT.map(({ icon: Icon, title }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="glass flex h-full flex-col items-start gap-3 p-5 md:p-6">
                  <Icon size={26} className="text-[var(--cyan)]" />
                  <h3 className="text-lg">{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
