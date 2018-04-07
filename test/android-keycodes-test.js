var tap = require('tap')
var androidKeycodes = require('../index.js')

tap.equal(androidKeycodes('ENTER'), 66);
tap.equal(androidKeycodes('Enter'), 66);

tap.equal(androidKeycodes('Space'), 62);
tap.equal(androidKeycodes(' '), 62);

tap.equal(androidKeycodes('foo'), undefined);
