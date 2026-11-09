import { Clock, Instagram, MessageCircle, AtSign } from "lucide-react";
import { store } from "../config/store.js";
import { Fawn, SectionTitle } from "./Decor.jsx";

export default function Contact() {
  const phone = String(store.whatsappNumber).replace(/\D/g, "");
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(`Hello ${store.name}!`)}`;
  const card = "rounded-3xl border-2 border-latte bg-soft p-6 shadow-boutique";
  return (
    <section id="contact" className="bg-soft py-16">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle title="Say Hello" subtitle={store.supportMessage} />
        <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-5">
            <a href={wa} target="_blank" rel="noopener noreferrer" className={`${card} block transition hover:-translate-y-1 hover:shadow-lift`}>
              <MessageCircle className="text-caramel" />
              <h3 className="mt-2 text-lg font-bold">WhatsApp</h3>
              <p className="text-sm text-mocha">+{phone}</p>
            </a>
            {store.instagram && (<a href={`https://instagram.com/${store.instagram}`} target="_blank" rel="noopener noreferrer" className={`${card} block transition hover:-translate-y-1 hover:shadow-lift`}>
              <Instagram className="text-caramel" />
              <h3 className="mt-2 text-lg font-bold">Instagram</h3>
              <p className="text-sm text-mocha">@{store.instagram}</p>
            </a>)}
            {store.x && (<a href={`https://x.com/${store.x}`} target="_blank" rel="noopener noreferrer" className={`${card} block transition hover:-translate-y-1 hover:shadow-lift`}>
              <AtSign className="text-caramel" />
              <h3 className="mt-2 text-lg font-bold">X</h3>
              <p className="text-sm text-mocha">@{store.x}</p>
            </a>)}
          </div>
          <Fawn className="mx-auto hidden w-40 md:block" />
          <div className={card}>
            <Clock className="text-caramel" />
            <h3 className="mt-2 text-lg font-bold">Operating hours</h3>
            <ul className="mt-2 space-y-1 text-sm text-mocha">
              {store.hours.map((h) => <li key={h.day} className="flex justify-between gap-3"><span>{h.day}</span><span className="font-bold text-cocoa">{h.time}</span></li>)}
            </ul>
            <p className="mt-2 text-xs text-mocha">{store.timezoneNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
