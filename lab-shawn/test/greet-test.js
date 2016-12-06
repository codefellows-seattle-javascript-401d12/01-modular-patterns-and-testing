'use strict';

const greeting = require('../lib/greet.js');
const assert = require('assert');


describe('Greet Module', function(){
  describe('#greet', function(){
    it('should return Hello shawn', function(){
      var result = greeting.greet('shawn');
      assert.ok(result === 'Hello, shawn', 'not equal to Hello, shawn');
    })
  })
});
