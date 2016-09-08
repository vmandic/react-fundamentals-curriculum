// development imports:
var React = require("react");
var SearchBox = require("../components/SearchBox.js");

var HomeSearchCity = React.createClass({
    render: function () {
        return (
            <div className="searchBoxWrapper">
                <h1>Enter a City and State</h1>
                <SearchBox className="searchBoxCol" />
            </div>
        );
    }
});

module.exports = HomeSearchCity;