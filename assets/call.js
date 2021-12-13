function getWeather(callback) {
    var weather = 'https://api.weatherapi.com/v1/current.json?key=40c895756e764afcb2f211840211212&q=78580&aqi=no';
        $.ajax({
          dataType: "jsonp",
          url: weather,
          success: callback
        });
    }
    
    // get data:
    getWeather(function (data) {
        console.log('weather data received');
        console.log(data.list[0].weather[0].description); 
        console.log(data.list[0].weather[0].main);  
    });
    
    getWeather(function (data) {
        document.write('weather data received');
        document.write('<br>');
        document.write(data.list[0].weather[0].description);
        document.write('<br>');
        document.write(data.list[0].weather[0].main);
        document.write('<br>');
        document.write(data.list[0].main.temp);
        document.write('<br>');
        document.write(data.list[0].main[0].dt_txt);
        document.write('<br>');
    });
    $.ajax({
      dataType: "jsonp",
      url: weather,
      success: callback
    });
}

// get data:
getWeather(function (data) {
    console.log('weather data received');
    console.log(data.list[0].weather[0].description); 
    console.log(data.list[0].weather[0].main);  
});

getWeather(function (data) {
    document.write('weather data received');
    document.write('<br>');
    document.write(data.list[0].weather[0].description);
    document.write('<br>');
    document.write(data.list[0].weather[0].main);
    document.write('<br>');
    document.write(data.list[0].main.temp);
    document.write('<br>');
    document.write(data.list[0].main[0].dt_txt);
    document.write('<br>');
});