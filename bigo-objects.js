let instructor = {
	firstName: 'Kelly',
	isInstructor: true,
	favoriteNumbers: [1, 2, 3, 4],
};
// O(N) as nubmer of items grows, we will need to visit operation N times
// Time is same for keys, values, entries methods
console.log(Object.keys(instructor));

// Object.hasOwnProperty is O(1) constant time
// checking if keys exist

hasOwnProperty();
