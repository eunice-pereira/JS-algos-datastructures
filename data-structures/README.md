# Data Structures

Data structures are collections of values, the relationshiops among them, and the functions or operations that can be applied to the data.

- Different DS excel at different things. Some are highly specialized, while others (like arrays) are more generally used.
- Arrays and Objects are built in, but special cases or using more complicated data may require to write a specialized data structue.

## Examples:

- Working with map/location data? Using a graph would make sense to find shortest point in a map.
- Need an ordered list with fast inserts/removals at the beginning and end? If it's a huge data set, an array will not be best. A linked list would come in handy.
- Web scraping nested HTML? A tree would be best.
- Need to wrtie a scheduler that has tasks that are scheduled and need to handle priority? Then you may need to use a heap.

---

## ES2015 - Classes Syntax

- Using classes will make it easier to write data structures.
- A blueprint for creating objects with pre-defined properties and methods.
- Defines a pattern and then we can instantiate many objects using the blueprint (class)

---

## Singly Linked Lists

- Stores any kind of data, ordered.
- Consists of a **head, tail, and length** property.
- Each element, or **node**, has a **value** and a **pointer** to another node or null.
- Index are not used to access data. Must move through each node to access data.

### Linked List vs. Arrays

**Lists**

- Do not have indexes
- connected via nodes with a **next** pointer.
- random access is not allowed.

**Arrays**

- Indexed in order
- Indsertion and deletion can be expensive
- can quickly be accessed at a specific index.

## Doubly Linked Lists

## Stacks

## Queues

## Binary Search Trees

## Tree Reversal

## Binary Heaps

## Hash Tables

## Graphs

## Graph Traversal

## Dynamic Programming
