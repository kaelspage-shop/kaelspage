import { HeartHandshake, MousePointerClick, Tag, Zap } from "lucide-react";
import { benefits } from "../data/benefits.js";
import { Sparkle } from "./Decor.jsx";

const icons = { tag: Tag, zap: Zap, heart: HeartHandshake, click: MousePointerClick };

export default function Benefits() {
  return (
    <section className="bg-soft py-14">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => {
          const Icon = icons[b.icon] || Tag;
          return (
            <article key={b.title} className={`relative rounded-3xl border-2 border-latte bg-cream p-6 text-center shadow-boutique ${i % 2 ? "lg:translate-y-3" : ""}`}>
              <Sparkle size={12} className="absolute right-4 top-4 text-caramel" />
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-caramel bg-latte text-cocoa">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-mocha">{b.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
