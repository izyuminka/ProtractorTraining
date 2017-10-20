//compare More Menu for different locations
var getMenuForCity = require("./getMenuForCity.js");
var defineCity = require("./defineCity");
var compareMenus = require("./compareMenus.js");

//var testCity;


describe('compare menu for 2 cities on Yandex page', function () {
    it('should compare menu items', function () {


        browser.waitForAngularEnabled(false);
        browser.get('http://yandex.ru');
        defineCity.isCityTestable(browser.params.City);
        //console.log(getMenuForCity.menu);

        //defineCity.compareArrays();
        //let a = getMenuForCity.getMenuForCity();
        //defineCity.defineCity(browser.params.City[1]);
        // let b = getMenuForCity.getMenuForCity();
        //console.log(a,b)
        //var testCityIndex = 0;

        //for (testCityIndex = 0; testCityIndex < browser.params.City.length; testCityIndex++) {
        //var testTestCity = browser.params.City[testCityIndex];
        //defineCity.defineCity(testTestCity);

        //compareMenus.compareMenus();
        //console.log(testTestCity);
        //}

        browser.close();
    })
});