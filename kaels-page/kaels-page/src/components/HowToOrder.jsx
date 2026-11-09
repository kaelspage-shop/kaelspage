import { CheckCircle2, MessageCircle, MousePointerClick, Search, ShoppingBag } from "lucide-react";
import { steps } from "../data/steps.js";
import { SectionTitle } from "./Decor.jsx";

const icons = { search: Search, pointer: MousePointerClick, cart: ShoppingBag, chat: MessageCircle, check: CheckCircle2 };

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="polka-light bg-latte/50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="How to Order" subtitle="Five small steps from browsing to your order." />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => {
            const Icon = icons[s.icon] || Search;
            return (
              <li key={s.title} className="relative rounded-3xl border-2 border-dashed border-caramel bg-soft p-5 text-center shadow-boutique">
                <span className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-cocoa text-sm font-bold text-soft">{i + 1}</span>
                <div className="mx-auto mb-3 mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-latte text-cocoa"><Icon size={24} /></div>
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-mocha">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
