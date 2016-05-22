var React = require('react');
var ReactDOM = require('react-dom');
var MainScreen = require('./components/MainScreen.jsx');
var List = require('./components/List.jsx');

$.material.init();


ReactDOM.render(<MainScreen />, document.getElementById('main'));



