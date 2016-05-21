var React = require('react');
var ListItem = React.createClass({
	render: function () {
		return (
			<li >
				<div className="well well-sm row">
					<div className="col-md-4">{this.props.date}</div>
					<div className="col-md-4"><img src={"http://openweathermap.org/img/w/"+this.props.icon+".png"} alt=""/></div>
					<div className="col-md-4">{this.props.deg}</div>
				</div>
			</li>	
		);
	}
});

module.exports = ListItem;