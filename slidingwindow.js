/*
Write a function called maxSubaraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array. 
*/

// Naive solution O(N^2)

function maxSubarraySum(arr, num) {
	// making sure number is not greater than length of array
	if (num > arr.length) {
		return null;
	}
	// accounting for an array that may have all negatives
	let max = -Infinity;
	// loop from beginning of array
	// condition goes up to length of array minus the number; this is the last set of numbers we can add
	for (let i = 0; i < arr.length - num + 1; i++) {
		temp = 0;
		// storing our sum each loop
		// j looks ahead and adds next index to temp variable up to num
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		// compare temp to max
		// max is only replaced if greater than temp
		if (temp > max) {
			max = temp;
		}
		console.log(temp, max);
	}
	return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19

// This method is inneficient with a large array, because we are looping through from the beginning and updating temp every time

// Refactored - O(N)

function maxSubarray(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	// if length is larger than number, then return null (safety)
	if (arr.length < num) return null;
	// adding the first set of numbers in array
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	// i is now at number 'end of window'
	for (let i = num; i < arr.length; i++) {
		// subtracting first number in tempSum and adding the next number in array
		// this is the sliding window
		tempSum = tempSum - arr[i - num] + arr[i];
		// comparing both placeholders to return the max
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}
console.log(maxSubarray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
