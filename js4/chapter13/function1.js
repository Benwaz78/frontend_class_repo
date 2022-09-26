let a = 20;
let b = 30;
let sum = a + b;
console.log(sum)


let c = 30;
let d = 40;
sum = c + d;
console.log(sum)


function addNumbers(para1, para2){
    sum = para1 + para2;
    console.log(sum);
}

addNumbers(20, 30)
addNumbers(30, 40)

function areaCircle(radius){
    let area = 3.142 * radius**2;
    console.log(area);
}

areaCircle(7)
areaCircle(14)

function sayHello(){
    console.log("Hello everyone!! How are you today?")
}

sayHello();

function greeting(name){
    console.log(`Hello Mr ${name}`)
}

greeting("Benedict")
greeting("Chisom")

function fullName(name1, name2){
    console.log(`My fullname is ${name1} ${name2}`)
}

fullName("Benedict", "Uwazie");
fullName("Didier", "Drogba");

//Create a function that will printout the code below on the terminal
// My name is Benedict, I am 46years old and Fair in complexion
// Where Benedict, 46 and Fair are parameters of the function

function personalDetails(name, age, color){
    console.log(`My name is ${name}, I am ${age}years old and ${color} in complexion`)
}

personalDetails("Benedict", 46, "Fair")
