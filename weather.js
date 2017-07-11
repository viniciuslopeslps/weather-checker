var request = require("request");
var url = "https://samples.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=b1b15e88fa797225412429c1c50c122a1";

// usado para dividir o código, você coloca como valor do exports qualquer coisa que você quer que seja exportada por outro código
//pode ser uma string, um int, uma função, um objeto ...
module.exports = function(callback){
	request({ 
	    url: url, //url que vai ser usada 
	    json:true, // diz que o tipo de retorno é um json
	    rejectUnauthorized: false // desabilita ssl
	}, function(error, response, body){
	    if(error){
	        callback("Unable to fetch weather");
	    }else{
	        //no body que fica a resposta
	        callback("Em "+ body.name +" é: " + body.main.temp);
	    }
	});
};