function newSearch(event) {
    event.preventDefault();
    let searchedCity = document.querySelector("#input");
    let newCity = document.querySelector("#city");
    newCity.innerHTML = `${searchedCity.value}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", newSearch);