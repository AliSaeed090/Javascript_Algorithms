function linear_search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;

}

let arrayVar = [21, 94, 3, 57, 11];
let testVar = 57;

let res = linear_search(arrayVar, testVar);

console.log(res)