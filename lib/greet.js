'use strict';

module.exports = exports = {};
var name = process.argv[2];

exports.sayHi = function(name) {
  if(arguments.length === 0) throw new Error('name not provided');
  console.log(`hi ${name}!`);
  return `hi ${name}!`;
};

exports.sayHi(name);
