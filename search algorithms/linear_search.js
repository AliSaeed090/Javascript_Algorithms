//Time Complexity: O(n)
//Explanation: The algorithm goes through each element of the array in a linear fashion to search for the specified value

function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;

}

let arrayVar = [21, 94, 3, 57, 11];
let testVar = 57;

let res = linearSearch(arrayVar, testVar);

console.log(res)