/*
-Goal of merge sort is to keep breaking arrays into halves. 
-Use array.slice(). Break up array into halves until you have arrays 
that are empty or have one element. 
-Use recursion to keep breaking up arrays. 
-Once we have smaller sorted arrays, merge those arrays with other sorted arrays
until you are back at the full length of array. 
-Once array is merged together, return merged and sorted array. 
*/

function merge(arr1, arr2) {
  // empty array to merge our sorted values
  let results = [];
  let i = 0; //pointer for arr1
  let j = 0; // pointer for arr2
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      //pushing value from arr1 to empty array, smallest of comparison
      // then move onto next index on arr1
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2); //halfway point of array
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
