// development imports:
var React = require("react");
var WeatherApi = require("../helpers/WeatherApi.js");

var DayItem = require("../components/DayItem.js");

var Forecast = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            weatherData: null,
            city: ""
        };
    },

    componentDidMount: function () {
        var city = this.props.params.city;

        WeatherApi.getWeather(city)
            .then(function (data) {
                console.log("Weather data loaded: ", data);

                setTimeout(function () {
                    this.setState({
                        isLoading: false,
                        weatherData: data,
                        city: city
                    });

                window.dd = data;

                }.bind(this), 1000);
            }.bind(this)).catch(function (err) {
                console.error("Weather api error: ", err);
            });
    },

    renderDays: function(days) {
        var itemsToRender = []; 
        for (var i = 0; i < days.length; i++) {
            var day = days[i];
            itemsToRender.push(<DayItem key={i} icon={day.weather[0].icon} text="some text" />);
        }

        return itemsToRender;
    },

    render: function () {
        return (
            this.state.isLoading === true ?
                <h1 className="loading">Loading weather information...</h1> :

                <div style={{textAlign: "center"}} className="forecastDays">
                    <h1 className="loading">{this.state.city}</h1>
                    <h3>Weather now: {this.state.weatherData[0].data.weather[0].description}</h3>
                    <br/>
                    <h2>Select a day</h2>
                    <ul>
                        {this.renderDays(this.state.weatherData[1].data.list)}
                    </ul>
                </div>
        );
    }
});

module.exports = Forecast;