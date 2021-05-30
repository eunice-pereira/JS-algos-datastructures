/*
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base of the exponent. This function should mimic the functionality of Math.pow(). 
Do not worry aobut negative bases and exponents. 
*/

function power(base, exp) {
	if (exp === 0) return 1;
	return base * power(base, exp - 1);
}
console.log(power(2, 2));
