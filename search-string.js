/*
Write a function that accepts two strings, and checks if shorter string is present in larger string. 

1. loop over longer string 
2. loop over shorter string 
3. if characters dont match, break out of inner loop 
4. if characters do match, keep going 
5. if you complete innter loop and find a match, increment the count of matches 
6. return the count 
*/

function stringSearch(long, short) {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) count++;
		}
	}
	return count;
}

console.log(stringSearch('lorie loled', 'lol'));
