var React = require('react'),
	ListItem = require('./ListItem.jsx'),
	HTTP = require('../services/httpService');


var List = React.createClass({
	getInitialState: function () {
		return {ingredients: []}
	},
	componentWillMount: function () {
		HTTP.get('Mariupol')
			.then(function (data) {
				console.log(data.list);
				this.setState({ingredients: data.list});
			}.bind(this));
	},

	render: function () {

		var listItems = this.state.ingredients.map(function (item) {

			return <ListItem key={item.dt} date={item.dt} icon={item.weather[0].icon} deg={item.deg} />

		});
		return <ul>{listItems}</ul>;
	}
});


module.exports = List;