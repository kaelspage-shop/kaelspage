import { store } from "../config/store.js";
import { Fawn, Sparkle } from "./Decor.jsx";

const links = [["#home", "Home"], ["#products", "Products"], ["#how-to-order", "How to Order"], ["#faq", "FAQ"], ["#contact", "Contact"]];

export default function Footer() {
  return (
    <footer className="polka relative overflow-hidden bg-cocoa text-latte" style={{ backgroundImage: "radial-gradient(circle, rgba(231,212,188,.14) 3px, transparent 3.5px)" }}>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-serif text-2xl font-bold italic text-soft">{store.name}<Sparkle size={12} className="text-caramel" /></p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{store.description}</p>
        </div>
        <nav aria-label="Footer">
          <h4 className="font-bold text-soft">Quick links</h4>
          <ul className="mt-3 space-y-1 text-sm">
            {links.map(([h, l]) => <li key={h}><a href={h} className="inline-block py-1 hover:text-soft">{l}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h4 className="font-bold text-soft">Follow us</h4>
            <ul className="mt-3 space-y-1 text-sm">
              {store.socials.filter((s) => s.url).map((s) => (
                <li key={s.label}><a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-soft">{s.label}</a></li>
              ))}
            </ul>
          </div>
          <Fawn className="w-20 shrink-0 rounded-2xl bg-latte/90 p-1" />
        </div>
      </div>
      <p className="border-t border-latte/20 py-4 text-center text-xs">© {new Date().getFullYear()} {store.name}. All rights reserved.</p>
    </footer>
  );
}
