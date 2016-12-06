'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greet', function () {
    it('should return "hello <name>"', function() {
      // var result = greet.greet('danny');
      var result = greet.greet(process.argv[2]);
      // assert.ok(result === 'hello danny', 'not equal to hello! danny');
      assert.ok(result === `hello ${process.argv[2]}`, 'not equal to hello! name');
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
