import app from "../src/app.js";

// Vercel serverless function handler
// When deployed, Vercel will call this function with (req, res).
export default function handler(req, res) {
  return app(req, res);
}
