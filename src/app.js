import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

import routeRoutes from "./modules/routes/route/routeRoutes.js";
import busRoutes from "./modules/buses/route/busRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();
const app = express();

app.use(express.json());

// Swagger documentation route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Base route
app.get("/", (req, res) => {
  res.send("🚍 Bus Tracking API is running...");
});

// Routes API
app.use("/api/routes", routeRoutes);

// Buses API
app.use("/api/buses", busRoutes);

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
  console.log(`📄 Swagger Docs: http://localhost:${PORT}/api-docs`);
});
