//import
import { setLocationObject } from "./dataFunctions.js";
import { addSpinner, displayError } from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

const initApp = () => {
  // add listeners
  const geoButton = document.getElementById("getLocation");
  geoButton.addEventListener("click", getGeoWeather);
  // set up
  //load default weather
};

// call our initApp on document load
document.addEventListener("DOMContentLoaded", initApp);
console.log("hh");

// getGeoWeather function
const getGeoWeather = function (event) {
  if (event) {
    if (event.type === "click") {
      // add spinner
      const mapIcon = document.querySelector(".fa-map-marker-alt");
      addSpinner(mapIcon);
    }
  }

  if (!navigator.geolocation) geoError();
  navigator.geolocation.getCurrentPosition(geoSucces, geoError);
};

const geoError = (errObj) => {
  const errMsg = errObj ? errObj.message : "Geolocation not supported";
  displayError(errMsg, errMsg);
};

const geoSucces = (position) => {
  const myCoordsObj = {
    lat: position.coords.latitud,
    lon: position.coords.longitude,
    name: `Lat:${position.coords.latitude} Long: ${position.coords.longitude}`,
  };
  // set locaion object
  setLocationObject(currentLoc, myCoordsObj);
  console.log(currentLoc);
  //uppdate data and display
  updateDataAndDispaly(currentLoc);
};

const updateDataAndDispaly = async (locationsObj) => {
  //  const weatherJson = await getWeatherFromCoords(locationsObj);
  //  if(weatherJson) upDateDisplay(weatherJson, locationsObj);
};
