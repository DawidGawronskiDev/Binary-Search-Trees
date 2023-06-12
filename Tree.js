import Node from "./Node.js";
import Queue from "./Queue.js";

import transArr from "./transArr.js";

export default class Tree {
  constructor(value = new Node(1)) {
    this.root = value;
  }

  buildTree = (arr) => {
    this.root = this.buildTreeRec(transArr(arr));
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

  levelOrder = () => {
    return this.levelOrderRec(this.root);
  };

  levelOrderRec = (node) => {
    if (!node) return;

    const queue = new Queue();
    const output = [];

    queue.enqueue(node);

    while (!queue.isEmpty()) {
      const tempNode = queue.dequeue();

      output.push(tempNode.data);

      if (tempNode.left) {
        queue.enqueue(tempNode.left);
      }

      if (tempNode.right) {
        queue.enqueue(tempNode.right);
      }
    }

    return output;
  };

  preorder = () => {
    return [
      this.root.data,
      ...this.levelOrderRec(this.root.left),
      ...this.levelOrderRec(this.root.right),
    ];
  };

  inorder = () => {
    return [
      ...this.levelOrderRec(this.root.left),
      this.root.data,
      ...this.levelOrderRec(this.root.right),
    ];
  };

  postorder = () => {
    return [
      ...this.levelOrderRec(this.root.left),
      ...this.levelOrderRec(this.root.right),
      this.root.data,
    ];
  };

  height = (node = this.root) => {
    if (node === null) return null;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  depth = (val) => {
    return this.depthRec(this.root, val, 0);
  };

  depthRec = (node, val, depth) => {
    if (!node) return null;

    if (node.data === val) return depth;

    if (node.data > val) {
      depth++;
      return this.depthRec(node.left, val, depth);
    }

    if (node.data < val) {
      depth++;
      return this.depthRec(node.right, val, depth);
    }
  };

  rebalance = () => {
    const arr = this.levelOrder();
    return this.buildTree(transArr(arr));
  };
}
