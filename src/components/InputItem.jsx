var React = require('react');


var InputItem = React.createClass({
	getInitialState: function () {
		return {value:''};
	},
	handelChange: function (event) {
		this.setState({value: event.target.value});
	},
  render: function(){
    return (
      <div className="form-group label-floating is-empty">
            <div className="input-group ">

              <label className="control-label" for="addon3a">Search...</label>
              <input type="text" id="addon" className="form-control" onChange={this.handelChange} value={this.state.value}/>


              <span className="input-group-btn">
                <button type="button" className="btn btn-fab btn-fab-mini" onClick={this.props.onClick}>
                  <i className="material-icons">></i>
                </button>
              </span>
            </div>

          <span className="material-input"> </span></div>
    )
  }
});


module.exports = InputItem;
















