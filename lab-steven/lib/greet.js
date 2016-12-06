'use strict';

module.exports = exports = {};

exports.greet = function(name) {
  console.log(`hello ${name}`);
  return `hello ${name}`;
};

exports.greet(process.argv[2]);
