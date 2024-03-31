"use strict";

const api_key = "c2fe88a9dff129d520a8f634084a62f7";

/**
 * fetch data from the server
 * @param {String} callback
 * @param {String} url API url
 */

export const fetchData = function (url, callback) {
    fetch(`${url}&appid=${api_key}`)
        .then((response) => response.json())
        .then((data) => callback(data));
};

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&units=metric`;
    },
    reverseGeocoding(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
    /**
     *
     * @param {String} query
     * @returns
     */
    directGeocoding(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    },
};
