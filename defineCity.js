var getMenuForCity = require("./getMenuForCity.js");

var cityElement = By.xpath('//*[@class[contains(.,"geolink")]]//child::span');
var citySaveButton = By.css('.button.form__save');
var EC = protractor.ExpectedConditions;

var myArray = [],
    testCity;

module.exports = {

    changeCity: function (city) {
        var cityChangeLink = By.css('[data-statlog^="head.region.setup"]');
        var cityInputField = By.id('city__front-input');
        var citySuggestion = By.xpath("//*[@class='b-autocomplete-item__reg' and text()='" + city + "']");
        var citySelect = By.xpath("//li[1]/*[@class=\"b-autocomplete-item__reg\" and text()='" + city + "']");

        browser.element(cityChangeLink).click(); //Click on City name to open page for location changing
        browser.manage().timeouts().pageLoadTimeout(5000); //Wait for page load
        browser.element(cityInputField).clear().sendKeys(city); //Enter the name of city under test
        browser.wait(EC.presenceOf(element(citySuggestion)), 5000) //Wait for drop-down
            .then(function () {
                browser.element(citySelect).click(); //Click on required drop-down value to select it
            });
        browser.wait(EC.elementToBeClickable(element(citySaveButton)), 5000); //Wait for [Save] button
        module.exports.saveChangedCity(city); //Call method to save city under test value in the system
    },

    saveChangedCity: function (city) {
        var menuMore = By.xpath('//*[@data-statlog="tabs.more"]');

        element(citySaveButton).click(); //Click on [Save] button

        browser.sleep(2000); //TODO: get rid of sleep

        browser.wait(EC.visibilityOf(element(menuMore)), 5000); //Wait for <More> menu item is available
        browser.findElement(cityElement).getText().then(function (text) { //Check if city has been changed
            if (text === city) {
                getMenuForCity.getMenuForCity(testCity); //Retrieve <More> menu
                console.log(getMenuForCity.menu);
            }
            else {
                console.log("City hasn't been changed. Edit script!"); //Print when City is different from the one expected
            }
        });
    },

    storeTestArray: function (city) {
        myArray.push(city); //Add City to Array containing already tested cities
    },

    isCityTestable: function (array) {

        browser.findElement(cityElement).getText().then(function (city) { //Check what city is set up on accessing the site
            for (var i = 0; i < array.length; i++) { //Go through all test parameters
                if (array[i] === city) { //Check if city set up belongs to test parameters
                    testCity = browser.params.City[i]; //If true, save City to variable
                    module.exports.storeTestArray(testCity); //Push City to Array as already tested
                    getMenuForCity.getMenuForCity(testCity);
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

        if (browser.params.City.sort().join() === myArray.sort().join()) {
            console.log("City arrays are equal.")
        }
        else {
            console.log("There is a problem with arrays! Test array contains: '" + myArray + "'");
            console.log(myArray);
        }
        //console.log(getMenuForCity.menu);
    }
};