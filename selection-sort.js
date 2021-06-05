/*
1. Store first element as smallest value you've seen so far
2. Compare item to next item in array until you find smaller number 
3. If smaller value is found, save index of where value is found to then swap ('new minimum')
*/

function selectionSort(arr) {
	// separate swap function
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	// first loop starting at first index
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		// second loop starting at whichever index is after i
		for (let j = i + 1; j < arr.length; j++) {
			// if array of j is less than our current lowest
			if (arr[j] < arr[lowest]) {
				// current lowest
				lowest = j;
			}
		}
		// if i is not equal to lowest stored value, then call swap function
		if (i !== lowest) swap(arr, i, lowest);
	}
	return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
