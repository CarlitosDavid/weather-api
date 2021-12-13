let api = "http://api.weatherapi.com/v1";
let apiKey = "40c895756e764afcb2f211840211212";

navigator.geolocation.getCurrentPosition(success, error);

function success(postion) {
    console.log(position);
}

function error() {
    console.log("error");
}

getWeather()