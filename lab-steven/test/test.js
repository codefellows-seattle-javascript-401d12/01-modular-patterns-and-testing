'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet', function() {
  describe('#greet', function() {
    it('Expected to output "hello <name>"', function() {
      var result = greet.greet('Steven');
      assert.ok(result === 'hello Steven', `Instead says ${result}`);
    });
  });
});
