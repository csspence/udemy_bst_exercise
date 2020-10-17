/*
Udemy - JavaScript Algorithms and Data Structures Masterclass
Binary Search Tree Class
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if(this.root = null) {
      this.root = node;
      return this;
    }
    let compareTo = this.root;
    while(true) {
      if(value === compareTo.value) {
        return undefined;
      }
      if(value > compareTo.value) {
        if(compareTo.right === null) {
          compareTo.right = node;
          return this;
        } else {
          compareTo = compareTo.right;
        }
      }
      if(value < compareTo.value) {
        if(compareTo.left === null) {
         compareTo.left = node;
          return this;
        } else {
          compareTo = compareTo.left;
        }
      }
    }
  }
}