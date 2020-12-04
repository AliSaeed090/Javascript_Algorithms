//Explanation: Quick sort works using a pivot and recursion. The algorithm assigns one element as the pivot (we're assigning the last element as the pivot in this implementation), and then creates two other arrays. Elements in the array smaller in value than the pivot will go into one array, and elemnts greater than value will go into the other array. The algorithm will then run recursively on both arrays, and this recursion will continue until the base case is reached, which in this case is if the length of the array is less than or equal to 1.

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  //the for loop below does not run for the last number of the array, because the last number in the array is the pivot
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

let res = quickSort([9, 4, 1, 6, 3, 2]);
console.log(res);
