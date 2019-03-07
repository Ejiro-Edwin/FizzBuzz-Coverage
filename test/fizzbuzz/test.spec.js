const assert = require('assert');
const fizzbuzz = require('../..');

describe('fizzbuzz', function(){

  it('should return null when passed a non-number', function(){
      assert.equal(fizzbuzz('abc'), null);
  });
  it('should return fizzbuzz when divisible by 15', function () {
      assert.equal(fizzbuzz(45), 'fizzbuzz');
  });
  it('should return fizz when divisible by 3 but not 5', function () {
      assert.equal(fizzbuzz(6), 'fizz');
  });

  it('should return buzz when divisible by 5 and not 3', function () {
      assert.equal(fizzbuzz(10), 'buzz');
  });

  it('should return the input otherwise', function () {
      assert.equal(fizzbuzz(7), '7');
  });

});