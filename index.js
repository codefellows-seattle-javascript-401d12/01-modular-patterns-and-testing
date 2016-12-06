'use strict';

const greet = require('./lib/greet.js');
var name = process.argv[2];

greet.sayHi(name);
