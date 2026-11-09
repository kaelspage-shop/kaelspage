import { Eye, ShoppingBag } from "lucide-react";
import { statusInfo } from "../data/categories.js";
import { formatRupiah, getOptions, lowestPrice } from "../utils/helpers.js";

export default function ProductCard({ product, onView, onAdd }) {
  const options = getOptions(product);
  const status = statusInfo[product.status] || statusInfo.available;
  const soldOut = product.status === "soldout";
  const multi = options.length > 1;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border-2 border-latte bg-soft shadow-boutique transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <button onClick={() => onView(product)} className="relative block aspect-[4/3] overflow-hidden bg-latte" aria-label={`View details of ${product.name}`}>
        <img src={product.image} alt="" loading="lazy" onError={(e) => { e.currentTarget.src = "/images/placeholder.svg"; }} className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${soldOut ? "grayscale" : ""}`} />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${status.className}`}>{status.label}</span>
      </button>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-caramel">{product.category}</p>
        <h3 className="mt-1 text-xl font-bold leading-snug">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-mocha">{product.description}</p>
        <p className="mt-3 text-xs text-mocha">
          {options.length > 3 ? `${options.length} plan options` : multi ? `Durations: ${options.map((o) => o.duration).join(" · ")}` : `Duration: ${options[0].duration}`}
        </p>
        <p className="mt-2 font-serif text-2xl font-bold">
          {multi && <span className="mr-1 font-sans text-xs font-medium text-mocha">from</span>}
          {formatRupiah(lowestPrice(product))}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button onClick={() => onView(product)} className="btn btn-ghost !px-3"><Eye size={16} />View Details</button>
          <button
            disabled={soldOut}
            onClick={() => (multi ? onView(product) : onAdd(product, options[0]))}
            className="btn btn-primary !px-3"
          >
            <ShoppingBag size={16} />{soldOut ? "Sold out" : multi ? "Choose plan" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}
