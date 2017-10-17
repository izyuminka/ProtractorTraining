//var defineCity = require("./defineCity.js");


exports.getMenuForCity = function () {
    var menuForCity = [];


    browser.element(By.xpath('//*[@data-statlog="tabs.more"]')).click();
    browser.wait(element(By.xpath('//div[@class="home-tabs__more"]')).isDisplayed());
    var menuMoreElement =
        browser.findElements(By.xpath('//div[@class="home-tabs__more"]/child::div/descendant::*[@class="home-tabs__more-item"]'))
            .then(function (elements) {
                elements.forEach(function (element) {
                    element.getText().then(function(text){
                        menuForCity.push(text);
                    });
                });
            }).then(function (value) { console.log(menuForCity) });

    console.log(menuForCity)

};

