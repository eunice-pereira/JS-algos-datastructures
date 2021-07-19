/*
Given two strings, write a function to dertermine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, 
such as 'cinema', formed from 'iceman'. 
*/

function validAnagram(str1, str2) {
	// compare length
	if (str1.length !== str2.length) {
		return false;
	}
	// if chars are same length, then count characters
	const lookup = {};

	for (let i = 0; i < str1.length; i++) {
		// store letter from first string
		let letter = str1[i];
		// if letter exists, increment, otherwise set to 1
		if (lookup[letter]) {
			lookup[letter] += 1;
		} else {
			lookup[letter] = 1;
		}
	}
	console.log(lookup);
	for (let i = 0; i < str2.length; i++) {
		// store letter from second string
		let letter = str2[i];
		// can't find letter or letter is zero then it's not an anagram
		// it will be falsey if second string contains one letter too many
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}
	console.log(lookup);
	return true;
}
console.log(validAnagram('awesome', 'someawe'));

/*
First for loop runs through first string and counts frequencies of each letter and stores in 'lookup' object. 
If the letter exsits already, it adds 1. 
If the letter does not exists, it sets it to 1. 

{ a: 1, w: 1, e: 2, s: 1, o: 1, m: 1 }

Second for loop runs through second string and checks if each letter is already existing in 'lookup' object. 
If the letter does not exists (value is 0), then will return false. This rejects if second string has one letter too many, to match first string. 
If the letter does exist in 'lookup' object, then it will subtract 1. 

{ a: 0, w: 0, e: 0, s: 0, o: 0, m: 0 }

For the entire function to be 'true', the second object should all end in 0, meaning all letters in second string have been counted and all did indeed exist in the first string. 
*/
