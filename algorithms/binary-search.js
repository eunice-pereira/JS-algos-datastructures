/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1. 

1. function accepts a sorted array and a value 
2. create a left pointer at start of array and right pointer at end of array
3. while left pointer comes before right pointer: 
- create pointer in the middle 
- if you find value you want, return index 
- if value is too small, move left pointer up 
- if value is too large, move right pointer down 
- if value is not found, return -1 
*/

function binarySearch(arr, val) {
	// left pointer at start
	let start = 0;

	// right pointer at end
	let end = arr.length - 1;

	// middle pointer, rounds down to index
	let middle = Math.floor((start + end) / 2);

	// while mid point is not equal to value and starting point is less than the end point
	while (arr[middle] !== val && start <= end) {
		// if value is less than the middle, move end point down to eliminate half of array
		// new end point is now middle - 1
		if (val < arr[middle]) end = middle - 1;
		// if the value > middle, then move start point up to eliminate half of array
		// new start point is now middle + 1
		else start = middle + 1;

		// before looping again, define middle var with updated start and end points
		middle = Math.floor((start + end) / 2);
	}

	// if middle value is equal to value, return middle index
	// else, (if not found), return -1
	return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1,2,2,4,5,5,7], 3));
