// development imports:
var React = require("react");
var Header = require("../components/Header.js");

// styles:
require("../assets/styles/app.css");

var MainLayoutContainer = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <Header />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = MainLayoutContainer;