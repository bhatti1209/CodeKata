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
	it('is sorted', function() {
		assert.deepEqual( calcStats.getSorted([]), []);
		assert.deepEqual( calcStats.getSorted([13]), [13]);
		assert.deepEqual( calcStats.getSorted([13,222,36]), [13,36,222]);
		assert.deepEqual( calcStats.getSorted([102,42,-3,4,15]), [-3,4,15,42,102]);
	});
	it('get min', function() {
		assert.equal( calcStats.getMin([13,222,36]), 13);
		assert.equal( calcStats.getMin([102,42,-3,4,15]), -3);
	});
	it('get max', function() {
		assert.equal( calcStats.getMax([13,222,36]), 222);
		assert.equal( calcStats.getMax([102,42,-3,4,15]), 102);
	});
});