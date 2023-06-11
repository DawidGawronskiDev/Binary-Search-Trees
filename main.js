import Node from "./Node.js";
import Tree from "./Tree.js";

import { mergeSort, merge } from "./mergeSort.js";
import prettyPrint from "./prettyPrint.js";

const removeDuplicate = (arr) => {
  return Array.from(new Set(arr));
};

const transArr = (arr) => {
  return mergeSort(removeDuplicate(arr));
};

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const newArr = transArr(arr);

const newTree = new Tree();
newTree.buildTree(newArr);

prettyPrint(newTree.root);
