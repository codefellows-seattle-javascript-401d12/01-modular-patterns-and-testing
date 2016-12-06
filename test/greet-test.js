'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greet', function() {
    it('should return hello Geoff', function() {
      assert.ok(greet.greet('Geoff') === 'hello Geoff', 'not equal to hello Geoff');
    });
    //We could also check for missing name param,
    //but it was not specified that that is an
    //exception. Right now, it will say 'hello undefined'.
  });
});
