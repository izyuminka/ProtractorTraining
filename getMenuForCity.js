var defineCity = require("./defineCity.js");

exports.getMenuForCity = function (testCity) {

    var testCityIndex = 0;


    for (testCityIndex = 0; testCityIndex < browser.params.City.length; testCityIndex++){
        testCity = browser.params.City[testCityIndex];
        console.log(getMenuForCity.getMenuForCity(testCity))
    }

     {

        const testCity = browser.params.City[testCityIndex];
        defaultCityElement.getText().then(function (text) {

            if (browser.params.City.indexOf(text) > -1) {
                defaultCity = text;
                console.log(defaultCity); //call method for extracting More menu
            }
            else {
                //defaultCity = browser.params.City[i];
                browser.element(By.xpath('//a[@data-statlog="head.region.setup"]')).click();
                browser.element(By.id('city__front-input')).sendKeys(testCity);
                browser.element(By.className('.button.form__save')).click();

                var menu
                console.log("Here getMenu method should be called.");
            }

        });
       //console.log('Wrong City. Call changeCity method.');
    }



};