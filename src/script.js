function newWeather(response) {
    let temperatureElement = document.querySelector("#current-temperature-value");
    let temperature = response.data.temperature.current;
    let newTitle = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description")
    newTitle.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    temperatureElement.innerHTML = Math.round(temperature);
}

function newCity(city) {
    let apiKey = "4cfo2b293cf1a7894a8e2380489tdbd3";
    let units = "metric"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(newWeather);
}

function newSearch(event) {
    event.preventDefault();
    let searchedCity = document.querySelector("#input");
    newCity(searchedCity.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", newSearch);

newCity("Hermosillo");