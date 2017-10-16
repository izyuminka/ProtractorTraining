var defineCity = require("./defineCity.js");

exports.getMenuForCity = function () {

    //var promise = require('selenium-webdriver').promise;
    var menuMoreElement = browser.findElements(By.xpath('//div[@class="home-tabs__more"]/child::div/descendant::*[@class="home-tabs__more-item"]'));
    //var menuElementsCount = menuMoreElement.size();



    browser.element(By.xpath('//*[@data-statlog="tabs.more"]')).click();
    browser.wait(element(By.xpath('//div[@class="home-tabs__more"]')).isDisplayed());


    //TODO: change method to fetch all menu items
    var menuItemsCount = menuMoreElement.length;


    
    /*menuMoreElement.then(function (elements) {
        var menuForCity = elements.map(function (elem) {
            return elem.getInnerHtml();
        });
        promise.all(menuForCity).then(function (menuMoreItems) {
            menuMoreItems = [''];
            //return menuMoreItems;
        })
    });*/
    /*menuMoreElement.then(function (elements) {
        elements.forEach(function (element) {
            element.innerHTML().then(function(text){
                console.log(text);
                //var menuItem = text;
                menuForCity.push(text);
        //menuForCity = text;
         //console.log(menuForCity);

     })
    })
});*/
    console.log(menuMoreElement.length);
        };
