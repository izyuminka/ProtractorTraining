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
        browser.close();
    })
});