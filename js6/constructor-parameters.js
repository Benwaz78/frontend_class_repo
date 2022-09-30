class HumanBeing{

    numberOfEyes = 2;
    numberOfLegs = 2;

    constructor(firstName, age){
       this.fname = firstName;
       this.ag = age;
    }

    walk = ()=>{
        return "I can walk";
    }
    sleep = ()=>{
        return `${this.fname} can sleep very well`;
    }
}

console.log("Benedict Data")
h1 = new HumanBeing("Benedict", 45);
console.log(h1.fname)
console.log(h1.ag)
console.log(h1.sleep())
console.log("Onyekachi Data")
h2 = new HumanBeing("Onyekachi", 25);
console.log(h2.fname)
console.log(h2.ag)
console.log(h2.sleep())