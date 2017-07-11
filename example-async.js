var weather = require("./weather.js"); // procura arquivos locais apartir do diretorio

weather(function(currentWeather){
    console.log(currentWeather);
});
