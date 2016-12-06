'use strict';

module.exports = exports = {};

exports.greet = function(name) {
  //It was not specified in the lab assignment,
  //but we could check if name is missing and throw
  //an error.
  return `hello ${name}`;
};

// console.log(process.argv);
//Check if this module is being used from the command line.
if(process.argv[1].indexOf('greet.js') === process.argv[1].length - 8) {
  // console.log('Process is running greet.js');
  if(process.argv.length > 2) {
    console.log(exports.greet(process.argv[2]));
  }
}
