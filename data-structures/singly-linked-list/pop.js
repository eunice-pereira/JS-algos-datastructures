// Pop Method - removing node at end of linked list

/*
Popping Psuedocode

1. If there are no nodes on the list, return undefined 
2. loop through the list until you reach the tail 
3. set the next property of the 2nd to last node to be null 
4. set the tail to be the 2nd to last node 
5. decrement the length of the list by 1 
6. return the value of the node removed. 
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // 1. if no nodes, return undefined
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    // 2. while there is a next, loop through until tail is reached
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // 3. set the next property of the 2nd to last node to be null
    // 4. set the tail to be the 2nd to last node
    this.tail = newTail;
    this.tail.next = null;

    // 5. decrement length & 6. return value of node removed
    this.length--;
    // edge case - if no nodes, then set head & tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}
