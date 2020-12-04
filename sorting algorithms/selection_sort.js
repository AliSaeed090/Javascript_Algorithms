//Time Complexity: O(n^2)
//Explanation: Similar to the bubble sort, but instead of placing large values in to sorted position (ath the end of the array), it places small values into sorted position (at the front of the array)

function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //the if statement before the swap ensures that the swap doesn't occur if the smallest element is already in position, i.e. the smallest element doesn't swap with itself. This reduces the number of operations the algorithm makes and improves optimization.
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

let res = selection_sort([9, 4, 1, 6, 3, 7, 2]);
console.log(res);
