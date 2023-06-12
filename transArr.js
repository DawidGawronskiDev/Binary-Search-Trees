import removeDuplicate from "./removeDuplicate.js";
import { mergeSort, merge } from "./mergeSort.js";

const transArr = (arr) => {
  return mergeSort(removeDuplicate(arr));
};

export default transArr;
