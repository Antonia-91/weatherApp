//import
import { setLocationObject, getHomeLocation } from "./dataFunctions.js";
import { addSpinner, displayError } from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

const initApp = () => {
  // add listeners
  const geoButton = document.getElementById("getLocation");
  geoButton.addEventListener("click", getGeoWeather);
  const homeButton = document.getElementById("home");
  homeButton.addEventListener("click", loadWeather);
  // set up
  //load default weather
  loadWeather();
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

const loadWeather = (event) => {
  const savedLocation = getHomeLocation();
  if (!savedLocation && !event) return getGeoWeather();
  if (noSavedLocation && event.type === "click") {
    displayError(
      "no home locaiton saved",
      "Sorry. pleace save your home location first."
    );
  } else if (savedLocation && !event) {
    displayHomeLocationWeather(savedLocation);
  } else {
    const homeIcon = document.querySelector(".fa-home");
    addSpinner(homeIcon);
    displayHomeLocationWeather(savedLocation);
  }
};

const displayHomeLocationWeather = (home) => {
  if (typeof home === "string") {
    const locationJson = JSON.parse(home);
    const myCoordsObj = {
      lat: locationJson.lat,
      lon: locationJson.lon,
      name: locationJson.name,
      unit: locationJson.unit,
    };
    setLocationObject(currentLoc, myCoordsObj);
    updateDataAndDisplay(currentLoc);
  }
};

const updateDataAndDispaly = async (locationsObj) => {
  console.log(locationsObj);
  //  const weatherJson = await getWeatherFromCoords(locationsObj);
  //  if(weatherJson) upDateDisplay(weatherJson, locationsObj);
};
