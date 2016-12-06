'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Test Module', function () {
  describe('#greet', function () {
    //pointing back to run sayHello function
    it('should return hello erick!', function () {
      var result = greet.greet(process.argv[2]);
      //creating variable that stores value of sayHello
      assert.ok(result === `hello ${process.argv[2]}!`, `not equal to hello ${result}!`);
      //using ok method to display result status
    });
    it('should throw error that name is missing', function () {
      assert.throws(function() {
        greet.greet();
      }, 'no error thrown');
    });
  });
});
