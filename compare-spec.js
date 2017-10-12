//compare More Menu for different locations
var getMenuForCity = require("./getMenuForCity.js");

describe('compare menu for 2 cities on Yandex page', function () {
    it('should compare menu items', function () {

        browser.waitForAngularEnabled(false);
        browser.get('http://yandex.ru');

        getMenuForCity.defineCity();
        //console.log(getMenuForCity.defineCity());
        browser.close();
    })
})