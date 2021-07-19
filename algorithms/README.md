## Linear Search

- Moves at a set interval and checks one index at a time from beginning.
- Time complexity O(N).
- Can be used on **unsorted array**

## Binary Search

- much faster, eliminates half of remaining elements at time.
- can only be used on **sorted arrays**
- Time complexity O(log n)

---

## Bubble Sort

- A sorting algorithm where the largest values bubble to to the top.
- Adjacent values are compared and swapped if larger, pushing the largest value to the top.
- Bubble sort is least optimal in comparison to other sorting algorithms.
- **Pro**: Works well with nearly sorted data

## Selection Sort

- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values in sorted position
- finds smallest value, then swaps to beginning of array
- **Con**: Does not work well with nearly sorted data; it will still iterate through all items
- reusable swap function for selection sort:

```js
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

## Insertion Sort

- Builds up sort by gradually creatig a larger left portion which is always sorted
- instead of finding lowest/largest value, it takes each element and places it where it should go in the sorted portion
- **Pro**: Works well with nearly sorted data

## Comparing Bubble, Selection, and Insertion

Often called **quadratic algorithms**

| Algorithm      | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| -------------- | ---------------------- | ------------------------- | ----------------------- | ---------------- |
| Bubble Sort    | O(N)                   | O(N^2)                    | O(N^2)                  | O(1)             |
| Insertion Sort | O(N)                   | O(N^2)                    | O(N^2)                  | O(1)             |
| Selection Sort | O(N^2)                 | O(N^2)                    | O(N^2)                  | O(1)             |

---

The following 3 sorting algorithms (merge, quick, and radix) are significantly faster than the previous 3 (bubble, selection, insertion).

- The more efficient algorithms are less simple, but improve complexity from `O(n^2)` to `O(n log n)`.

---

## Merge Sort

- works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.
- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.

**Psuedo Code**

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at..
  - if the value in the fist array is **smaller** than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - if the value in the first array is **larger** than the value in the second array, push the value in the second array into our results and move onto the next value in the second array
  - once we exhaust one array, push in all remaining values from the other array.

**Big O** of Merge Sort is O(n log n).

## Quick Sort

- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

**Big O** of Quick Sort is O(n^2) worst case when pivot is at first (minimum) item or last. It is best for pivot to be chosen at random.
Best case is O(n log n).

## Radix Sort

- Special sorting algo that does not make comparisons and works in binary numbers.
- Exploits fact that info about size of number is encoded in number of digits. More digits means bigger number.
- First looks at digit on right most digit and groups into buckets based on that number.
- Forms back into list, and repeats process, looking at next digit to the left, until array is sorted.
- Essentially, we are moving numbers into buckets and regrouping, over and over, but numbers are never directly compared to each other like other sorting methods.

**Big O** of Radix Sort is O(nk) best, average, and worst. Space Complexity is O(n + k).
Faster than any of the other sorting methods, but depending on computer memory, this is not always true.
