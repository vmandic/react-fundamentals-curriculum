// development imports:
var React = require("react");
var SearchBox = require("../components/SearchBox.js");

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <h1>Weather App</h1>
                <SearchBox className="searchBoxRow" />
            </div>
        );
    }
});

module.exports = Header;