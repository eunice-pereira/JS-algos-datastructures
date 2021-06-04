/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters. 
*/

// findLongestSubstring('thecatinthehat') // 7

function findLongestSubstring(str) {
	// placeholders
	let longest = 0;
	let seen = {};
	let start = 0;

	// iterate
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1
		longest = Math.max(longest, i - start + 1);
		// store the index of next char do not double
		seen[char] = i + 1;
	}
	return longest;
}
console.log(findLongestSubstring('thecatinthehat'));
