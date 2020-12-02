//Time complexity: O(logn)

//Explanation: Binary Search only works on SORTED ARRAYS. It works by picking a halfway point in the array. It then checks if the element at the halway point is greater than or less than the specified searched value. The algorithms thn eliminates the half of the array that cannot hold the value from the search (i.e. it only looks at the half that can hold the element). So, for example, if the searched value is greater than the value at the halfway point, the algorithm discards the lower half of the array from the search and only looks at the upper half. The algorithm then picks the halfway point of the remaining array and repeats the process. It continues until the searched value equals to the value at the halfway point.

function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    //checking if middle element is equal to the searched value. Checking that start is less than or equal to end ensures we break out of while if the searched value is nt in the array
    while(arr[middle] !== elem && start <= end){
        //if the searched value is less than the middle element, we will shift the end to one less than the middle index (going one less because we already check the middle value so checking it again would be redundant). Similar operation for if the searched value is greater.
        if(elem < arr[middle]){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    //this check ensures we only return the index of middle if the loop above was able to find the searched value. If value was not found, it means that the search value was not part of the array, else we return -1.
    if(arr[middle]==elem){
        return middle;
    }
    return -1;
}

let arrayVar = [2,5,6,14,17,31,43]
let testVar = 31
let res = binarySearch(arrayVar, testVar)

console.log(res)