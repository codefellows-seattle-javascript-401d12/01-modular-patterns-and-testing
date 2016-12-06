'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');
var name = process.argv[2];

describe('Greet Module', function() {
  describe('#sayHi', function() {
    it('should return hi {name}!', function() {
      var result = greet.sayHi(name);
      assert.ok(result === `hi ${name}!`, 'not equal to hi hawa!');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.sayHi();
      }, 'error not thrown');
    });
  });
});
