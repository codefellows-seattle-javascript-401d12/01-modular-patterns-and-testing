'use strict';

module.exports = exports = {};

exports.sayHello = function(name) {
  if (arguments.length === 0) throw new Error('name not entered');
  return `hello ${name}!`;
};
