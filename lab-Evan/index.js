'use strict';

const greet = require('./lib/greet.js');
greet.greet('Evan');


// COMMAND LINE UTILITY - EXTRA CREDIT
const clArgument = process.argv[2];
console.log(`Hey there from the ${clArgument}`);
