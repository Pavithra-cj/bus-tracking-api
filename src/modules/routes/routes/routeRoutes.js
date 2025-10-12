import express from "express";
import * as RouteController from "../controllers/routeController.js";

const router = express.Router();

router.get("/", RouteController.getAllRoutes);
router.get("/:id", RouteController.getRouteById);
router.post("/", RouteController.createRoute);
router.put("/:id", RouteController.updateRoute);
router.delete("/:id", RouteController.deleteRoute);

export default router;
