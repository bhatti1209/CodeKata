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

	it('get factors', function() {
		// assert.deepEqual(primeFactors.getFactors(2, 2), [2]);
		assert.deepEqual(primeFactors.getFactors(4, 2), [2,2]);
		// assert.deepEqual(primeFactors.getFactors(10, 2), [2,5]);
	});
});