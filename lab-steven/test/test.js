'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet', function() {
  describe('#greet', function() {
    it('Expected to output "hello <name>"', function() {
      assert.ok(exports.greet('Steven') === 'hello Steven', 'Does not say "hello <name>"');
    });
  });
});
