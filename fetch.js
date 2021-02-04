class Fetch {
  async getCurrent(input) {
    const myKey = "Your_OpenWeatherMap_API_Key";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
