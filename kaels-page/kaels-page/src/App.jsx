import { useCallback, useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useCart } from "./hooks/useCart.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import ProductCatalog from "./components/ProductCatalog.jsx";
import ProductDetailModal from "./components/ProductDetailModal.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import HowToOrder from "./components/HowToOrder.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const cart = useCart();
  const [selected, setSelected] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  const closeModal = useCallback(() => setSelected(null), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const addToCart = (product, option) => {
    cart.add(product.id, option.duration);
    setToast(`${product.name} (${option.duration}) added to cart`);
  };
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <>
      <Navbar cartCount={cart.count} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Benefits />
        <ProductCatalog onView={setSelected} onAdd={addToCart} />
        <HowToOrder />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {selected && <ProductDetailModal product={selected} onClose={closeModal} onAdd={addToCart} />}
      <ShoppingCart open={cartOpen} onClose={closeCart} cart={cart} />
      {toast && (
        <div role="status" className="fixed bottom-5 left-1/2 z-[60] flex max-w-[90vw] -translate-x-1/2 animate-pop items-center gap-2 rounded-full bg-cocoa px-5 py-3 text-sm font-medium text-soft shadow-lift">
          <Check size={16} className="shrink-0 text-latte" />{toast}
        </div>
      )}
    </>
  );
}
