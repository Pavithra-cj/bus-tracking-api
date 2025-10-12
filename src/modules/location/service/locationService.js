import * as LocationModel from "../model/location.js";

export const updateBusLocation = async (bus_id, latitude, longitude) => {
  await LocationModel.updateLocation(bus_id, latitude, longitude);
  return {
    bus_id,
    latitude,
    longitude,
    message: "Location updated successfully",
  };
};

export const getBusLiveLocation = async (bus_id) => {
  const data = await LocationModel.getBusLocation(bus_id);
  if (!data) throw new Error("Bus location not found");
  return data;
};

export const getAllLiveLocations = async () => {
  return await LocationModel.getAllLiveLocations();
};
