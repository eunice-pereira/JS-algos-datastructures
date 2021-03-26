// ***Write a function which takes two numbers and returns their sum.

// 1. Can I restate the problem in my own words?
// implement addition

// 2. What are the inputs that go into the problem?
// seems easy, just two numbers, but necessary to know which language, and how big will these numbers be?
// - ints? floats? string for large numbers?

// 3. What are the outputs that should come from the solution?
// ints? floats? string?

// 4. Can the outputs be determined from the inputs? (i.e. do I have enough information to solve the problem?)

// 5. How should I label the important pieces of data that are a part of the problem?

// ***Write a function which takes in a string and returns counts of each character in the string.

// first, we explore the output of a simple example
// charCount('aaaa'); // {a:4}
// charCount('hello'); // {h:1, e:1, l:2, o:1}

// then, we can think about something more complex
// what if input is 'my phone number is 4545454'
// are we accounting for spaces? other characters? numbers?

// more complex example
// what if input is 'Hello hi'
// are we storing different casing?

// now looking at possible empty inputs
// charCount(''); // what do we want to return? null? false? error

// finally invalid inputs
// this is important to consider in 'real world', helps you understand how to better solve problem.

// ***Break it down

// write out steps you need and helps identify any concepts you may need to clarify further

// function charCount(str) {
// 	// do something
// 	// return an object with keys that are lowercase alphanumeric chars in strong
// }

// function charCount(str) {
// 	// make object to return at end
// 	// loop over string, for each character..
// 	// if the char is a number/letter AND is key in object, add one to count
// 	// if the char is a number/letter AND is not in object add it and set value to 1
// 	// if char is something else (space, period, etc.), don't do anything
// 	// return object at end
// }

// ***Solve/simplify

function charCount(str) {
	// make object to return at end
	let result = {};
	// loop over string, for each character..
	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		// if the char is a number/letter AND is key in object, add one to count
		if (result[char] > 0) {
			result[char]++;
			// if the char is a number/letter AND is not in object add it and set value to 1
		} else {
			result[char] = 1;
		}
	}
	// if char is something else (space, period, etc.), don't do anything
	// return object at end
	return result;
}
console.log(charCount('hello'));
