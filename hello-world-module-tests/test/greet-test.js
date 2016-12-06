'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('should return hey Jinho!', function() {
      var result = greet.sayHey('Jinho');
      assert.ok(result === 'hey Jinho!', 'not equal to hey Jinho!');
    });
