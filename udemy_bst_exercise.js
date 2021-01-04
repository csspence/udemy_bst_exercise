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
    let current = this.root;
    if(this.root === null) {
      this.root = node;
      return this;
    } else {
      while(true) {
      if(node.value === current.value) {
        return undefined;
      }
      if(value > current.value) {
        if(current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      } else if(value < current.value) {
        if(current.left === null) {
         current.left = node;
          return this;
        } else {
          current = current.left;
        }
      }
      }
    }
  }
  find(value) {
    let node = new Node(value);
    let current = this.root;
    while(true) {
      if(node.value === current.value) {
        return true;
      }
      if(value > current.value) {
        if(current.right === null) {
          return false;
        } else {
          current = current.right;
        }
      } else if(value < current.value) {
        if(current.left === null) {
         return false;
        } else {
          current = current.left;
        }
      }
    }
  }
}