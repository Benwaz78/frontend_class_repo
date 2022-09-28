// 1. Write a function that takes a string as an argument, extract the last three letters from the string, logs the result.
// a. Write the function using function declaration and call it
// b. Write the function using anonymous function and call it
// c. Write the function using arrow function and call it


function stringData(string){
    console.log(string.slice(-3));
}

console.log("Function Declaration")
stringData("Benedict");
stringData("Correction");

let anonymousStringData = function(string){
    console.log(string.slice(-3));
}

console.log("Anonymous Function");
anonymousStringData("Benedict");
anonymousStringData("Correction");

console.log("Arrow Function");

let arrowStringData = (string)=>{
    console.log(string.slice(-3));
}

arrowStringData("Benedict");
arrowStringData("Correction");

// Write a function that takes a number as an argument. If the number is even logs "true" in the console else logs false
// a. Write the function using function declaration and call it
// b. Write the function using anonymous function and call it
// c. Write the function using arrow function and call it

console.log("Function Declaration")

function checkEven(number){
    result = number % 2 == 0 ? "true" : "false";
    console.log(result);
}
checkEven(6)
checkEven(3)
console.log("Arrow  Function");
checkEven = (number)=>{
    result = number % 2 == 0 ? "true" : "false";
    console.log(result);
}
checkEven(6)
checkEven(3)
console.log("Annonymous  Function");
checkEven = function(number){
    result = number % 2 == 0 ? "true" : "false";
    console.log(result);
}
checkEven(6)
checkEven(3)

// Write a function that takes two values, say a and b, as arguments, return true if the two values are equal and of the same type.
// a. Write the function using function declaration and call it
// b. Write the function using anonymous function and call it
// c. Write the function using arrow function and call it
console.log("Check Equality")
let checkEquality = (a, b)=>{
    let check = a === b ? "true" : "false";
    console.log(check);
}
checkEquality("4", "4");

// Write a function that takes a string (a) as an argument; extract the first half a, return the result.
// a. Write the function using function declaration and call it
// b. Write the function using anonymous function and call it
// c. Write the function using arrow function and call it
console.log("Extract the first half");
let extractFirstHalfString = (string)=>{
    console.log(string.slice(0, string.length/2))
}

extractFirstHalfString("Benedict");

stringData = 'Benedict';
console.log(stringData.slice(0, 3))


let numbers = [10, 20, 30, 40, 70, 200, 300];
// let total = 0;
// let x = 0;
// while(x < numbers.length){
//     // total = total + numbers[x];
//     total += numbers[x];
//     console.log(`Addition insoide loop  ${total}`)
//     x++;
// }

let getAverage = (arrayData)=>{
    let total = 0;
    let x = 0;
    while(x < arrayData.length){
        // total = total + numbers[x];
        total += arrayData[x];
        x++;
    }
    console.log(total/arrayData.length)
}

getAverage([10, 20, 30, 40, 70, 200, 300])
getAverage([100, 200, 300, 450, 650])


console.log("Annonymous Function")
getAverage = function(arrayData){
    total = 0;
    for(data of arrayData){
        total += data;
    }
    console.log(total/arrayData.length);
}

getAverage([100, 200, 300, 450, 650]);