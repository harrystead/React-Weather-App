import React, {useState, useEffect} from 'react';
import '../styles/app.scss';
import axios from 'axios';
import SearchInput from './searchInput'

function App() {
  const apiKey = "4b4497741f6540faebf9c3d8e54a2273";
  const defaultCity = 'london';
  const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + defaultCity + "&units=imperial&appid=" + apiKey;

  useEffect(() => {
    axios.get(queryURL)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  return (
    <div className="App">
      <SearchInput />
    </div>
  );
}

export default App;
