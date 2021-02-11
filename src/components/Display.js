const months = [
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
    "Nocvember",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  }`;


  const icon = weatherDetails.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
  const temperatureFahrenheitToday = weatherDetails.main.temp;
  const temperatureCeliusToday = Math.round(temperatureFahrenheitToday - 32) * 5/9;