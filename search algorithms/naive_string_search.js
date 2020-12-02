//Time complexity: O(m * n). The m is the size of pattern and n is the size of the main string
//Explanation: This algorithm checks for the presence of a string pattern in a larger string. For example, checking for the number of times the pattern "omg" appears in the string "wowomgzomg".

function naiveStringSearch(longStr, pattern){
    let count = 0;
    for(let i = 0; i <longStr.length; i++){
        for(let j = 0; j < pattern.length; j++){
            if(pattern[j] !== longStr[i + j] ){
                break;
            }
            //the if block below checks if the entire short pattern has been run. If that happens, it means that a break didn't occur, and so there's a match, so we increase the count
            if(j=== pattern.length -1){
                count++;
            }
        }
        
    }
    return count;
}

let res = naiveStringSearch("wowomgzomgdsomg", "omg")
console.log(res);