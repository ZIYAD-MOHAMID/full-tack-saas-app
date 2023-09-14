const producttion = process.env.NODE_ENV === "production";
export const SITE_URL = producttion ? "prod-url" : "http://localhost:3000";
