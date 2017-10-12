exports.defineCity = function (parameters) {
    var testCity;
    testCity = parameters;
    var EC = protractor.ExpectedConditions;

    var defaultCityElement = browser.findElement(By.xpath('//*[@class[contains(.,"geolink")]]//child::span'));
    //var defaultCity;

        defaultCityElement.getText().then(function (text) {

            if (browser.params.City.indexOf(text) > -1) {
                testCity = text;
                //defaultCity = text;
                //testCity = defaultCity;
                console.log(testCity);
            }
            else {
                browser.element(By.xpath('//a[@data-statlog="head.region.setup"]')).click();
                browser.element(By.id('city__front-input')).clear().then(function (value) {
                    browser.element(By.id('city__front-input')).sendKeys(testCity);
                });

                //TODO: add expression to get suggested city from dropdown

                browser.wait(EC.elementToBeClickable(element(By.css('.button.form__save'))),5000);
                browser.element(By.css('.button.form__save')).click();

                defaultCityElement.getText().then(function (text) {
                    testCity = text;
                });
                //console.log("Here getMenu method should be called.");
            }
                return testCity;
        });
        //console.log('Wrong City. Call changeCity method.');




};