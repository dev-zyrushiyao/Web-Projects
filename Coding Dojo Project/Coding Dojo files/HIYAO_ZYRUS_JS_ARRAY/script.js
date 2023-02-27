// always hungry 

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

function alwaysHungry(arr) {
    for (var i = 0 ; i < arr.length; i++) {
       if (arr[i] == "food") {
        console.log("yummy");
       }else if (arr[i] != "food") {
        console.log("I'm hungry");
       }
    }
}

// Highpass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    
    for (var i = 0 ; i < arr.length ; i++) {
        if(cutoff < arr[i]){
            filteredArr.push(arr[i]) ;
        }
    }
    return filteredArr;
}
     
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 


// Bettert than average 
function betterThanAverage(arr) {
    var sum = 0;
        for(let i = 0 ; i < arr.length ; i++) {
            sum += arr[i];
        }
        // console.log(sum);
    
    var count = sum / arr.length;
    // count how many values are greated than the average
    return count;
}

// betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result.toFixed(2)); // we expect back 4

//Array Reverse
function reverse(arr) {
    const reversedArr = [];
    for( let i = arr.length-1 ; i >= 0 ; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;  
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Fibbonaci numbers 
function fibonacciArray(n) {
    
    var fibArr = [0, 1];
    for(let i = 2; i <= n; i++){
      fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }

    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
