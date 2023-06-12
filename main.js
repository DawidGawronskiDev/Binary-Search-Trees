import Tree from "./Tree.js";
import prettyPrint from "./prettyPrint.js";

const newTree = new Tree();
newTree.buildTree([1, 10, 80, 15, 25, 1]);
newTree.inserVal(69);
newTree.inserVal(68);
newTree.inserVal(67);

newTree.rebalance();

prettyPrint(newTree.root);
