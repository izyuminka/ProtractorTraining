exports.defineCity = function (parameters) {
    var testCity;
    testCity = parameters;
    var EC = protractor.ExpectedConditions;


    var defaultCityElement = browser.findElement(By.xpath('//*[@class[contains(.,"geolink")]]//child::span'));

        defaultCityElement.getText().then(function (text) {

            if (browser.params.City.indexOf(text) > -1) {
                testCity = text;
                return testCity;
            }
            else {
                browser.element(By.xpath('//a[@data-statlog="head.region.setup"]')).click();
                browser.element(By.id('city__front-input')).clear().then(function (value) {
                    browser.element(By.id('city__front-input')).sendKeys(testCity);
                });

                    browser.wait(EC.presenceOf(element(By.xpath("//*[@class='b-autocomplete-item__reg' and text()='"+testCity+"']"))),5000).then(function (value) {
                    browser.element(By.xpath("//ul[contains(@class, \"input__popup-items\")]/li[1]/*[@class=\"b-autocomplete-item__reg\" and text()='"+testCity+"']")).click();
                });

                browser.wait(EC.elementToBeClickable(element(By.css('.button.form__save'))),5000);
                browser.element(By.css('.button.form__save')).click();
            }


        });

    //browser.wait(EC.presenceOf(element(By.xpath('//*[@class[contains(.,"geolink")]]//child::span'))),5000);



};