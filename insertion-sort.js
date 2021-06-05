/*
1. Start by picking second element in array 
2. Compare second element with one before it and swap if necessary 
3. continue to next element and if it is in incorrect order, iterate through the sorted portion (left side) t place element in correct place 
4. repeat until array is sorted 
*/

function insertionSort(arr) {
	let currentVal;
	// iterate through array, starting at 1st index
	for (let i = 1; i < arr.length; i++) {
		// temp placeholder
		currentVal = arr[i];
		// loop backwards. while j is greater than 0 and array of j is greater than placeholder
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

console.log(insertionSort([2, 1, 9, 7, 4]));
