'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');
var name = process.argv[2];

describe('Greet Module', function() {
  describe('#sayHello', function() {
    it('should return hello {name}!', function() {
      var result = greet.sayHello(name);
      assert.ok(result === `hello ${name}!`, 'not equal to hello peter!');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.sayHello();
      }, 'error not thrown');
    });
  });
});
