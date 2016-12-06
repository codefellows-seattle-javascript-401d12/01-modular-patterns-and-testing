'use strict';

const expect = require('chai').expect
const kgreet = require('../greet.js');
const assert = require('assert');

describe('Greet module', function() {
  describe('#greet', function() {
    it('should return "Hello, Newman!"', function () {
      //assert.ok(kgreet.greet('Newman') === 'Hello, Newman!', 'Not equal to "Hello, Newman!"');
      expect(kgreet.greet('Newman')).equal('Hello, Newman!');
    });

    it('should throw an error', function () {
      //assert.throws(function() {
      //  kgreet.greet();
      //}, 'No error thrown!"');
      expect(function() {
         kgreet.greet()
      }).to.throw(Error);
    });

    it('1+1=2 test', function() {
        expect(1+1).equal(2);
    });
  });
});
