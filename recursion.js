/*
1. Base Case- condition when recurion ends. 
2. Different input- each time function is called, it is using a different piece of data. A smaller piece of data each time, and shrinks towards Base Case. 
*/

function countDown(num) {
	if (num <= 0) {
		console.log('All done!');
		return;
	}
	console.log(num);
	num--;
	countDown(num);
}
// console.log(countDown(5));

function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}
console.log(sumRange(5));
