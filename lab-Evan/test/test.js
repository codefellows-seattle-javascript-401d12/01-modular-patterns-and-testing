'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet module', function() {
  describe('#greet()', function() {
    it('should return hey plus the name passed in', function() {
      let greetingString = greet.greet('Evan');
      assert.ok(greetingString === 'hello Evan', 'string does not match hello Evan');
    });
  });
});
