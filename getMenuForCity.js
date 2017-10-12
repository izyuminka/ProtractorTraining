exports.defineCity = function () {

    var defaultCityElement = browser.findElement(By.xpath('//*[@class[contains(.,"geolink")]]//child::span'));
    var defaultCity;

    defaultCityElement.getText().then(function (text) {
        if (browser.params.City.indexOf(text) > -1) {
            defaultCity = text;
            console.log(defaultCity);
        }
        else {
            console.log('Wrong City. Call changeCity method.')
        }


    });


};