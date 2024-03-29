# JavaScript Algorithms & Data Structures

Notes from Colt Steel's Udemy DS&A JavaScript Masterclass.

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

- a process or set of steps to accomplish a certan task
- algos are the foundation for being a successful problem solver and developer 👩🏻‍💻

### Devise a plan for solving problems

**1. Understand the problem**

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution?
- Can the outputs be determined from the inputs? (i.e. do I have enough information to solve the problem?)
- How should I label the important pieces of data that are a part of the problem?

**2. Explore concrete examples**

- this helps understand the problem better
- provides sanity checks that your eventual solution works how it should
- start with simple, then progress to more complex, then explore with empty inputs, finally with invalid inputs.

**3. Break it down**

- use comments to break down general steps, then make comments more specific
- this helps you think about steps you need to code, and also helps identify any concepts that you may need clarification on

**4. Solve/simplify**

- by this step, some algos can be solved. However, sometimes the problem needs simplification first.
- if initial problem cannot be solved, then solve a simpler problem
- this also helps to show progress, versus getting stuck and not coding anything at all
- simplifying also helps gain insight to more difficult problem

**5. Look back and refactor**

- Can you check result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

### Master common problem solving patterns

1. Frequency Counters.

- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(N^2) operations with arrays/strings. This patter is usually O(N).

2. Multiple Pointers Pattern

- Create pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well

3. Sliding Window Pattern

- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on a certan condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc.
- Usually move window from left towards end of array

4. Divide and Conquer Pattern

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
- tremendously decreases time complexity
- Method normally used for large set of data

## Recursion

- a process (function) that calls itself
- important in complex data structures
- sometimes a cleaner alternative to iteration

### Call Stack

- In almost all program languages, there is a built in data structure that manages what happens when functions are invoked
- data structure (**stack**). any time a function is invoked it is placed (**pushed**) on top of the call stack
- when JS sees the return keyword or when function ends, the compiler will remove (**pop**)
- When we write recursive functions, we keep pushing new functions onto the call stack.

### Helper Method Recursion

- outer function used with 'helper' function defined and called inside
- outer function is not recursive, but calles inner function which is recursive

### Recursion Tips

- For arrays, use methods like **slice**, **spread operator**, and **concat** that makes copies of arrays so they are not mutated
- Strings are immutable so will need to use methods like, **slice**, **substr**, or **substring** to make copies of strings.
- To make copies of objects, use **Object.assign**, or the **spread** operator.
