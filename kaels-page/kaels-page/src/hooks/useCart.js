import { useCallback, useEffect, useMemo, useState } from "react";
import { products } from "../data/products.js";
import { getOptions } from "../utils/helpers.js";

const KEY = "kaels-page-cart";
const read = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(raw) ? raw.filter((i) => i && i.duration != null && i.qty > 0) : [];
  } catch { return []; }
};

// The cart stores only {id, duration, qty}. Names and prices are looked up from products.js,
// so price changes apply automatically and deleted products drop out of the cart.
export function useCart() {
  const [items, setItems] = useState(read);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* storage unavailable */ }
  }, [items]);

  const lines = useMemo(() => items.map((i) => {
    const product = products.find((p) => p.id === i.id);
    const opt = product && getOptions(product).find((o) => o.duration === i.duration);
    if (!product || !opt || product.status === "soldout") return null;
    return { key: `${i.id}|${i.duration}`, id: i.id, product, duration: opt.duration, price: opt.price, qty: i.qty };
  }).filter(Boolean), [items]);

  const add = useCallback((id, duration) => setItems((cur) => {
    const hit = cur.find((i) => i.id === id && i.duration === duration);
    return hit ? cur.map((i) => (i === hit ? { ...i, qty: Math.min(99, i.qty + 1) } : i)) : [...cur, { id, duration, qty: 1 }];
  }), []);
  const setQty = useCallback((id, duration, qty) => setItems((cur) =>
    cur.map((i) => (i.id === id && i.duration === duration ? { ...i, qty: Math.max(1, Math.min(99, qty)) } : i))), []);
  const remove = useCallback((id, duration) => setItems((cur) => cur.filter((i) => !(i.id === id && i.duration === duration))), []);
  const clear = useCallback(() => setItems([]), []);

  const count = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);
  return { lines, add, setQty, remove, clear, count, total };
}
