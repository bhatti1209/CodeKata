// Factorize a positive integer number into its prime factors.

// For example:
// 	 2 -> [2]
// 	 3 -> [3]
// 	 4 -> [2,2]
// 	 6 -> [2,3]
// 	 9 -> [3,3]
// 	12 -> [2,2,3]
// 	15 -> [3,5]

// Cyber-dojo session id: AE4CF0 

var codeKata = codeKata || {};
(function PrimeFactors (myNs) {
	myNs.PrimeFactors = function (){
		// private variables go here
		var self = this;
		this.factors = [];
	};

	myNs.PrimeFactors.prototype.isNumberDivisble = function(number, diviser) {
		return (number % diviser === 0);
	};
	
	myNs.PrimeFactors.prototype.getRemainder = function(number, diviser) {
		return number/diviser;
	};

	myNs.PrimeFactors.prototype.getNextvalue = function(number, diviser) {
		return this.isNumberDivisble(number, diviser) ?
			this.getRemainder(number, diviser) : number;
	};

	myNs.PrimeFactors.prototype.getLowestFactor = function(number, diviser) {
		if(number == 1)
			return [1];

		var nextValue = this.getNextvalue(number, diviser);
		if(nextValue === 1 || number !== nextValue){
			return diviser;
		}
		else{
			return this.getLowestFactor(nextValue, diviser + 1);
		}
	};

	myNs.PrimeFactors.prototype.getAllFactors = function(number) {
		var nextFactor = this.getLowestFactor(number, 2);
		var remainder = this.getRemainder(number, nextFactor);
		this.factors.push(nextFactor);

		if(remainder === 1){
			return this.factors;
		}
		else{
			return this.getAllFactors(remainder, 2);
		}
	};

	myNs.PrimeFactors.prototype.getFactors = function(number) {
		this.factors = [];
		return this.getAllFactors(number);
	};
})(codeKata);

module.exports = codeKata.PrimeFactors;