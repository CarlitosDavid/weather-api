
let weather = {
    apiKey: "270b7d76f8eb42d78fe93256221501",
    fetchWeather: function (city) {
        fetch("http://api.weatherapi.com/v1/current.json?key=270b7d76f8eb42d78fe93256221501&q="
        + city +
        + this.apiKey
        ) 
        // .then((response) => response.json())
        // .then((data) => console.log(data));
        .then((response) => {
            if (!response.ok) {
                alert("location not found.");
                throw new Error("Location not found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { description } = data.weather[0];

        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector("humidity").innerText = 
        "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");


    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector("button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Austin");