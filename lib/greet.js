'use strict';

module.exports = exports = {};

exports.greet = function(name) {
  console.log(`hello ${name}`);
  if (!arguments.length) throw new Error('name not provided');
  return `hello ${name}!`;
};

console.log('hello', process.argv[2]);
