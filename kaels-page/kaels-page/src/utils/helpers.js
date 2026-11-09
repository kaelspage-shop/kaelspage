import { store, whatsappGreeting } from "../config/store.js";

export const formatRupiah = (n) => "Rp" + Number(n || 0).toLocaleString("id-ID");

// Every product has a list of {duration, price} options. Single-price products get one option.
// `duration` becomes the full label ("Private — 1 bulan"); `short` keeps the plain duration.
export const getOptions = (p) => {
  const raw = Array.isArray(p.options) && p.options.length ? p.options : [{ duration: p.duration || "—", price: Number(p.price) || 0 }];
  return raw.map((o) => ({ ...o, price: Number(o.price) || 0, short: o.duration, duration: o.group ? `${o.group} — ${o.duration}` : o.duration }));
};

export const lowestPrice = (p) => Math.min(...getOptions(p).map((o) => o.price));

export function buildWhatsAppUrl(lines, total) {
  const rows = lines.map((l, i) => `${i + 1}. ${l.product.name} — ${l.duration} — ${l.qty} × ${formatRupiah(l.price)}`);
  const text = [whatsappGreeting, "", "I would like to place an order:", "", ...rows, "", `Total: ${formatRupiah(total)}`, "", "Thank you!"].join("\n");
  const phone = String(store.whatsappNumber).replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
