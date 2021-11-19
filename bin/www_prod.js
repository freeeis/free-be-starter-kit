const path = require('path');

require(path.join(__dirname, './baseServer'))('127.0.0.1', 8002, 'production');
