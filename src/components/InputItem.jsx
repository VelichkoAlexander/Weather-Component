var React = require('react');


var InputItem = React.createClass({
  render: function(){
    return (
      <div className="form-group label-floating is-empty">
            <div className="input-group ">

              <label className="control-label" for="addon3a">Search...</label>
              <input type="text" id="addon3a" className="form-control"/>


              <span className="input-group-btn">
                <button type="button" className="btn btn-fab btn-fab-mini">
                  <i className="material-icons">></i>
                </button>
              </span>
            </div>

          <span className="material-input"></span></div>
    )
  }
});


module.exports = InputItem;
















