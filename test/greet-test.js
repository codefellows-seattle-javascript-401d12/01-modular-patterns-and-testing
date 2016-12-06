'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greet', function() {
    it('should return hello Geoff', function() {
      assert.ok(greet.greet('Geoff') === 'hello Geoff', 'not equal to hello Geoff');
    });
    it('should throw error for missing name', function() {
      assert.throws(function() {
        greet.greet();
      });
    });
  });
});
