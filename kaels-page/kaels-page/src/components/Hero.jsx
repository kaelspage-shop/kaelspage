import { store } from "../config/store.js";
import { Fawn, Flower, Sparkle } from "./Decor.jsx";

export default function Hero() {
  return (
    <section id="home" className="polka relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{store.tagline}</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-mocha">{store.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#how-to-order" className="btn btn-ghost">How to Order</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          {/* arched vintage frame */}
          <div className="rounded-t-[999px] rounded-b-3xl border-[3px] border-cocoa bg-soft p-3 shadow-lift">
            <div className="polka-light rounded-t-[999px] rounded-b-2xl border-2 border-dashed border-caramel bg-latte/60 px-6 pb-4 pt-14">
              <Fawn className="mx-auto w-full max-w-[250px] drop-shadow-md" />
            </div>
          </div>
          <Sparkle size={30} className="absolute -left-4 top-10 animate-float text-caramel" />
          <Sparkle size={18} className="absolute -right-2 top-24 animate-float text-mocha [animation-delay:1.2s]" />
          <Flower size={34} className="absolute -right-5 bottom-16 animate-float text-latte drop-shadow [animation-delay:2s]" />
          <Flower size={24} className="absolute -left-3 bottom-8 animate-float text-soft drop-shadow [animation-delay:.6s]" />
        </div>
      </div>
    </section>
  );
}
