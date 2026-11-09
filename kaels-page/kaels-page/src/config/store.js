// =====================================================================
//  STORE SETTINGS — values come from src/data/settings.json,
//  which you can edit from the admin panel (/admin -> Store Settings)
//  or by hand. Only the store name is set here.
//
//  whatsappNumber: country code + number, digits only.
//  Example: 0812-3456-7890 becomes 6281234567890
//  instagram / x: username WITHOUT the @ (leave empty to hide)
// =====================================================================
import settings from "../data/settings.json";

export const store = {
  name: "Kael's Page",
  ...settings,
  // Built automatically. An empty username hides that link.
  socials: [
    settings.instagram && { label: "Instagram", url: `https://instagram.com/${settings.instagram}` },
    settings.x && { label: "X", url: `https://x.com/${settings.x}` },
    { label: "WhatsApp", url: `https://wa.me/${String(settings.whatsappNumber).replace(/\D/g, "")}` },
  ].filter(Boolean),
};

// Greeting used at the start of the WhatsApp order message
export const whatsappGreeting = `Hello ${store.name}! ♡`;
