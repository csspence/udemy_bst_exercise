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

  breadthSearch() {
    let node = this.root;
    let queue = [this.root.value, ];
    let visited = [];
    const innerFunc = () => {
      visited.push(node.value);
      if(node.left !== null) {
        queue.push(node.left.value);
      }
      if(node.right !== null) {
        queue.push(node.right.value);
      }
      queue.shift();
      if(queue.length > 0) {
        if(node.left.value === queue[0]) {
          node = node.left;
        } else if(node.right.value === queue[0]) {
          node = node.right;
        }
        return innerFunc();
      }
    }
    innerFunc();
    return visited;
  }

}