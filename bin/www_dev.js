const path = require('path');

require(path.join(__dirname, './baseServer'))('0.0.0.0', 8000, 'development');
