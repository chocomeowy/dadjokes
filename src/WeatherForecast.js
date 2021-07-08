import React from "react";
import moment from "moment";
import { useEffect, useState } from "react";

const WeatherForecast = () => {
  const [weather, setWeather] = useState("Weather");
  const [weather2, setWeather2] = useState("Weather");
  const currentDate = moment().format("YYYY-MM-DD[T]HH:mm:ss");
  const url = `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${currentDate}`;
  //console.log(url2);
  const url2 = `https://api.data.gov.sg/v1/environment/air-temperature?date_time=${currentDate}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data.items[0].forecasts[12]);
        //console.log("data", data.items[0].forecasts[12].forecast);
        setWeather(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [url]);
  useEffect(() => {
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data);
        //console.log("data", data.items[0].forecasts[12].forecast);
        setWeather2(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [url2]);

  return (
    <div>
      Forecast in the next two hours is:{" "}
      {weather?.items?.[0]?.forecasts?.[12]?.forecast}. Temperature now is{" "}
      {weather2?.items?.[0].readings[0]?.value}
    </div>
  );
};

export default WeatherForecast;
