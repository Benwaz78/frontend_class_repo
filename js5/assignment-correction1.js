
// let person = ['John', 45, 'Fair', true, 'Tall']
// Use the values in the array to form the sentence below
// a. My name is John, I am 45years old and Fair in complexion
// Where John, 45, Fair are values in the list
// b. Add the list below to the person list
// children = ['Joan', 'Peter', 'Cynthia']

let person = ['John', 45, 'Fair', true, 'Tall']
let children = ['Joan', 'Peter', 'Cynthia']
// Question 1a
console.log('Question 1')
let solution = `My name is ${person[0]}, I am ${person[1]}years old and ${person[2]} in complexion`;
console.log(solution);
// Question 1b
person.push(children);
console.log(person);

person = { 
           name:'John', 
           age: 45, 
           color:'Fair', 
           status: true, 
           height: 'Tall' 
        }

// Get the values in the object in order to form the sentence below
// My name is John, I am 45years old and Fair in complexion
// Where John, 45, Fair are values in the list
console.log('Question 2')
console.log(`My name is ${person.name}, I am ${person.age}years old and ${person.color} in complexion`);

// 3. Using the nested object below write a program in JavaScript that will form the sentence below
// The capital of India is New Delhi while Germany is Berlin
// Where New Delhi and Berlin are values in the list
world = { 
    Africa:{Nigeira:'Abuja', Ghana:'Accra', Egypt:'Cairo'}, 
    Europe:{England:'London', Germany:'Berlin', Spain:'Madrid'}, 
    Asia:{Japan:'Tokyo', China:'Beijing', India:'New Delhi'}, 
}
console.log(`The capital of India is ${world.Asia.India} while Germany is ${world.Europe.Germany}`);

// Using any of the conditional statement learnt write a simple JavaScript program that will 
// output the score and remark eg “Your score is 76 and this is Excellence” whenever, the score 
// variable is changes using the algorithm below. Make sure that invalid 
// score such as value greater than 100 or less than 1 are detected and reported.
// 0  – 34 = Fail
// 35 – 44 = Pass
// 45 – 49 = Fair
// 50 – 59 = Good
// 60 – 69 = Very Good
// 70 – 100 = Excellence

let score = 65;
if(score >=0 && score <=34){
    grade = "Fail";
    console.log(`Your score is ${score} and your grade is ${grade}`)
}else if(score >= 35 && score <=44){
    grade = "Pass";
    console.log(`Your score is ${score} and your grade is ${grade}`)
}else if(score >= 45 && score <=49){
    grade = "Fair";
    console.log(`Your score is ${score} and your grade is ${grade}`)
}else if(score >= 50 && score <= 59){
    grade = "Good";
    console.log(`Your score is ${score} and your grade is ${grade}`)
}else if(score >= 60 && score <= 69){
    grade = "Very Good";
    console.log(`Your score is ${score} and your grade is ${grade}`)
}else if(score >= 70 && score <= 100){
    grade = "Excellent";
    console.log(`Your score is ${score} and your grade is ${grade}`)
}else{
    console.log("Invalid score dictated");
}

// Write a program in JavaScript that will sums all the numbers in 
// a array 10, 20, 30, 40, 70, 200, 300 and also determine the average.

let numbers = [10, 20, 30, 40, 70, 200, 300];


console.log(numbers[0])
console.log(numbers[1])

let total = 0;
let x = 0;
while(x < numbers.length){
    // total = total + numbers[x];
    total += numbers[x];
    console.log(`Addition insoide loop  ${total}`)
    x++;
}
console.log(`Total: ${total}`)
console.log(`Average: ${total/numbers.length}`)

// Create a multiplication table program for 2 times that will stop at 12 using while loop, 
// let the result be displayed on the terminal below
// 2 X 1 = 2 
// 2 X 2 = 4 
// 2 X 3 = 6 
// 2 X 4 = 8 
// 2 X 5 = 10 
// 2 X 6 = 12 
// 2 X 7 = 14

x = 1;
while(x <= 12){
    console.log(`2 X ${x} = ${2 * x}`);
    x++;
}

// Write a program in JavaScript that tells if the name you supplied is in a list or the name is not in a list.
let pastPresidents = ["Jonathan", "Yara dua", "Babangida", "Abacha"];
let presidentName = "Buhari";
x = 0;

let result = "";
while(x < pastPresidents.length){
    if(presidentName === pastPresidents[x]){
        result += `${presidentName} is in the array`;
        break;
    }else{
        result += `${presidentName} is not in the array`;
        break;
    }
    x++
}

console.log(result);


const students = { 
                 student1:"Wizzy", 
                 student2:"Onyekach", 
                 student3:"Chukwudi", 
                 student4:"Temiloluwa", 
                 student4:"Daniel", 
            }

for( let std in students){
    console.log(std, students[std])
}
