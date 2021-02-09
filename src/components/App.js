import React, {useState, useEffect} from 'react';
import '../styles/app.scss';
import axios from 'axios';
import SearchInput from './searchInput';

function App() {
  const [city, setCity] = useState('london');
  const [weatherDetails, setWeatherDetails] = useState({});

  const apiKey = "4b4497741f6540faebf9c3d8e54a2273";
  const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
  // var today = new Date();
  // console.log(today)

  useEffect( () => {
    axios.get(queryURL)
    .then(response => {
      console.log(response.data)
      setWeatherDetails(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [city]);


  return (
    <div className="App">
      <SearchInput city={city} setCity={setCity}/>
      <h1>{weatherDetails.name}</h1>
    </div>
  );
}

export default App;
