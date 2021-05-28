/*
Sliding Window 

Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. 

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead. 
*/

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray.

function minSubArrayLen(arr, sum) {
	// define holding places for start, end, total, min length
	let start = 0;
	let end = 0;
	let total = 0;
	let minLen = Infinity;

	while (start < arr.length) {
		// if current window doesn't add up to given sum, move window to the right
		if (total < sum && end < arr.length) {
			total += arr[end];
			end++;
		}
		// if current window adds up to at least the sum given, then we can shrink window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= arr[start];
			start++;
		}
		// if current total is less than required total, then break
		else {
			break;
		}
	}
	// if reqs not met, then return 0
	return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
