'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greet', function () {
    it('should return hello danny', function() {
      var result = greet.greet('danny');
      assert.ok(result === 'hello danny', 'not equal to hello! danny');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.greet();
      }, 'error not thrown');
    });
  });
  describe('#favPlace', function () {
    it('should return users favorite place', function() {
      var place = greet.favPlace('Whistler');
      assert.ok(place === 'your favorite place is Whistler', 'not equal to Whistler');
    });
  });

});
