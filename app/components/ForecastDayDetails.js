// development imports:
var React = require("react");
var Utils = require("../helpers/Utils.js");

var ForecastDayDetails = React.createClass({

    getInitialState: function() {
        return this.props.location.state;
    },

    componentDidMount: function() {
        // map sent state to local state
    },

    render: function() {
        return (
            <div className="dayDetails">
                <div className={"weather-icon icon-" + this.state.dayData.weather[0].icon}></div>
                <h3>{this.props.location.query.date}</h3>
                <br/>
                <h3>{this.props.location.query.city}</h3>
                <h3>{this.state.dayData.weather[0].description}</h3>
                <h3>min temp: {Utils.convertTemp(this.state.dayData.temp.min)} C*</h3>
                <h3>max temp: {Utils.convertTemp(this.state.dayData.temp.max)} C*</h3>
                <h3>humidity: {this.state.dayData.humidity}</h3>
            </div>
        );
    }
});

module.exports = ForecastDayDetails;