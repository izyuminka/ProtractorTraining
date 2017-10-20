var defineCity = require("./defineCity.js");

var menuForCity = [],
    cityMenu = {};

exports.getMenuForCity = function (city) {
    browser.element(By.xpath('//*[@data-statlog="tabs.more"]')).click();
    browser.wait(element(By.xpath('//div[@class="home-tabs__more"]')).isDisplayed());
    var menuMoreElementGet =
        browser.findElements(By.xpath('//div[@class="home-tabs__more"]/child::div/descendant::*[@class="home-tabs__more-item"]'))
            .then(function (elements) {
                elements.forEach(function (element) {
                    element.getText().then(function (text) {
                        menuForCity.push(text);
                    });
                });
                //TODO: push both cities' menu to the map
                cityMenu[city] = menuForCity;
            });/*.then(function (value) {
            cityMenu[city] = menuForCity; //Add city:menu pair to cityMenu Map object
            //return cityMenu;
        });*/
    exports.menu = cityMenu;
    //console.log(cityMenu);
};

