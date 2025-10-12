import express from "express";
import * as RouteController from "../controller/routeController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Routes
 *   description: API endpoints for managing bus routes
 */

/**
 * @swagger
 * /api/routes:
 *   get:
 *     summary: Get all routes
 *     tags: [Routes]
 *     responses:
 *       200:
 *         description: List of all routes
 */
router.get("/", RouteController.getAllRoutes);

/**
 * @swagger
 * /api/routes/{id}:
 *   get:
 *     summary: Get route by ID
 *     tags: [Routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Route found
 *       404:
 *         description: Route not found
 */
router.get("/:id", RouteController.getRouteById);

/**
 * @swagger
 * /api/routes:
 *   post:
 *     summary: Create a new route
 *     tags: [Routes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - start_location
 *               - end_location
 *               - distance_km
 *               - estimated_time
 *             properties:
 *               start_location:
 *                 type: string
 *                 example: Colombo
 *               end_location:
 *                 type: string
 *                 example: Kandy
 *               distance_km:
 *                 type: number
 *                 example: 115.5
 *               estimated_time:
 *                 type: string
 *                 example: 3h
 *     responses:
 *       201:
 *         description: Route created
 *       400:
 *         description: Validation error
 */
router.post("/", RouteController.createRoute);

/**
 * @swagger
 * /api/routes/{id}:
 *   put:
 *     summary: Update an existing route
 *     tags: [Routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               start_location:
 *                 type: string
 *               end_location:
 *                 type: string
 *               distance_km:
 *                 type: number
 *               estimated_time:
 *                 type: string
 *     responses:
 *       200:
 *         description: Route updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Route not found
 */
router.put("/:id", RouteController.updateRoute);

/**
 * @swagger
 * /api/routes/{id}:
 *   delete:
 *     summary: Delete a route by ID
 *     tags: [Routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Route deleted
 *       404:
 *         description: Route not found
 */
router.delete("/:id", RouteController.deleteRoute);

export default router;
