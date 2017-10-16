//var defineCity = require("./defineCity.js");

exports.getMenuForCity = function () {

    //var promise = require('selenium-webdriver').promise;

    //var menuElementsCount = menuMoreElement.size();
    //var menuForCity = [];

    var mArr = new Array();

    browser.element(By.xpath('//*[@data-statlog="tabs.more"]')).click();
    browser.wait(element(By.xpath('//div[@class="home-tabs__more"]')).isDisplayed());
    var menuMoreElement =
        browser.findElements(By.xpath('//div[@class="home-tabs__more"]/child::div/descendant::*[@class="home-tabs__more-item"]'))
            .then(function (elements) {
                elements.forEach(function (element) {
                    element.getText().then(function(text){
                        mArr.push(text);
                        //var menuItem = String(text);
                        //menuForCity.concat(text);
                        //menuForCity = text;
                        //console.log(menuForCity);

                    });
                })
            }).then(function (value) { console.log(mArr) });


    //console.log("A!" + menuMoreElement)
        //var moreMenu = Array.from(menuMoreElement);

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
    //console.log(moreMenu.length);


};

