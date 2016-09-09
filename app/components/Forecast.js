// development imports:
var React = require("react");
var WeatherApi = require("../helpers/WeatherApi.js");

var Forecast = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            cityData: null,
            city: ""
        };
    },

    componentDidMount: function () {
        var city = this.props.params.city;

        WeatherApi.getCurrentWeather(city)
            .then(function (data) {
                console.log("Weather data loaded: ", data);

                setTimeout(function () {
                    this.setState({
                        isLoading: false,
                        cityData: data,
                        city: city
                    });
                }.bind(this), 1000);
            }.bind(this)).catch(function (err) {
                console.error("Weather api error: ", err);
            });
    },

    render: function () {
        return (
            <div>
                {(function () {
                    return this.state.isLoading === true ?
                        <h1 className="loading">Loading weather information...</h1> :

                        <div style={{textAlign: "center"}}>
                            <h1 className="loading">{this.state.city}</h1>
                            <h3>Weather now: {this.state.cityData.data.weather[0].description}</h3>
                            <br/>
                            <h2>Select a day</h2>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ul>
                        </div>

                }.bind(this)()) }
            </div>
        );
    }
});

module.exports = Forecast;