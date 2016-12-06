'use strict';
module.exports = {};

if (process.argv[2]) console.log('Hello, ' + process.argv[2] + '!');

module.exports.greet = function(name) {
  if (arguments.length === 0) throw new Error('No name provided!');
  return 'Hello, ' + name + '!';
};
