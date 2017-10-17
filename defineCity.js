var getMenuForCity = require("./getMenuForCity.js");

var cityElement = By.xpath('//*[@class[contains(.,"geolink")]]//child::span');

var cityChangeLink = By.css('[data-statlog^="head.region.setup"]');
var cityInputField = By.id('city__front-input');
//var citySuggestion = By.xpath("//*[@class='b-autocomplete-item__reg' and text()='" + city + "']");
//var citySelect = By.xpath("//ul[contains(@class, \"input__popup-items\")]/li[1]/*[@class=\"b-autocomplete-item__reg\" and text()='" + city + "']");
var citySaveButton = By.css('.button.form__save');

var menuMore = By.xpath('//*[@data-statlog="tabs.more"]');

var EC = protractor.ExpectedConditions;

module.exports = {

    changeCity: function (city) {
        var citySuggestion = By.xpath("//*[@class='b-autocomplete-item__reg' and text()='" + city + "']");
        var citySelect = By.xpath("//ul[contains(@class, \"input__popup-items\")]/li[1]/*[@class=\"b-autocomplete-item__reg\" and text()='" + city + "']");

        browser.element(cityChangeLink).click();
        //ждать страницу
        browser.manage().timeouts().pageLoadTimeout(5000);
        browser.element(cityInputField).clear().sendKeys(city);
        //ждать дропдаун
        browser.wait(EC.presenceOf(element(citySuggestion)), 5000)
        //выбираешь елемент
        .then(function (value) {
            browser.element(citySelect).click();
        });
        browser.wait(EC.elementToBeClickable(element(citySaveButton)), 5000);
        module.exports.saveChangedCity(city);
    },

    saveChangedCity:function (city) {
        element(citySaveButton).click();
        //TODO: get rid of sleep
        browser.sleep(2000);
        browser.wait(EC.visibilityOf(element(menuMore)), 5000);
        //check if city is changed
        browser.findElement(cityElement).getText().then(function (text) {
            if (text === city) {
                console.log("City has been successfully changed to: '"+city+"'.");
            }
            else{
                console.log("City hasn't been changed. Edit script!");
            }
        });

    },

    storeTestArray: [''],

    isCityTestable: function (array) {
        browser.findElement(cityElement).getText().then(function (city) {
            for(var i=0; i<array.length; i++) {
                if (array[i] === city) {
                    module.exports.storeTestArray.push(browser.params.City[i])
                }
                else {
                    module.exports.changeCity(array[i]);
                    module.exports.storeTestArray.push(array[i])
                }
            }
            })
    },

        compareArrays: function() {

            if(browser.params.City === module.exports.storeTestArray){
                console.log("Arrays are equal.")
            }
            else{
                console.log("There is a problem with arrays!")
            }
        }


};

/*exports.defineCity = function (parameters) {

    testCity = parameters;



    //browser.manage().timeouts().pageLoadTimeout(10000);
    browser.wait(element(By.xpath('//*[@class[contains(.,"geolink")]]//child::span')).isDisplayed());
        browser.findElement(cityElement).getText().then(function (text) {

            if (browser.params.City.indexOf(text) > -1) {
                testCity = text;
                return testCity;
            }
            else {
                browser.element(By.xpath('//a[@data-statlog="head.region.setup"]')).click();
                //ждать страницу
                browser.element(By.id('city__front-input')).clear().sendKeys(testCity);
                //ждать дропдаун
                //выбираешь елемент
                browser.wait(EC.presenceOf(element(By.xpath("//*[@class='b-autocomplete-item__reg' and text()='" + testCity + "']"))), 5000).then(function (value) {
                    browser.element(By.xpath("//ul[contains(@class, \"input__popup-items\")]/li[1]/*[@class=\"b-autocomplete-item__reg\" and text()='" + testCity + "']")).click();
                });

                browser.wait(EC.elementToBeClickable(element(By.css('.button.form__save'))), 5000);
                browser.element(By.css('.button.form__save')).click();
               browser.sleep(10000)
                // EC.visibilityOf(element(By.xpath('//*[@data-statlog="tabs.more"]')), 30000)
            }

            //return testCity;

        });

};*/