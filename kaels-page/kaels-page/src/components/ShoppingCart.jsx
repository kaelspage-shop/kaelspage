import { useEffect } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { buildWhatsAppUrl, formatRupiah } from "../utils/helpers.js";
import { Fawn } from "./Decor.jsx";

export default function ShoppingCart({ open, onClose, cart }) {
  const { lines, setQty, remove, clear, total } = cart;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);

  if (!open) return null;
  const empty = lines.length === 0;

  return (
    <div className="fixed inset-0 z-50 animate-fade bg-cocoa/60" onClick={onClose}>
      <aside role="dialog" aria-modal="true" aria-label="Shopping cart" onClick={(e) => e.stopPropagation()}
        className="polka-light absolute right-0 top-0 flex h-full w-full max-w-md animate-slideIn flex-col border-l-[3px] border-cocoa bg-soft shadow-lift">
        <div className="flex items-center justify-between border-b-2 border-dashed border-caramel/60 bg-soft px-5 py-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} aria-label="Close cart" className="flex h-11 w-11 items-center justify-center rounded-full ring-2 ring-cocoa hover:bg-latte"><X size={20} /></button>
        </div>

        {empty ? (
          <div className="flex flex-1 flex-col items-center justify-center bg-soft/90 px-6 text-center">
            <Fawn className="w-36" />
            <p className="mt-4 font-serif text-xl font-bold">Your cart is empty</p>
            <p className="mt-1 text-sm text-mocha">Add something lovely from the shelf.</p>
            <a href="#products" onClick={onClose} className="btn btn-primary mt-5">Browse products</a>
          </div>
        ) : (
          <ul className="flex-1 space-y-3 overflow-y-auto bg-soft/90 p-4">
            {lines.map((l) => (
              <li key={l.key} className="rounded-2xl border-2 border-latte bg-cream p-3">
                <div className="flex gap-3">
                  <img src={l.product.image} alt="" onError={(e) => { e.currentTarget.src = "/images/placeholder.svg"; }} className="h-16 w-16 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="font-serif font-bold leading-snug">{l.product.name}</p>
                    <p className="text-xs text-mocha">{l.duration} · {formatRupiah(l.price)} each</p>
                  </div>
                  <button onClick={() => remove(l.id, l.duration)} aria-label={`Remove ${l.product.name}`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-mocha hover:bg-latte"><Trash2 size={18} /></button>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1 rounded-full border-2 border-caramel/60 bg-soft">
                    <button onClick={() => setQty(l.id, l.duration, l.qty - 1)} disabled={l.qty <= 1} aria-label="Decrease quantity" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-latte disabled:opacity-40"><Minus size={16} /></button>
                    <span className="w-6 text-center text-sm font-bold" aria-live="polite">{l.qty}</span>
                    <button onClick={() => setQty(l.id, l.duration, l.qty + 1)} aria-label="Increase quantity" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-latte"><Plus size={16} /></button>
                  </div>
                  <p className="font-bold">{formatRupiah(l.price * l.qty)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="space-y-2 border-t-2 border-dashed border-caramel/60 bg-soft p-5">
          <div className="flex justify-between text-sm text-mocha"><span>Subtotal</span><span>{formatRupiah(total)}</span></div>
          <div className="flex justify-between font-serif text-xl font-bold"><span>Total</span><span>{formatRupiah(total)}</span></div>
          {empty ? (
            <button disabled className="btn btn-primary w-full">Checkout via WhatsApp</button>
          ) : (
            <a href={buildWhatsAppUrl(lines, total)} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">Checkout via WhatsApp</a>
          )}
          {!empty && <button onClick={clear} className="w-full min-h-[44px] text-sm font-medium text-mocha underline-offset-2 hover:underline">Empty cart</button>}
        </div>
      </aside>
    </div>
  );
}
