/*
The following function will log numbers up to maximum n, with constant minimum of 5. 

Loop with either go from 5 up to n, whichever is larger. As n grows larger, the constant 5 becomes irrelevant. 

Big O is O(n). 
*/

function logAtLeast5(n) {
	for (let i = 1; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}

/*
Now looking at the opposite. The function will log numbers up to maximum 5, regardless of how large n may be. 

As n grows, Big O is constant, therefore: 

Big O is O(1). 
*/

function logAtMost5(n) {
	for (let i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}

/*
The function counts up to n, then descends. As n grows in first loop, we have n operations. 
The second loop does the same in opposite order. 

Each loop is dependent on n, as in O(n), so the function is linear. 

Big O is O(n).
*/

function countUpAndDown(n) {
	console.log('Going up!');
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
	console.log('At the top!\nGoing down...');
	for (let j = n - 1; j >= 0; j--) {
		console.log(j);
	}
	console.log('Back down. Bye!');
}

/*
Below is a nested loop that prints all pairs of numbers from 0 up to n. 
The outer loop is dependent on n operations, or O(n). 
The inner loop then runs again for pair, also O(n). 

This is an O(n) operation inside of an O(n) operation, so: 

Big O is O(n^2). 

When graphed, the function would form an exponential curve as n grows. 
*/

function printAllPairs(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}
printAllPairs(5);
