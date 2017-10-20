//test configuration
exports.config = {
    specs: ['compare-spec.js'],
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    params: {
        City: ['Минск', 'Москва']
    }
};