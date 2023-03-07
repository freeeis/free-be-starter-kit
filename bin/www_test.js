const path = require('path');

let app = require(path.join(__dirname, './baseServer'))('127.0.0.1', 8003, 'test');

module.exports = app;