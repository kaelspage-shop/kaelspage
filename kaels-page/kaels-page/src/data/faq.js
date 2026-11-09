// FAQ now lives in faq.json and is edited from the admin panel (/admin).
import data from "./faq.json";
export const faq = data.items || [];
