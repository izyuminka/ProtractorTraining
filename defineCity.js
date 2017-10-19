var getMenuForCity = require("./getMenuForCity.js");

var cityElement = By.xpath('//*[@class[contains(.,"geolink")]]//child::span');
var citySaveButton = By.css('.button.form__save');
var EC = protractor.ExpectedConditions;

var myArray = [], testCity, cityMenu, menu = [];

module.exports = {

    changeCity: function (city) {
        var cityChangeLink = By.css('[data-statlog^="head.region.setup"]');
        var cityInputField = By.id('city__front-input');
        var citySuggestion = By.xpath("//*[@class='b-autocomplete-item__reg' and text()='" + city + "']");
        var citySelect = By.xpath("//li[1]/*[@class=\"b-autocomplete-item__reg\" and text()='" + city + "']");

        browser.element(cityChangeLink).click();
        //1. Wait for page load
        browser.manage().timeouts().pageLoadTimeout(5000);
        browser.element(cityInputField).clear().sendKeys(city);
        //2. Wait for drop-down
        browser.wait(EC.presenceOf(element(citySuggestion)), 5000)
        //3. Select drop-down value
            .then(function () {
                browser.element(citySelect).click();
            });
        browser.wait(EC.elementToBeClickable(element(citySaveButton)), 5000);
        module.exports.saveChangedCity(city);
    },

    saveChangedCity: function (city) {
        var menuMore = By.xpath('//*[@data-statlog="tabs.more"]');

        element(citySaveButton).click();
        //TODO: get rid of sleep
        browser.sleep(2000);
        browser.wait(EC.visibilityOf(element(menuMore)), 5000);
        //check if city is changed
        browser.findElement(cityElement).getText().then(function (text) {
            if (text === city) {

                cityMenu.set(""+city+"", ""+getMenuForCity.getMenuForCity()+"");
                //cityMenu[city] = getMenuForCity.getMenuForCity();

                console.log("City has been successfully changed to: '" + city + "'.");
            }
            else {
                console.log("City hasn't been changed. Edit script!");
            }
        });
    },

    storeTestArray: function (city) {
        myArray.push(city);
    },

    isCityTestable: function (array) {

        browser.findElement(cityElement).getText().then(function (city) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === city) {
                    testCity = browser.params.City[i];
                    module.exports.storeTestArray(testCity);
                    //cityMenu.set(""+city+"", ""+getMenuForCity.getMenuForCity()+"");
                    //cityMenu.set(keyCity=city,keyMenu=getMenuForCity.getMenuForCity());
                    //cityMenu[city] = getMenuForCity.getMenuForCity();
                    //var keyCity = testCity;
                    var keyMenu = function(){
                        getMenuForCity.getMenuForCity();

                    };
                    cityMenu = {testCity:keyMenu};
                    //menu = Array.from(getMenuForCity.getMenuForCity());

                }
                else {
                    testCity = array[i];
                    module.exports.storeTestArray(testCity);
                    module.exports.changeCity(array[i]);
                }
            }
            module.exports.compareArrays();
        })
    },
    compareArrays: function () {
        //browser.params.City.sort();
        //myArray.sort();

        if (browser.params.City.sort().join() === myArray.sort().join()) {
            console.log("City arrays are equal.")
        }
        else {
            console.log("There is a problem with arrays! Test array contains: '" + myArray + "'");
            console.log(myArray);
        }
        //below print statements added for test purposes
        console.log(browser.params.City);
        console.log("test array: " + myArray);
        console.log("Last selected test city: " + testCity);
        //console.log(""+cityMenu.get("Минск") + " this was an attempt to print out map values")
        var mapIter = cityMenu.keys();
        console.log(mapIter.next().value);

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