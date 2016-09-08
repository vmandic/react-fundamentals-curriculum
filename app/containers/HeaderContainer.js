// development imports:
var React = require("react");
var SearchBox = require("../components/SearchBox.js");

var HeaderContainer = React.createClass({
    render: function() {
        return (
            <div className="header">
                <h1>Header</h1>
                <SearchBox className="searchBoxRow" />
            </div>
        );
    }
});

module.exports = HeaderContainer;