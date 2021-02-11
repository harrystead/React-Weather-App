import React, { useState, useEffect, useRef } from "react";
import "../styles/app.scss";
import SearchInput from "./searchInput";
import DisplayToday from "./DisplayToday";

function App() {
  const [city, setCity] = useState("london");
  const [value, setValue] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  const apiKey = "4b4497741f6540faebf9c3d8e54a2273";
  const queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    apiKey;

  const queryForecast =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=" +
    apiKey;

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const weatherClickHandler = () => {
    Promise.all([fetch(queryURL), fetch(queryForecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        console.log(data1);
        console.log(data2);

        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        setWeatherInfo(weatherInfo);
      });
  };

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <SearchInput
        handleInputChange={handleInputChange}
        weatherClickHandler={weatherClickHandler}
        value={value}
        city={city}
        setCity={setCity}
      />
      <div>
        <DisplayToday weatherInfo={weatherInfo} />
      </div>
    </div>
  );
}

export default App;
