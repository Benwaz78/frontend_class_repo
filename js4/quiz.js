

// Question 2: Find the length of the first second sentence in the string.
// There are many reasons why one might enjoy a good horror story. One,  good example, is the adrenaline rush, after being scared.




// There are many reasons why one might enjoy a good horror story. One, good example, is the adrenaline rush, after being scared.



// Question 1: Find the length of the first sentence in the string.
// There are many reasons why one might enjoy a good horror story. One, good example, is the adrenaline rush, after being scared.

let string = "Ben-edi-ct";
let string_array = string.split("-");
console.log(string_array)
console.log(string_array[0], string_array[1], string_array[2])

string = "There are many reasons why one might enjoy a good horror story. One, good example , is the adrenaline rush, after being scared";

let data_array = string.split(".");
console.log(data_array);
console.log(data_array[0].length)
console.log(data_array[1].length)


// Question 3: Find the first and last occurrence of the word "good".
// There are many reasons why one might enjoy a good horror story. One,  good example, is the adrenaline rush, after being scared.

console.log(string.indexOf("good"))
console.log(string.lastIndexOf("good"))

// Question 4: Find the sub-string with length 12 from the START of the string
//concept of subsstring
let fname = "benedict";
console.log(fname.substring(1, 3))

string = "There are many reasons why one might enjoy a good horror story. One,  good example, is the adrenaline rush, after being scared.";
console.log(string.substring(0, 12))
let newString = string.substring(0, 12);
console.log(newString.length)


// Question 5: Find the sub-string with 12 from the END of the string 
// There are many reasons why one might enjoy a good horror story. One, good example, is the adrenaline rush, after being scared.


console.log(string.substring(string.length-12))