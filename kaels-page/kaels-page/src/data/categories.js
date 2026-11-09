// Filter buttons in the catalog. A product's `category` must match one of these names exactly.
// "All Products" is special: it shows everything.
export const categories = ["All Products", "Entertainment", "Productivity", "Design & Creativity", "Education", "Other Apps"];

// Availability labels. Use these values in products.js -> status
export const statusInfo = {
  available: { label: "Available", className: "bg-latte text-cocoa" },
  limited: { label: "Limited stock", className: "bg-caramel text-soft" },
  soldout: { label: "Sold out", className: "bg-mocha/80 text-soft" },
};
