var React = require('react');

var DayItem = React.createClass({
	render: function () {
		return (
			<div className="DayItem">
				<div className="row">
					<div className="col-xs-4 text-left">
						<h5>{this.props.city},{this.props.country}</h5>
						<h5>{this.props.time} </h5>
					</div>
					<div className="col-xs-4 text-center">
						<h5> {this.props.description} </h5>
					</div>

						<div className="col-xs-4 text-right">
							<div className="togglebutton">
								<label>
									<span>°C</span>
									<input type="checkbox" /><span className="toggle"> </span>
									<span>°F</span>
								</label>
							</div>
						</div>

				</div>
				<div className="row">
					<div className="col-xs-12 text-center">
						<img src={"http://openweathermap.org/img/w/"+this.props.icon+".png"}/>
						<h2>{this.props.temp} C</h2>
						<h5>Feels like 19 °C</h5>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6 text-center">East</div>
					<div className="col-xs-6 text-center">{this.props.windSpeed} m/s</div>
				</div>
			</div>

		)
	}

});

module.exports = DayItem;



