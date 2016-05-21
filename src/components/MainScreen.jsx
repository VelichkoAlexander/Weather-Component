var React = require('react');
HTTP = require('../services/httpService');
var InputItem = require('./InputItem.jsx');
var List =  require('./List.jsx');


var MainScreen = React.createClass({
	getInitialState: function () {
		return {weather: null}
	},
	componentWillMount: function () {
		HTTP.get('Mariupol')
			.then(function (data) {
				console.log(data);
				this.setState({weather: data});
			}.bind(this));
	},

	render: function () {


		if (this.state.weather) {
			return (

				<div className="mainScreen">
					<InputItem/>
					<div className="row">
						<div className="col-xs-4 text-left">
							<h5>{this.state.weather.city.name},{this.state.weather.city.country}</h5>
							<h5> 00:00 </h5>
						</div>
						<div className="col-xs-4 text-center">
							<h5> {this.state.weather.list[0].weather[0].description} </h5>
						</div>
						<div className="col-xs-4 text-right">
							<div className="togglebutton">
								<label>
									<span>°C</span><input type="checkbox"/><span>°F</span>
								</label>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 text-center">
							<img src="http://openweathermap.org/img/w/01d.png"/>
							<h2>-3 C</h2>
							<h5>Feels like 19 °C</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6 text-center">East</div>
						<div className="col-xs-6 text-center">12m/s</div>
					</div>
					<List arr={this.state.weather.list}/>

				</div>
			)
		}else{
			return ( <div>Sorry, something wrong</div>);
		}


	}
});


module.exports = MainScreen;












