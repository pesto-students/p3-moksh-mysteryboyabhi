const _ = require("underscore");
const arr = require("./listOfCities");
// const arr = [1, 2, 3, 4, 5, 7];
_.sample(arr, 4).map((c) => console.log(c));
