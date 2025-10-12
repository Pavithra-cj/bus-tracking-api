import * as RouteService from "../services/routeService.js";

export const getAllRoutes = async (req, res) => {
  try {
    const routes = await RouteService.listRoutes();
    res.json(routes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRouteById = async (req, res) => {
  try {
    const route = await RouteService.getRoute(req.params.id);
    res.json(route);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createRoute = async (req, res) => {
  try {
    const newRoute = await RouteService.addRoute(req.body);
    res.status(201).json(newRoute);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateRoute = async (req, res) => {
  try {
    const updated = await RouteService.editRoute(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteRoute = async (req, res) => {
  try {
    await RouteService.removeRoute(req.params.id);
    res.json({ message: "Route deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
