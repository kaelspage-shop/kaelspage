import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "../data/faq.js";
import { SectionTitle } from "./Decor.jsx";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-cream py-16">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border-2 border-latte bg-soft shadow-boutique">
                <h3>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-3 text-left font-serif text-lg font-bold">
                    {f.q}
                    <ChevronDown size={20} className={`shrink-0 text-caramel transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                {isOpen && <p id={`faq-${i}`} className="animate-fade px-5 pb-5 text-sm leading-relaxed text-mocha">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
