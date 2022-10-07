const defaultCityName = require("./listOfCities");
const request = require("request");
const _ = require("underscore");

function weatherCalulate() {
  let randomCity = _.sample(defaultCityName, 5);
  let requests = randomCity.map((city) => {
    return new Promise((resolve, reject) => {
      request(
        {
          uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`,
          method: "GET",
        },
        (err, resp, body) => {
          if (err) {
            reject(err);
          }
          resolve(body);
        }
      );
    });
  });
  return requests;
}
// console.log(requests);
// Promise.all(requests).then((body) => {
//   //   console.log(body);
//   body.forEach((resp) => {
//     if (resp) weatherData.push(JSON.parse(resp).main);
//     // console.log(JSON.parse(resp).main.temp);
//   });
// });
// return weatherData;
module.exports = weatherCalulate;
