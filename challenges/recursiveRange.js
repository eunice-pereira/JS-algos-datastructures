/*
Recursion

Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function. 
*/
// recursiveRange(6) // 21

function recursiveRange(num) {
	if (num <= 0) return 1;
	if (num === 1) return 1;
	return num + recursiveRange(num - 1);
}
console.log(recursiveRange(6));
