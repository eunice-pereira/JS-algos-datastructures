//FizzBuzz
// Write a function that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz() {
  let num = 0;
  while (num <= 100) {
    num++;
    // console.log(num);
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz');
    } else if (num % 3 === 0) {
      console.log('Fizz');
    } else if (num % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
  }
}

// Given an array of integers nums and an integer target,
//return numbers of the two numbers such that they add up to target.

// You may not use the same element twice, and array returned should be in ascending order.

// input = array of int and target integer
// output = two numbers sum target
// constraints = no dupes

// [3,3,5,7,1], [8] // [3, 5], [1,7]

function findUniquePairs(arr, num) {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  let filtered = sorted.filter((a, b) => sorted.indexOf(a) === b); // a is value, b is index of value
  // comparing index to index, returning values that match
  console.log(filtered);

  let sum = [];

  for (let i = 0; i < filtered.length; i++) {
    for (let j = i + 1; j < filtered.length; j++) {
      if (filtered[i] + filtered[j] === num) {
        sum.push([filtered[i], filtered[j]]);
      }
    }
  }

  return sum;
}

console.log(findUniquePairs([3, 3, 5, 4, 7, 1], 8));
