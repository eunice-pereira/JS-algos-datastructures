/*
Recursion 

Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array. 
*/

// capitalizeFirst(['coffee', 'milk', 'muffin']) // ['Coffee', 'Milk', 'Muffin']

function capitalizeFirst(arr) {
	// if array only has one word, capitilize the first letter (index)
	if (arr.length === 1) {
		return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)];
	}
	// temporary array now held in res
	// removes last word until all words have been turned to upper case
	let res = capitalizeFirst(arr.slice(0, -1));

	// now pushing capitalized words to new array
	res.push(
		arr
			.slice(arr.length - 1)[0]
			.charAt(0)
			.toUpperCase() + arr.slice(-1)
	);
	return res;
}

console.log(capitalizeFirst(['coffee', 'milk', 'muffin']));
