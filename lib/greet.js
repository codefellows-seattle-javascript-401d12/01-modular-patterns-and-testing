'use strict';

module.exports = exports = {};

exports.sayHey = function(name) {
  if(arguments.length === 0) throw new Error('no name was provided');
  return `what\'s up ${name}!`;
};

exports.sayBye = function(name) {
  if(arguments.length === 0) throw new Error('no name was provided');
  return `See ya later ${name}!`;
};
