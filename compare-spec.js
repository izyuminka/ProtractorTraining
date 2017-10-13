//compare More Menu for different locations
var getMenuForCity = require("./getMenuForCity.js");
var defineCity = require("./defineCity");

//var testCity;


describe('compare menu for 2 cities on Yandex page', function () {
    it('should compare menu items', function () {


        browser.waitForAngularEnabled(false);
        browser.get('http://yandex.ru');

        var testCityIndex = 0;

        //for (testCityIndex = 0; testCityIndex < browser.params.City.length; testCityIndex++) {
            var testTestCity = browser.params.City[testCityIndex];
            defineCity.defineCity(testTestCity);
            getMenuForCity.getMenuForCity(testTestCity);
            //console.log(testTestCity);
        //}

        browser.close();
    })
});