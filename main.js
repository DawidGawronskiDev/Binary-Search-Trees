class Node {
  constructor(data) {
    (this.data = data), (this.left = null), (this.right = null);
  }
}

class Tree {
  constructor(value) {
    this.root = value;
  }
}

const removeDuplicate = (arr) => {
  return Array.from(new Set(arr));
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const m = Math.floor(arr.length / 2);
  const lArr = arr.slice(0, m);
  const rArr = arr.slice(m);

  return merge(mergeSort(lArr), mergeSort(rArr));
};

const merge = (lArr, rArr) => {
  const tempArr = [];

  while (lArr.length && rArr.length) {
    lArr[0] <= rArr[0]
      ? tempArr.push(lArr.shift())
      : tempArr.push(rArr.shift());
  }
  return [...tempArr, ...lArr, ...rArr];
};

const buildTree = (arr, start, end) => {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const newNode = new Node(arr[mid]);

  newNode.left = buildTree(arr, start, mid - 1);
  newNode.right = buildTree(arr, mid + 1, end);

  return newNode;
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const newArr = [6, 8, 3, 2, 7, 3, 5, 9, 4, 7, 1, 8, -5, 60, 12, 50, 0];
const uniqueArr = removeDuplicate(newArr);
const sortedArr = mergeSort(uniqueArr);

const root = buildTree(sortedArr, 0, sortedArr.length - 1);

const newTree = new Tree(root);

prettyPrint(newTree.root);
