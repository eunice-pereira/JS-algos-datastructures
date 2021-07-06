/*
-It's useful to first implement a function to merge two sorted arrays. 
-Given two arrays which are sorted, this helper function should create a new array
which is also sorted, and consists of all elements in two input arrays.
-Function should run O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
*/

function merge(arr1, arr2) {
    // empty array to merge our sorted values 
    let results = []; 
    let i = 0; //pointer for arr1
    let j = 0; // pointer for arr2
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]){ 
            //pushing value from arr1 to empty array, smallest of comparison
            // then move onto next index on arr1 
            results.push(arr1[i]); 
            i++; 
        } else {
            results.push(arr2[j])
            j++; 
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++; 
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++; 
    }
    return results; 
}

console.log(merge([9, 100], [1,2,3,4,5,6]))