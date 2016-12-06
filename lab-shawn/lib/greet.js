'use strict';

module.exports = exports = {};

exports.greet = function(name){
  if(arguments.length === 0) throw new Error('No Name Provided');
  console.log(`Hello, ${name}`) ;
  return (`Hello, ${name}`) ;
};
