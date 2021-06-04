/*
Recursion 

Wrirte a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise, it returns false. 
*/

function someRecursive(arr, callback) {
	// base case, if no array, then false
	if (arr.length === 0) return false;

	// if there is a first index in array
	if (callback(arr[0])) return true;

	// now removes first index, and repeats function
	return someRecursive(arr.slice(1), callback);
}
console.log(someRecursive([1, 2, 3, 4, 5], (val) => val > 2));
