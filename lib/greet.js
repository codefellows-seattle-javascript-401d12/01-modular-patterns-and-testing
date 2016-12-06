'use strict';

module.exports = exports = {};

exports.greet = function(name) {
  if(!name) throw new Error('Param name is missing');
  return `hello ${name}`;
};

//Check if this module is being used from the command line.
if(process.argv[1].indexOf('greet.js') === process.argv[1].length - 8) {

  // Now that we are throwing an error when no name is specified,
  // we can let our method check for the exception.
  // if(process.argv.length > 2) {
  //   console.log(exports.greet(process.argv[2]));
  // }
  console.log(exports.greet(process.argv[2]));

  //NOTE: We may want to catch the error and show a nicer
  //      message to the command line user, or we could
  //      check the length of process.argv, as commented out above.
}
