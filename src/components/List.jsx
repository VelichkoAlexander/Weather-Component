var React = require('react'),
	ListItem = require('./ListItem.jsx'),
	HTTP = require('../services/httpService');


var List = React.createClass({
	render: function () {
		var styleUl = {
			listStyle: "none",
			margin: 0,
			padding: 0
		};

		var listItems = this.props.arr.map(function (item, key) {
			if (item.dt_txt.substring(11, 13) === "15") {
				return <ListItem key={key}
				                 date={evalDate(item.dt)}
				                 icon={item.weather[0].icon}
				                 deg={item.main.temp}
				/>
			}

		});
		return <ul style={styleUl}>{listItems}</ul>;
	}
});


var evalDate = function (unix_timestamp) {
	var d = new Date(unix_timestamp * 1000);
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var n = weekday[d.getDay()];
	return n;
}

module.exports = List;



