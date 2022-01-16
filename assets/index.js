
let weather = {
    apiKey: "270b7d76f8eb42d78fe93256221501",
    fetchWeather: function (city) {
        fetch("http://api.weatherapi.com/v1/current.json?key=270b7d76f8eb42d78fe93256221501&q=" + city + apiKey
        ) 
        .then((response) => response.json())
         .then((data) => console.log(data));
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


        document.querySelector(".city").innerHTML = "Weather in" + name;
        document.querySelector(".temp").innerHTML = temp + "°F";
        document.querySelector("humidity").innerHTML = 
        "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed:" + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");


    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

addEventListener("click") {
    weather.search();
}

addEventListene(function (event) {
    if (event.key == "Confirm") {
        weather.search();
    }
})

