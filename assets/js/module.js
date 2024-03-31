"use strict";

export const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const yearMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

/**
 * unix date in second
 * timezone shift from utc in seconds
 * @param {Number} dateUnix
 * @param {Number} timezone
 * @returns {String} Date string: format "day 1-31, month"
 */
export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDay = weekDays[date.getUTCDay()];
    const yearMonth = yearMonths[date.getUTCMonth()];

    return `${weekDay} ${date.getUTCDate()}, ${yearMonth}`;
};

/**
 *
 * @param {Number} timezone
 * @param {Number} timeUnix
 * @returns {String} Time string: format "HH:MM:SS AM/PM
 */
export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
};

/**
 *
 * @param {Number} timezone
 * @param {Number} timeUnix
 * @returns {String} Time string: format "HH:MM:SS AM/PM
 */
export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
};

/**
 *
 * @param {Number} mps meters per second
 * @returns {Number} kilometer per hour
 */
export const mps_to_kmh = (mps) => {
    return mps * 3.6;
};

export const aqiText = {
    1: {
        level: "Good",
        message:
            "Air quality is excellent, posing little to no risk to health. Enjoy the fresh air!",
    },
    2: {
        level: "Fair",
        message:
            "Air quality is generally acceptable, although some individuals sensitive to pollutants may experience slight discomfort. Stay aware and take necessary precautions.",
    },
    3: {
        level: "Moderate",
        message:
            "Sensitive groups may experience minor health effects. Most people should not be affected, but it's advisable to stay informed.",
    },
    4: {
        level: "Poor",
        message:
            "Health effects may start to manifest for everyone, especially for sensitive groups. Take measures to limit exposure and stay indoors if possible.",
    },
    5: {
        level: "Very Poor",
        message:
            "Emergency health warnings are in effect due to severe air pollution. Take immediate steps to minimize exposure, especially for vulnerable populations.",
    },
};
