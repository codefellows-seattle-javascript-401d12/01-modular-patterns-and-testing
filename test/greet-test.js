'use strict';

const greeting = require('../lib/greet.js');
const assert = require('assert');

describe('Greeting Module', function() {
  describe('#greet', function() {
    it('should return hello and name if input in command line', function() {
      var inputName = process.argv[2];
      let result = greeting.greet(inputName);
      assert.ok(result === `hello ${inputName}!`, 'but not equal to hello and input name.');
    });
    it('should throw an undefined if name argument is not passed in command line', function() {
      assert.throws(function() {
        greeting.greet();
      }, 'error not thrown');
    });
  });
});
