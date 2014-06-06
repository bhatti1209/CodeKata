// cyber-dojo session id: D885A4
var codeKata = codeKata || {};

(function LeapYear (myNs) {
	myNs.LeapYear = function (){
		// private variables go here
		var self = this;
	};

	myNs.LeapYear.prototype.isLeap = function(year) {
		return !this.isAtypicalCommonYear(year) && this.isTypicalLeapYear(year);
	};

	myNs.LeapYear.prototype.isAtypicalCommonYear= function(year) {
		return (year % 100 == 0 && !(year % 400 == 0));
	};

	myNs.LeapYear.prototype.isTypicalLeapYear= function(year) {
		return (year % 4 == 0);
	};
})(codeKata);

module.exports = codeKata.LeapYear;