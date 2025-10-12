import express from "express";
import dotenv from "dotenv";
import routeRoutes from "./modules/routes/routes/routeRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();
const app = express();

app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("🚍 Bus Tracking API is running...");
});

// Routes API
app.use("/api/routes", routeRoutes);

// 404 handler for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "API endpoint not found" });
});

// Central error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
