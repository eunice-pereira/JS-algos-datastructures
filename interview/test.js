function numPlayers(scores, k) {
  // Write your code here

  if (scores && k > 0) {
    // quick sort helper function
    function pivot(arr, start = 0, end = arr.length + 1) {
      const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
      };
      let pivot = arr[start];
      let swapIdx = start;

      for (let i = start + 1; i < arr.length; i++) {
        if (pivot < arr[i]) {
          swapIdx++;
          swap(arr, swapIdx, i);
        }
      }
      swap(arr, start, swapIdx);
      return swapIdx;
    }
    // quick sort implementation
    function quickSort(arr, left = 0, right = arr.length - 1) {
      if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left side
        quickSort(arr, left, pivotIndex - 1);
        //right side
        quickSort(arr, pivotIndex + 1, right);
      }
      return arr;
    }
    // sort scores
    const sorted = quickSort(scores);
    console.log(sorted);

    // assign rank to each score
    const ranks = sorted
      .filter((score) => score >= 1)
      .map((score) => sorted.indexOf(score) + 1)
      .filter((rank) => rank <= k);

    return ranks.length;
  } else return 0;
}

console.log(
  numPlayers([100, 50, 50, 25, 30, 5, 10, 99, 44, 33, 22, 11, 10, 0], 4)
);
