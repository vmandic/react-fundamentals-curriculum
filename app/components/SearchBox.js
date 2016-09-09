// development imports:
var React = require("react");
var PropTypes = React.PropTypes;

var SearchBox = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },
    propTypes: {
        className: PropTypes.string
    },
    getInitialState: function () {
        return {
            city: ""
        };
    },

    handleSearchOnClick: function (e) {
        e.preventDefault();

        if (this.state.city && this.state.city.trim().length > 0)
            this.context.router.push({
                pathname: "/forecast/" + this.state.city
            });
    },
    handleCityOnChange: function (e) {
        this.setState({ city: e.target.value });
    },

    render: function () {
        return (
            <div className={this.props.className}>
                <input
                    type="text"
                    placeholder="Zagreb"
                    className="form-control"
                    onChange={this.handleCityOnChange} />
                <button
                    style={{ margin: 10 + "px" }}
                    className="btn btn-success"
                    type="button"
                    onClick={this.handleSearchOnClick}>
                    Get Weather
                </button>
            </div>
        );
    }
});

module.exports = SearchBox;