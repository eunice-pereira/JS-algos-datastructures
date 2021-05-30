/*
Write a function factorial which accepts a number and returns the factorial of that number. 

Factorial zero 0! is always 1. 
*/

function factorial(num) {
	if (num < 0) return 0;
	if (num <= 1) return 1;
	return num * factorial(num - 1);
}
console.log(factorial(-1));
