// Product data now lives in products.json and is edited from the admin panel (/admin).
// You can also edit products.json by hand — same fields as in public/admin/config.yml.
// The product id is created automatically from the product name.
import data from "./products.json";

const slug = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const seen = new Set();

export const products = (data.products || []).map((p, i) => {
  let id = slug(p.name) || `product-${i}`;
  if (seen.has(id)) id = `${id}-${i}`;
  seen.add(id);
  return { ...p, id };
});
