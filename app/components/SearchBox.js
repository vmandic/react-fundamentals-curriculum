// development imports:
var React = require("react");

var SearchBox = React.createClass({
    render: function () {
        return (
            <div className={this.props.className}>
                <input type="text" placeholder="Zagreb" className="form-control" />
                <button style={{ margin: 10 + "px" }} className="btn btn-success">Get Weather</button>
            </div>
        );
    }
});

module.exports = SearchBox;