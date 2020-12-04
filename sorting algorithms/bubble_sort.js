//Explanation: Bubble sort goes through an array and compares each eemtn with its adjacent element. If the array on the left is bigger, the two elements swap places. The algorithm continues this until it reaches the end of the array. The number of comparisons is reduced by one on each iteration because the last element is sorted after an iteration.

//Unoptimized solution that does not reduce the number of comparisons the algorithmdoes on each iteration
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

//Optimized version
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let res = bubbleSort([9, 4, 1, 6, 3, 2]);
console.log(res);
