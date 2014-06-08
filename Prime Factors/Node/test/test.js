var assert = require('assert'),
	pf = require('./../main'),
	primeFactors = new pf();

describe('Prime Factors Tests: ', function() {
	it('is number divisible', function() {
		assert.equal(primeFactors.isNumberDivisble(2, 2), true);
		assert.equal(primeFactors.isNumberDivisble(15, 5), true);
		assert.equal(primeFactors.isNumberDivisble(3, 2), false);
	});

	it('get remainder', function() {
		assert.equal(primeFactors.getRemainder(2, 2), 1);
		assert.equal(primeFactors.getRemainder(15, 5), 3);
		assert.equal(primeFactors.getRemainder(3, 2), 1.5);
	});

	it('get next iteration value', function() {
		assert.equal(primeFactors.getNextvalue(2, 2), 1);
		assert.equal(primeFactors.getNextvalue(15, 5), 3);
		assert.equal(primeFactors.getNextvalue(3, 2), 3);
	});

	it('get lowest factor', function() {
		assert.equal(primeFactors.getLowestFactor(2, 2), 2);
		assert.equal(primeFactors.getLowestFactor(3, 2), 3);
		assert.equal(primeFactors.getLowestFactor(5, 2), 5);
		assert.equal(primeFactors.getLowestFactor(6, 2), 2);
		assert.equal(primeFactors.getLowestFactor(9, 2), 3);
	});

	it('get factors', function() {
		assert.deepEqual(primeFactors.getFactors(2), [2]);
		assert.deepEqual(primeFactors.getFactors(3), [3]);
		assert.deepEqual(primeFactors.getFactors(4), [2,2]);
		assert.deepEqual(primeFactors.getFactors(6), [2,3]);
		assert.deepEqual(primeFactors.getFactors(9), [3,3]);
		assert.deepEqual(primeFactors.getFactors(12), [2,2,3]);
		assert.deepEqual(primeFactors.getFactors(15), [3,5]);
	});
});