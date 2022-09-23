const person = '{"name":"John", "age":30, "city":"New York"}';
const personObjectData = JSON.parse(person);
// console.log(typeof(personObjectData))
// let number = "50.5";
// console.log(typeof(number))
console.log(personObjectData.name)
console.log(personObjectData.age)

const students = {
    student1:"Wizzy",
    student2:"Onyekach",
    student3:"Chukwudi",
    student4:"Temiloluwa",
    student4:"Daniel",
}
const convertStudent = JSON.stringify(students);
console.log(typeof(convertStudent));

