// development imports:
var React = require("react");
var HelloWorld = require("../components/HelloWorld.js");
var HeaderContainer = require("../containers/HeaderContainer.js");

// styles:
require("../assets/styles/app.css");

var MainLayoutContainer = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <HeaderContainer />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = MainLayoutContainer;