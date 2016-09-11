var axios = require("axios");

var API_KEY_WAPI = "b714ec74bbab5650795063cb0fdf5fbe";

var WeatherApi = {
    getCurrentWeather: function (cityName) {
        return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&type=accurate&APPID=" + API_KEY_WAPI);
    },

    getDayForecast: function (cityName) {
        return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityName + "&type=accurate&APPID=" + API_KEY_WAPI + "&cnt=5");
    },
    
    getWeather: function(cityName) {
        return axios.all([this.getCurrentWeather(cityName), this.getDayForecast(cityName)]);
    }
};

module.exports = WeatherApi;