export const BUSINESS = {
  name: "AI Access Hub",
  domain: "https://aiaccesshub.online",
  // Replace this number (country code + number, digits only) to change every WhatsApp link.
  whatsappNumber: "919078958506",
  whatsappMessage:
    "Hi AI Access Hub, I’m interested in the ₹450/month AI plan. Please share the details.",
} as const;

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
  BUSINESS.whatsappMessage,
)}`;
