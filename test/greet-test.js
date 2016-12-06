'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function () {
  describe('#sayHello', function () {
    //pointing back to sayHello function
    it('should return hello erick!', function () {
      var result = greet.sayHello('erick');
      assert.ok(result === 'hello erick!', 'not equal to hello erick!');
    });
    it('should throw a missing name error', function () {
      assert.throws(function() {
        greet.sayHello();
      }, 'error not thrown');
    });
  });
});
