var weather = require("./weather.js"); // procura arquivos locais apartir do diretorio
var location = require("./location.js");

var argv = require('yargs')
	.option('location', {
		alias: 'l',
		demand: false, //nao obrigatorio
		describe: 'Location to fetch weather for',
		type: 'string'
	})
	.help('help')
	.argv;

var argLocation = argv.l;
if (typeof argLocation === 'string' && argLocation.length > 0) {
	console.log('Location was provided');
	weather(argLocation, function (currentWeather) {
		console.log(currentWeather);
	});
} else {
	console.log('Location was not provided');
	location(function (location) {
		if (location) {
			weather(location.city, function (currentWeather) {
				console.log(currentWeather);
			});
		} else {
			console.log('Unable to guess location');
		}
	});
}















