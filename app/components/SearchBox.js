// development imports:
var React = require("react");
var PropTypes = React.PropTypes;
var WeatherApi = require("../helpers/WeatherApi.js");
var axios = require("axios");

var SearchBox = React.createClass({
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
        console.log(this.state.city);
        axios.all(
        [
            WeatherApi.getCurrentWeather(this.state.city),
            WeatherApi.getDayForecast(this.state.city)
        ]).then(function (data) {
            console.log("DATA: ", data);
        }).catch(function(err){
            console.error(err);
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