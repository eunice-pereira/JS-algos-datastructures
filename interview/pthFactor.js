/*
Determine the factors of a number (i.e. all positive integer values that evenly divide into a number)
and return the pth element of the list, sorted ascending. 
If there is no pth element, return 0. 

Example: 
Input: 
n = 20, p = 3 

Output: 
-Factors of 20 in ascending order are {1,2,4,5,10,20}
-Using 1-based indexing, if p = 3, then 4 is returned. 
- If p > 6, 0 would be returned.
*/

// test case below
// 22876792454961, 28

function pthFactor(n, p) {
  let factors = [];
  let i = 1;

  // check for factors that are less than or equal to sqrt(n)
  // create first half of array up to middle point
  while (i * i <= n) {
    if (n % i == 0) {
      factors.push(i);
    }
    i++;
  }

  // check if k is in first half of factors
  // if true, we have solution
  let arrSize = factors.length;
  if (p <= arrSize) {
    return factors[p - 1];
  }

  // check if k is in the second half of all factors
  // total number of factors is twice in size
  let factorsCount = 2 * arrSize;

  // check if n is perfect square - reduce factor count by 1 to prevent repetition
  if (factors[arrSize - 1] * factors[arrSize - 1] == n) {
    factorsCount--;
  }

  // p is greater than amount of factors in array, then return 0
  if (p > factorsCount) {
    return 0;
  }
  // divide n by corresponding factor at index to give actual factor
  return n / factors[factorsCount - p];
}
console.log(pthFactor(1000, 10));
