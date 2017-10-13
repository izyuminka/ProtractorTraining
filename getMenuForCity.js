var defineCity = require("./defineCity.js");

exports.getMenuForCity = function (testCity) {

    var menuMoreElement = browser.element(By.xpath('//div[@class="home-tabs__more"]/child::div/descendant::*[@class="home-tabs__more-item"]'));
    var menuForCity;

    browser.element(By.xpath('//*[@data-statlog="tabs.more"]')).click();
    browser.wait(menuMoreElement.isDisplayed());

    //TODO: chaange method to fetch all menu items

    menuMoreElement.getText().then(function (text) {
        var menuForCity = text;
        console.log(menuForCity);

    })





};