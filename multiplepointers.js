/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist. 
*/

// First solution (naive version)
// Using nested loop uses O(N^2)

function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
}
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// Refactoring for time complexisty O(N)

function sumZero(arr) {
	// first pointer index 0
	let left = 0;
	// second pointer at last index (using -1 since index starts at 0)
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2,2]

/*
First compare first index (left) and last index (right)
If sum = 0, then we are done. 
But if sum > 0, then we move right pointer down (right--) and add to first index. 
If sum < 0, then we add 1 to left pointer, and move pointer to next index, moving towards middle. 

This reduces time complexity to O(N) with only one loop 
*/

// Challenge

/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted. 
*/

function countUniqueValues(arr) {
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 3, 5, 6, 7, 7, 7])); // 5

/*
i begins at first index and j starts at second index. 
Both are compared and if they are the same, j moves onto the next index
When i and j are different, i moves onto the next index, and is replaced with whatever number is at j index. 
This now helps us keep track of every unique number in the array. 
At the end, we add 1 to where i index is to account for the last number.
*/
