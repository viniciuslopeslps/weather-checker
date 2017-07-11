var request = require("request");
var url = "http://ipinfo.io";

module.exports = function(callback){
	request({ 
	    url: url, //url que vai ser usada 
	    json:true, // diz que o tipo de retorno é um json
	    rejectUnauthorized: false // desabilita ssl
	}, function(error, response, body){
	    if(error){
	        callback();
	    }else{
	        //no body que fica a resposta
	        callback(body);
	    }
	});
};