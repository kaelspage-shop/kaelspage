import { useEffect, useState } from "react";
import { Check, ShoppingBag, X } from "lucide-react";
import { statusInfo } from "../data/categories.js";
import { formatRupiah, getOptions } from "../utils/helpers.js";

export default function ProductDetailModal({ product, onClose, onAdd }) {
  const options = getOptions(product);
  const [picked, setPicked] = useState(0);
  const status = statusInfo[product.status] || statusInfo.available;
  const soldOut = product.status === "soldout";
  const option = options[picked];
  const groups = [];
  options.forEach((o, i) => {
    let g = groups.find((x) => x.name === (o.group || ""));
    if (!g) { g = { name: o.group || "", items: [] }; groups.push(g); }
    g.items.push({ o, i });
  });

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  const List = ({ title, items }) =>
    items?.length ? (
      <div className="mt-5">
        <h4 className="text-lg font-bold">{title}</h4>
        <ul className="mt-2 space-y-1.5 text-sm text-mocha">
          {items.map((t) => <li key={t} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-caramel" />{t}</li>)}
        </ul>
      </div>
    ) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-cocoa/60 animate-fade sm:items-center sm:p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={product.name} onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-3xl animate-pop overflow-y-auto rounded-t-3xl border-2 border-cocoa bg-soft shadow-lift sm:rounded-3xl">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-soft/90 ring-2 ring-cocoa transition hover:bg-latte">
          <X size={20} />
        </button>
        <div className="grid sm:grid-cols-2">
          <img src={product.image} alt={product.name} onError={(e) => { e.currentTarget.src = "/images/placeholder.svg"; }} className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-full sm:rounded-l-3xl" />
          <div className="p-6">
            <p className="text-xs font-medium text-caramel">{product.category}</p>
            <h3 className="mt-1 pr-10 text-2xl font-bold leading-snug sm:pr-0">{product.name}</h3>
            <span className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${status.className}`}>{status.label}</span>
            <p className="mt-4 text-sm leading-relaxed text-mocha">{product.description}</p>

            <fieldset className="mt-5">
              <legend className="mb-2 text-sm font-bold">Account type and duration</legend>
              <div className="max-h-64 space-y-3 overflow-y-auto pr-1">
                {groups.map((g) => (
                  <div key={g.name}>
                    {g.name && <p className="mb-1.5 text-xs font-bold text-caramel">{g.name}</p>}
                    <div className="flex flex-wrap gap-2">
                      {g.items.map(({ o, i }) => (
                        <button key={i} onClick={() => setPicked(i)} aria-pressed={picked === i}
                          className={`min-h-[44px] rounded-2xl border-2 px-3 text-left text-sm transition ${picked === i ? "border-cocoa bg-latte" : "border-caramel/50 hover:border-cocoa"}`}>
                          <span className="block font-bold">{o.short}</span>
                          <span className="text-xs text-mocha">{formatRupiah(o.price)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>

            <p className="mt-5 font-serif text-3xl font-bold">{formatRupiah(option.price)}</p>
            <p className="text-xs text-mocha">{option.duration}</p>
            <button disabled={soldOut} onClick={() => { onAdd(product, option); onClose(); }} className="btn btn-primary mt-3 w-full">
              <ShoppingBag size={18} />{soldOut ? "Sold out" : "Add to Cart"}
            </button>
          </div>
        </div>
        <div className="border-t-2 border-dashed border-latte px-6 pb-6">
          <List title="Specifications" items={product.specifications} />
          <List title="Terms and conditions" items={product.terms} />
        </div>
      </div>
    </div>
  );
}
