var React = require("react");
var ReactDOM = require("react-dom");
var HelloWorldComponent = require("./components/HelloWorld.js");
var routes = require("./config/routes");

ReactDOM.render(routes, document.getElementById("app"));