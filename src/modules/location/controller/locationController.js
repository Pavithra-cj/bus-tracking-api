import * as LocationService from "../service/locationService.js";

export const updateBusLocation = async (req, res, next) => {
  try {
    const { bus_id, latitude, longitude } = req.body;
    if (!bus_id || !latitude || !longitude)
      return res
        .status(400)
        .json({ message: "bus_id, latitude, and longitude required" });

    const result = await LocationService.updateBusLocation(
      bus_id,
      latitude,
      longitude
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getBusLocation = async (req, res, next) => {
  try {
    const data = await LocationService.getBusLiveLocation(req.params.bus_id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getAllLocations = async (req, res, next) => {
  try {
    const data = await LocationService.getAllLiveLocations();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
