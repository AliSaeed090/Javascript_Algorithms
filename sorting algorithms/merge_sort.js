//Time Complexity: O(n log n)

const mergeSort = (array) => {
  if (array.length < 2) return array;
  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle, array.length);
  console.log("split:", leftSide, rightSide);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  console.log("result:", result);
  return result;
};

console.log(mergeSort([5, 3, 7, 10, 4, 1, 5]));
