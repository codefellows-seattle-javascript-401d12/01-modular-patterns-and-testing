'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Test greet file', function() {
  describe('#sayHey', function() {
    it('should return what\'s up {name}', function() {
      assert.ok(greet.sayHey('jonny') === 'what\'s up jonny!', 'sayHey function does not return what\'s up jonny');
    });
    it('should return missing name error', function() {
      assert.throws(function() {
        greet.sayHey();
      }, 'error not thrown when it should have been');
    });
  });
  describe('#sayBye', function() {
    it('should return see ya later {name}', function() {
      assert.ok(greet.sayBye('jonny') === 'See ya later jonny!', 'sayBye function does not return see ya later jonny!');
    });
    it('should return missing name error', function(){
      assert.throws(function() {
        greet.sayBye();
      }, 'error not thrown when it should have been');
    });
  });
});
