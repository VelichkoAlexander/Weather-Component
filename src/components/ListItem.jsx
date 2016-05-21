var React = require('react');
var ListItem = React.createClass({
	render: function () {
		return (
			<li className="col-xs-12">
				<div className="well well-sm row " style={{    lineHeight: "50px"}}>
					<div className="col-xs-4 text-left">{this.props.date}</div>
					<div className="col-xs-4 text-center"><img src={"http://openweathermap.org/img/w/"+this.props.icon+".png"} alt=""/></div>
					<div className="col-xs-4 text-right">{this.props.deg} C</div>
				</div>
			</li>	
		);
	}
});

module.exports = ListItem;






