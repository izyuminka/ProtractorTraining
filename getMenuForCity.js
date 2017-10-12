exports.defineCity = function () {

    var City = browser.findElement(By.xpath('//*[@class[contains(.,"geolink")]]//child::span'));
    City.getText().then(text => console.log(text));
    //console.log(City);
    //return City;
};