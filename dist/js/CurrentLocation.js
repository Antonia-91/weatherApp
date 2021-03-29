export default class CurrentLocation {
  constructor() {
    this._name = "CurrentLocation";
    this._lat = "null"; //latitude
    this._lon = "null"; // longitude;
    this._unit = "imperial";
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this.name = name;
  }

  getLat() {
    return this._lat;
  }
  setLat(lat) {
    this._lat = lat;
  }

  getLon() {
    return this._lon;
  }
  setLon(lon) {
    this.lon = lon;
  }

  getUnit() {
    return this._unit;
  }
  setUnit(unit) {
    this._unit = unit;
  }

  toggleUnit() {
    this._unit = this._unit === "imperial" ? "mertic" : "imperial";
  }
}
