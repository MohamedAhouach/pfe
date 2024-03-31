"use strict";
import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/weather?lat=30.4278&lon=-9.5982";

const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition(
        (response) => {
            const { latitude, longitude } = response.coords;
            updateWeather(`lat=${latitude}`, `lon=${longitude}`);
        },
        (error) => {
            window.location.hash = defaultLocation;
        }
    );
};
/**
 *
 * @param {String} query
 */
const searchedLocation = (query) => updateWeather(...query.split("&"));
// updatedWeather("lat=", "lon=")
const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation],
]);

const checkHash = function () {
    const requestURL = window.location.hash.slice(1);
    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];
    routes.get(route) ? routes.get(route)(query) : error404();
};

window.addEventListener("hashchange", checkHash);
window.addEventListener("load", function () {
    if (!window.location.hash) 
        window.location.hash = "#/current-location";
    else 
        checkHash();
});
