export const setLocationObject = (locationsObj, coordsObj) => {
  const { lat, lon, name, unit } = coordsObj;
  locationsObj.setLat(lat);
  locationsObj.setLon(lon);
  locationsObj.setName(name);
  if (unit) {
    locationsObj.setUnit(unit);
  }
};

export const getHomeLocation = () => {
  return localStorage.getItem("defaultWeatherLocation");
};
