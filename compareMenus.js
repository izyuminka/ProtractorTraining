var getMenuForCity = require("./getMenuForCity.js");
var defineCity = require("./defineCity.js");

exports.compareMenus = function () {
    var uniqueMenuItems = function compare(array1,array2) {
        array1.filter(function (obj) {
            return array2.indexOf(obj) === -1;
        })
    }

};