var assert = require('assert'),
	ly = require('./../main'),
	leapYear = new ly();

describe('Leap Year Tests: ', function() {
	it('is normal leap year', function() {
		assert.equal(leapYear.isLeap(1996), true);
	});

	it('is normal year', function() {
		assert.equal(leapYear.isLeap(2001), false);
	});

	it('is atypical year', function() {
		assert.equal(leapYear.isLeap(1900), false);
	});

	it('is atypical leap year', function() {
		assert.equal(leapYear.isLeap(2000), true);
	});
});