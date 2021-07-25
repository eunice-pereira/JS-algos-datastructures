// Push Method - adding to end of linked list

/*
Push Method psuedocode
1. function should accept a value 
2. create new node using value passed to the function 
3. if there is no head property on list, set head and tail to be the
newly created node. 
4. otherwise, set the next property on the tail to be the new node 
and set the tail property on the list to be the newly created node. 
5. increment length by one 
6. return the linked list 
*/

// establishing Node class
// val - piece of data
// next - reference to next node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// define new linked list
// define pointers at head and tail of list
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // 1. push method accepts value
  push(val) {
    // 2. new node using value passed to function
    let newNode = new Node(val);
    // 3. checking if there is no head property, set head & tail to new node
    // edge case - if head is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      // 4. take current tail and next property
      // set tail property to be newly created node
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // 5. increment length by one and 6. return linked list
    this.length++;
    return this;
  }
}

// create new singly linked list and use method to add elements to end
let list = new SinglyLinkedList();
console.log(list.push('hello'));
console.log(list.push('goodbye'));
