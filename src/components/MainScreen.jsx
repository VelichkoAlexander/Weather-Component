var React = require('react');
HTTP = require('../services/httpService');
var InputItem  = require('./InputItem.jsx');


var MainScreen = React.createClass({
  getInitialState: function () {
		return {data: []}
	},
	componentWillMount: function () {
		HTTP.get('Mariupol')
			.then(function (data) {
				console.log(data);
				this.setState({wather: data});
			}.bind(this));
	},
  render: function(){
    console.log(this.state.wather.cod)
    return(

      <div className="mainScren">
      <InputItem/>
        <div className="row">
            <div className="col-xs-4 text-left">
              <h5> </h5>
              <h5> 00:00 </h5>
            </div>
            <div className="col-xs-4 text-center">
              <h5> overcast clouds </h5>
            </div>
            <div className="col-xs-4 text-right">
              <div className="togglebutton">
                <label>
                  <span>°C</span><input type="checkbox" /><span>°F</span>
                </label>
            </div>
            </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
              <img src="http://openweathermap.org/img/w/01d.png" />
              <h2>-3 C</h2>
              <h5>Feels like 19 °C</h5>
          </div>
        </div>
        <div className="row">
        <div className="col-xs-6 text-center">East</div>
        <div className="col-xs-6 text-center">12m/s</div>
        </div>

    </div>

    )
  }
});


module.exports = MainScreen;
