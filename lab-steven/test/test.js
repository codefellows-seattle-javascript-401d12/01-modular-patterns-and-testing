'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet', function() {
  describe('#greet', function() {
    it('Expected to output "hello <name>"', function() {
      var result = greet.greet(process.argv[2]);
      assert.ok(result === `hello ${process.argv[2]}`, `Instead says ${result}`);
    });
  });
});
