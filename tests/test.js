'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');
var name = process.argv[2];

describe('Greet Module', function() {
  describe('#sayHi', function() {
    it('should return Hi {name}!', function() {
      var result = greet.sayHi(name);
      assert.ok(result === `Hi ${name}!`, 'not equal to Hi hawa!');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.sayHi();
      }, 'error not thrown');
    });
  });
  describe('#saySeeYaLater', function() {
    it('should return See ya later {petName}!', function(){
      var results = greet.saySeeYaLater('Gaara');
      assert.ok(results === 'See ya later, Gaara!', 'not equal to See ya later, Gaara!');
    });
    it('should throw a missing name error', function(){
      assert.throws(function(){
        greet.saySeeYaLater();
      }, 'error not thrown');
    });
  });
});
