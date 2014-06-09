var assert = require('assert'),
	cs = require('./../main'),
	calcStats = new cs();

describe('Calc Stats Tests: ', function() {
	it('get Length', function() {
		assert.equal( calcStats.getLength([1,2,3]), 3);
		assert.equal( calcStats.getLength([1,2,3,4,5]), 5);
	});
	it('get sum', function() {
		assert.equal( calcStats.getSum([1,2,3]), 6);
		assert.equal( calcStats.getSum([1,2,3,4,5]), 15);
	});
	it('get average', function() {
		assert.equal( calcStats.getAverage([1,2,3]), 2);
		assert.equal( calcStats.getAverage([1,2,3,4,5]), 3);
	});
});