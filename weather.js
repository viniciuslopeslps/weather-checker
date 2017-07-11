var request = require("request");

// usado para dividir o código, você coloca como valor do exports qualquer coisa que você quer que seja exportada por outro código
//pode ser uma string, um int, uma função, um objeto ...
module.exports = function(location, callback){
	var encodedLocation = encodeURIComponent(location);
	var url = "http://api.openweathermap.org/data/2.5/find?q="+encodedLocation+"&units=metric&appid=9d6f32089dd0a2a80ae1a15ade74e856";
	if (!location) {
		return callback('No location provided');
	}

	request({ 
	    url: url, //url que vai ser usada 
	    json:true, // diz que o tipo de retorno é um json
	    rejectUnauthorized: false // desabilita ssl
	}, function(error, response, body){
	    if(error){
	        callback("Unable to fetch weather");
	    }else{
	        //no body que fica a resposta
	        callback("Em "+ body.list[0].name +" é: " + body.list[0].main.temp);
	    }
	});
};