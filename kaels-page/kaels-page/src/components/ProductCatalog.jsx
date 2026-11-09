import { useState } from "react";
import { categories } from "../data/categories.js";
import { products } from "../data/products.js";
import { Fawn, SectionTitle } from "./Decor.jsx";
import ProductCard from "./ProductCard.jsx";

export default function ProductCatalog({ onView, onAdd }) {
  const [active, setActive] = useState(categories[0]);
  const shown = active === categories[0] ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Our Products" subtitle="Pick a shelf and take a look around." />

        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Product categories">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
              className={`min-h-[44px] rounded-full border-2 px-5 text-sm font-bold transition active:scale-95 ${active === c ? "border-cocoa bg-cocoa text-soft" : "border-caramel/60 bg-soft hover:border-cocoa"}`}>
              {c}
            </button>
          ))}
        </div>

        {shown.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => <ProductCard key={p.id} product={p} onView={onView} onAdd={onAdd} />)}
          </div>
        ) : (
          <div className="mx-auto max-w-sm rounded-3xl border-2 border-dashed border-caramel bg-soft p-8 text-center">
            <Fawn className="mx-auto w-28" />
            <p className="mt-3 font-serif text-xl font-bold">Nothing on this shelf yet</p>
            <p className="mt-1 text-sm text-mocha">Try another category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
