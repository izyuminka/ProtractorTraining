var getMenuForCity = require("./getMenuForCity.js");
var defineCity = require("./defineCity.js");

var testCityIndex;

exports.compareMenus = function (testCity) {
    for (testCityIndex = 0; testCityIndex < browser.params.City.length; testCityIndex++) {
    var testTestCity = browser.params.City[testCityIndex];
    //defineCity.defineCity(testTestCity);
    console.log(testTestCity);
    }
}