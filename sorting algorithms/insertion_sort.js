//Time complexity: O(n^2).
//Explanation: This algo builds up the sort by gradually creating a larger half of the array that is always sorted, by inserting one item at a time in the correct position.

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    //Loop through entire array for comparison
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const temp = array.splice(i, 1);
        array.splice(j, 0, temp[0]);
      }
    }
  }

  //return sorted array
  return array;
};

let res = insertionSort([3, 5, 3, 6, 10, 9, 4, 7]);

console.log(res);
