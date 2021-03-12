# JavaScript Algorithms & Data Structures

## Big O Notation

- Big O tells you how fast a function grows or declines.
- Algorithms are analyzed in terms of time, or the number of steps it takes to complete a problem of size n

- The time required by a function/procedure is proportional to the number of 'basic operations' that it performs
- When we are trying to find the complexity of a function/algorithm program, we are not interested in the exact number of operations that are being performed; rather, we are interested in the relation of the number of operations to the problem size.
- Typically, we are usually interested in the worst case: what is the maximum number of operations that might be performed of a given problem size.

### Expressing complexity using Big-O Notation:

- a constant-time algorithm is 'order 1': O(1)
- a linear-time algorithm is 'order N': O(N)
- a quadratic-time algorithm is 'order N squared': O(N^2)

Big O cares about the dominant term of a function, or the term that grows the fastest. Big O expressions do not have constants or low-order terms because when N gets large enough, constants and low-order terms do not matter (i.e. a constant-time algorithm will be faster than a linear-time algorithm, which will be faster than a quadratic-time algorithm).

### Big O Shorthands

1. Arithmetic operations are constant
2. Variable assingment is constant
3. Accessing elements in an array (by index) of object (by key) is constant
4. In a loop, the complexity is the legnth of the loop times the complexity of whatever happens in side the loop

## Analyzing Performance of Arrays and Objects

### Objects

- Objects work well when order is not important or needed, and we need fast access, insertion, removal

Insertion: O(1) - constant time
Removal: O(1)- constant time
Searching: O(N) - linear time
Access: O(1) - constant time

#### Big O of Object Methods

Object.keys - O(N)
Object.values- O(N)
Object.entries- O(N)
hasOwnProperty- O(1)

### Arrays

- Arrays are ordered, unlike Objects, and used when order is needed
- Accessing data in an array is quick, however can time can come at a cost when searching, removing, and inserting

#### Big O of Arrays

**Insertion & Removal** depends on where we are making a change in the array

- Each element has index, so we can add by pushing to end of array, O(1)
- Problematic when inserting at beginning of array, because now every element in array must be reindexed, so now time changed to O(N)
- same concept applies whne removing
- `push` and `pop` are always _faster_ than `shift` and `unshift`

Searching - O(N), as fast as searching can get
Access - O(1), also fast, straight forward since elements can be accessed directly

To summarize...

`push` and `pop`: O(1)
`shift`, `unshift`: O(N)
`concat`, `slice`, and `splice`: O(N)
`sort`: O(N \* log N)
`forEach`, `map`, `filter`, and `reduce`: O(N)

## Problem Solving Approach

## Problem Solving Patterns

## Recursion
