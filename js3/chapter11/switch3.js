
let operator = prompt("Enter Operator *, +, -, /: ")
let number1 = parseInt(prompt("Enter Value 1: "))
let number2 = parseInt(prompt("Enter Value 2: "))

// console.log(parseInt("4") + parseInt("4"))

switch(operator){
    case "+":
    console.log(number1 + number2);
    break;
    case "-":
        console.log(number1 - number2);
        break;
    case "*":
        console.log(number1 * number2);
        break;
    case "/":
        console.log(number1 / number2);
        break;
    default:
        console.log("Default code runs here");
}