'use strict';

const kgreet = require('../greet.js');
const assert = require('assert');

describe('Greet module', function() {
  describe('#greet', function() {
    it('should return "Hello, Newman!"', function () {
      assert.ok(kgreet.greet('Newman') === 'Hello, Newman!', 'Not equal to "Hello, Newman!"');
    });

    it('should throw an error', function () {
      assert.throws(function() {
        kgreet.greet();
      }, 'No error thrown!"');
    });
  });
});
