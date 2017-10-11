exports.defineCity = function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://yandex.ru');
    var City = element(by.xpath('string(//*[@class[contains(.,"geolink")]]//child::span/text())'));
    console.log(City);
    //return City;
};