// development imports:
var React = require("react");
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

// component imports:
var MainLayoutContainer = require("../containers/MainLayoutContainer.js");
var HomeSearchCity = require("../components/HomeSearchCity.js");
var Forecast = require("../components/Forecast.js");
var ForecastDayDetails = require("../components/ForecastDayDetails.js"); 

// router configuration:
var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayoutContainer}>
            <IndexRoute component={HomeSearchCity} />
            <Route path="forecast/:city" component={Forecast} />
            <Route path="forecast/:city/details/:date" component={ForecastDayDetails} />
        </Route>
    </Router>
);

module.exports = routes;