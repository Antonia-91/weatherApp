//import
import { addSpinner } from "./domFunctions.js";
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

  // if (!navigator.geolocation) geoError();
  // navigator.geolocation.getCurrentPosition(geoSucces, geoError);
};
