// const Joi = require("joi");
const express = require("express");

const request = require("request");
const weatherCalulate = require("./weatherData");
const app = express();

//end point which sends 5 random city weather data.
app.get("/", async (req, res) => {
  const requests = await weatherCalulate();
  const allWeatherData = [];
  Promise.all(requests).then((body) => {
    body.forEach((res) => {
      if (res)
        allWeatherData.push({
          tepm: JSON.parse(res).main,
          city: JSON.parse(res).name,
        });
    });
    res.send(allWeatherData);
  });
  // console.log(data, "app.get");
  // console.log("app.get");
});

//endpoint which send weather data of a particular city provided by user after weather/ => /api/weather/:city
app.get("/api/weather/:city", (req, res) => {
  const uri = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=metric&appid=${process.env.API_KEY}`;

  return new Promise((resolve, reject) =>
    request(uri, (err, resp, body) => {
      if (err) reject(err);
      else resolve(JSON.parse(body));
    })
  ).then((resp) => {
    console.log(resp);
    res.send(resp);
  });
});

//End point to forcast weather data for next few days that has been provided by user
//user should provide name of city and number of days to forcast.

app.get("/api/weather/:city/:day", (req, res) => {
  const uri = `http://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&cnt=${req.params.day}&appid=${process.env.API_KEY}`;

  return new Promise((resolve, reject) =>
    request(uri, (err, resp, body) => {
      if (err) reject(err);
      else resolve(JSON.parse(body));
    })
  ).then((resp) => {
    // console.log(resp);
    res.send(resp);
  });
});

app.listen("3000", () => {
  console.log("At port 3000...");
});
