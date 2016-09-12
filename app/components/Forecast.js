// development imports:
var React = require("react");
// var router = require("react-router");
var PropTypes = React.PropTypes;
var WeatherApi = require("../helpers/WeatherApi.js");
var Utils = require("../helpers/Utils.js");
var Link = require("react-router").Link;

var DayItem = require("../components/DayItem.js");

var Forecast = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },

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

                }.bind(this), 500);
            }.bind(this)).catch(function (err) {
                console.error("Weather api error: ", err);
            });
    },

    handleDaySelected: function (dateFormated, dayData) {
        event.preventDefault();

        this.context.router.push({
            pathname: location.pathname + '/details/' + dateFormated,
            state: {
                dayData: dayData
            },
            query: {
                date: dateFormated,
                city: this.state.city
            }
        })
    },

    renderDays: function (days) {
        var itemsToRender = [];
        for (var i = 0; i < days.length; i++) {
            var dateFormated = Utils.getDate(days[i].dt);
            itemsToRender.push
                (
                    <DayItem key={i} icon={days[i].weather[0].icon} text={dateFormated} click={this.handleDaySelected.bind(this, dateFormated, days[i])} />
                );
        }
        return itemsToRender;
    },

    render: function () {
        return (
            this.state.isLoading === true ?
                <h1 className="loading">Loading weather information...</h1> :

                <div style={{ textAlign: "center" }} className="forecastDays">
                    <h1 className="loading">{this.state.weatherData[0].data.name} ({this.state.weatherData[0].data.sys.country}) </h1>
                    <h3>Weather now: {this.state.weatherData[0].data.weather[0].description}</h3>
                    <h3>Temp.: {Utils.convertTemp(this.state.weatherData[0].data.main.temp) } C*</h3>
                    <br/>
                    <h2>Select a day</h2>
                    <ul>
                        {this.renderDays(this.state.weatherData[1].data.list) }
                    </ul>
                </div>
        );
    }
});

module.exports = Forecast;