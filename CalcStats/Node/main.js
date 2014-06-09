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
})(codeKata);

module.exports = codeKata.CalcStats;