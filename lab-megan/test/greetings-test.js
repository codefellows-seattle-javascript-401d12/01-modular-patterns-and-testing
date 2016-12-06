'use strict';

const greet = require('../lib/greetings.js');

const assert = require('assert');

describe('Greet Module', function () {
  describe('#sayHello', function() {
    it('should return Hello, Scott.', function () {
      var result = greet.sayHello('Scott');
      assert.ok(result === 'Hello, Scott.', 'Not equal to Hello, Scott.');
    });
  });

  describe('#sayGoodbye', function() {
    it('should return Goodbye, it was nice to meet you.', function() {
      var goodbye = 'Goodbye, it was nice to meet you.';
      assert.ok(goodbye === 'Goodbye, it was nice to meet you.', 'Not equal to Goodbye, it was nice to meet you.');
    });
  });
});
