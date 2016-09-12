// development imports:
var React = require("react");
var Link = require("react-router").Link;
var SearchBox = require("../components/SearchBox.js");

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <Link to="/"> 
                    <h1>Weather App</h1>
                </Link>
                <SearchBox className="searchBoxRow" />
            </div>
        );
    }
});

module.exports = Header;