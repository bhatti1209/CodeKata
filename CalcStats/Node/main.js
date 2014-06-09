// Your task is to process a sequence of integer numbers
// to determine the following statistics:
//     o) minimum value
//     o) maximum value
//     o) number of elements in the sequence
//     o) average value

// For example: [6, 9, 15, -2, 92, 11]
//     o) minimum value = -2
//     o) maximum value = 92
//     o) number of elements in the sequence = 6
//     o) average value = 21.833333

// Cyber-dojo session id: 510D28 

var codeKata = codeKata || {};
(function CalcStats (myNs) {
	myNs.CalcStats = function (){
		// private variables go here
	};
	myNs.CalcStats.prototype.getLength = function(inputArray) {
		return inputArray.length;
	};
	myNs.CalcStats.prototype.getSum = function(inputArray) {
		return inputArray.reduce(function(prev, current){
			return prev + current;
		});
	};
	myNs.CalcStats.prototype.getAverage = function(inputArray) {
		return this.getSum(inputArray) / this.getLength(inputArray);
	};
	myNs.CalcStats.prototype.getSorted = function(inputArray) {
		return inputArray.sort(compareNumbers);
	};
	myNs.CalcStats.prototype.getMin = function(inputArray) {
		return getFirstElement(inputArray.sort(compareNumbers));
	};
	myNs.CalcStats.prototype.getMax= function(inputArray) {
		return getFirstElement(inputArray.sort(compareNumbers).reverse());
	};

	function compareNumbers(a,b){
		return a - b;
	}
	function getFirstElement(inputArray){
		return inputArray.splice(0,1);
	}
})(codeKata);

module.exports = codeKata.CalcStats;