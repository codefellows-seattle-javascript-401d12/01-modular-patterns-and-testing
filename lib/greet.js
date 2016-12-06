'use strict';

module.exports = exports = {};

exports.greet = function(name) {
  if (arguments.length === 0) throw new Error ('name not included');
  return ('hello ' + name);
};

exports.favPlace = function(place) {
  if (arguments.length === 0) throw new Error ('place not included');
  return ('your favorite place is '+ place);
};
