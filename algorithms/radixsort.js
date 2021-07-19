// Helper Functions

// 1. getDigit(num, place) - returns the digit in num at the given place value.

// num is our number in array and i is the index (0 based starting from right)
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

// console.log(getDigit(7323, 2)); // 3

// 2. digitCount(num) - returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 3. mostDigits(nums) - Given an array of numbers, returns the number of diigts in largest numbers in the list using digitCount()
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Radix Sort Psuedo
/*
- Define function that acccepts list of numbers 
- Figure out how many digits the largest number has 
- Loop from k = 0 up to this largest number of digits 
- For each iteration of the loop: 
    - create buckets for each digit (0 to 9)
    - place each number in the corresponding bucket based on its kth digit 
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- Return list at the end. 
*/

// Radix sort implementation
function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // return values in one array
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
  return nums;
}
console.log(radixSort([23, 345, 5467, 12, 3445, 9852]));
