'use strict';

module.exports = exports = {};

exports.welcome = function(name) {
  if (/[^a-z]/i.test(name)) throw new Error('non-alphabetical characters not allowed, or no name provided');
  if (arguments.length === 0) throw new Error('no name provided');
  var welcomeMessage = `Hello and welcome, ${name}! Glad you can be here!`;
  console.log(welcomeMessage);
  return welcomeMessage;
};

exports.farewell = function(name) {
  var farewellMessage = `Glad you could stay for a while, ${name}! Bye and see you next time!`;
  console.log(farewellMessage);
  return farewellMessage;
};
