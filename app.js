var weather = require("./weather.js"); // procura arquivos locais apartir do diretorio
var location = require("./location.js");

weather(function(currentWeather){
    console.log(currentWeather);
});

location(function(location){
    if(!location){
        console.log("Unable to get location");
        return;
    }
    console.log("city: " + location.city);
    console.log("lat/long" + location.loc);
});