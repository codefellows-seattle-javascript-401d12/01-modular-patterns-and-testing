'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function () {
  describe('#greet', function () {
    //pointing back to run sayHello function
    it('should return hello erick!', function () {
      var result = greet.greet('erick');
      //creating variable that stores value of sayHello
      assert.ok(result === 'hello erick!', 'not equal to hello erick!');
      //using ok method to display result status
    });
    it('should throw error that name is missing', function () {
      assert.throws(function() {
        greet.greet();
      }, 'error not thrown');
    });
  });
});
