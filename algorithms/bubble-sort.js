/*
Define a function that sorts an array by swapping values. 
*/

function bubbleSort(arr) {
	let noSwaps;

	for (let i = arr.length; i > 0; i--) {
		// once we loop back and no Swaps is true (meaning last iteration swaps were not made in inner loop)
		// then we break

		noSwaps = true;

		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// swap
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;

				// no swaps is false if swaps were done and causes loop to run again
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));
