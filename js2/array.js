player1 = 'Sancho'
player2 = 'Alex'
player3 = 'Marshall'

manu = ["Sancho", "Alex", "Marshall", "Penaldo"]
//Accessing values in an array
console.log(manu[0])
console.log(manu[1])

//Changing Values in an array
manu[0] = "Rashford"
console.log(manu[0])

//Adding values in an array
manu[4] = "Maguire"
console.log(manu[4])

playerName = "Maguire"


//Array can hold different types of data
person = ["Benedict", true, 40, ["Chidinma", "Kazeem"], {"color":"fair", "height":"tall"} ]

console.log(person.length)
console.log(person[0])
console.log(person[3][1])
console.log(person[4]["height"])

const fruits = ["Banana", "Orange", "Apple", "Mango"]; 
let fruit = fruits[fruits.length - 1]; //returns Mango
console.log(fruit)