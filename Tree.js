import Node from "./Node.js";

export default class Tree {
  constructor(value = new Node(1)) {
    this.root = value;
  }

  buildTree = (arr) => {
    this.root = this.buildTreeRec(arr);
  };

  buildTreeRec = (arr, start = 0, end = arr.length - 1) => {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const newNode = new Node(arr[mid]);

    newNode.left = this.buildTreeRec(arr, start, mid - 1);
    newNode.right = this.buildTreeRec(arr, mid + 1, end);

    return newNode;
  };

  find = (val) => {
    return this.findRec(this.root, val);
  };

  findRec = (node, val) => {
    if (!node) {
      return null;
    }

    if (node.data == val) {
      return node;
    }

    if (node.data > val) {
      return this.findRec(node.left, val);
    }

    if (node.data < val) {
      return this.findRec(node.right, val);
    }
  };

  inserVal = (val) => {
    return this.insertValRec(this.root, val);
  };

  insertValRec = (node, val) => {
    if (!node.left && node.data > val) {
      return (node.left = new Node(val));
    }
    if (!node.right && node.data < val) {
      return (node.right = new Node(val));
    }

    if (node.data > val) {
      return this.insertValRec(node.left, val);
    }

    if (node.data < val) {
      return this.insertValRec(node.right, val);
    }
  };

  _findMinVal = (node = this.root) => {
    if (node === null) {
      return null;
    }

    while (node.left !== null) {
      return this._findMinVal(node.left);
    }

    return node.data;
  };

  deleteVal = (val) => {
    return this.deleteValRec(this.root, val);
  };

  deleteValRec = (node, val) => {
    if (node === null) {
      return null;
    }

    if (node.data === val) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const minValue = this._findMinVal(node.right);
      node.data = minValue;
      node.right = this.deleteValRec(node.right, minValue);
    } else if (node.data > val) {
      node.left = this.deleteValRec(node.left, val);
    } else {
      node.right = this.deleteValRec(node.right, val);
    }

    return node;
  };
}
