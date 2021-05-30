/*
Recursion 

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backword). 
Otherwise, return false. 
*/

// isPalindrome('awesome') // false
// isPalindrome('tacocat') // true

function isPalindrome(str) {
	// if length is greater than 1, skips, goes to next
	// at end of recursion, if one letter is left, that is end of function (odd string)
	if (str.length === 1) return true;

	// if length is greater than 2, skips, goes to next
	// even string will have two characters left and these will equal to each other
	if (str.length === 2) return str[0] === str[1];

	// now, checks if first letter is same as last
	// if true, then calls function again
	// this time, uses slice(1, -1), extracting second and second to last characters
	// now moving inward string
	// slice does not change original string,

	if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

	// if conditions not met, then return false
	return false;
}
console.log(isPalindrome('tacocat'));
