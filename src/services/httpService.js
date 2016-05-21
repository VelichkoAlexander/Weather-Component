var Fetch = require('whatwg-fetch');

var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/days'; // basse url for service
var key = '6e90c90aa4f4fe14aed1a4d43421a79c'; //api free key

var service = {
	get: function (town) {
		return fetch(baseUrl + '?q=' + town + '&units=metric&appid=' + key)//request string
			.then(function (response) {
				return response.json();
			})
	}
};


module.exports = service;






