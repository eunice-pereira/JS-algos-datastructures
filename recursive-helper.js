// example of helper recursion function

function collectOddValues(arr) {
	let result = [];

	// defining recursive function

	function helper(helperInput) {
		// base case
		if (helperInput.length === 0) {
			return;
		}
		// checking if first element is odd
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		// call helper function and make subarray, shrinking array as we go
		// recursion, function calling itself
		helper(helperInput.slice(1));
	}

	// executing helper function
	helper(arr);

	return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
