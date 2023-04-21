const thermometer = document.getElementById("temp");

const snow_count = document.getElementById("snowfall");

function fetchWeatherData() {
  return fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=46.03&longitude=7.75&daily=temperature_2m_min,snowfall_sum&forecast_days=1&timezone=Europe%2FBerlin"
  )
    .then((response) => response.json())
    .then((json) => {
      // Process the fetched data here, such as storing in a variable

      const temperature = json["daily"]["temperature_2m_min"];
      const snowfall = json["daily"]["snowfall_sum"];
      return { temperature, snowfall };
    })
    .catch((error) => console.error(error));
}

fetchWeatherData().then((data) => {
  // Use the processed data here, such as updating your application UI
  thermometer.innerHTML = `${data.temperature}°C`;
  snow_count.innerHTML = `${data.snowfall}cm`;
});

// >-6°  35cm
