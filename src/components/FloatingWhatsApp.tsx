import { WHATSAPP_URL } from "../config/business";
import { WhatsAppIcon } from "./ui";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid h-[58px] w-[58px] place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 active:scale-95 md:h-16 md:w-16"
    >
      <WhatsAppIcon size={30} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#0A0D14] px-3 py-1.5 text-sm opacity-0 ring-1 ring-white/10 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        Chat with us
      </span>
    </a>
  );
}
