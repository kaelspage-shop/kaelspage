import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { store } from "../config/store.js";
import { Fawn, Sparkle } from "./Decor.jsx";

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#how-to-order", label: "How to Order" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-dashed border-caramel/50 bg-soft/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" aria-label="Main">
        <a href="#home" className="flex items-center gap-2" aria-label={`${store.name} home`}>
          <Fawn head className="h-10 w-10 rounded-full bg-latte/70 ring-2 ring-cocoa" />
          <span className="font-serif text-2xl font-bold italic leading-none">{store.name}</span>
          <Sparkle size={12} className="-ml-1 -mt-3 text-caramel" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-latte">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={onCartClick} className="relative flex h-11 w-11 items-center justify-center rounded-full bg-cocoa text-soft transition hover:bg-mocha active:scale-95" aria-label={`Open cart, ${cartCount} items`}>
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-caramel px-1 text-xs font-bold text-soft ring-2 ring-soft">{cartCount}</span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cocoa md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="animate-fade border-t border-caramel/30 bg-soft px-4 pb-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-medium hover:bg-latte">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
