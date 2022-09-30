
class HumanBeing{

    numberOfEyes = 2;
    numberOfHands = 2;
    numberOfLegs = 2;

    walk = ()=>{
        return "I can walk";
    }
    sleep = ()=>{
        return "I can sleep";
    }

    details = ()=>{
        return `This is my properties ${this.numberOfEyes}eyes ${this.numberOfHands} hands ${this.numberOfLegs}legs`
    }

    person = (firname, age) =>{
        console.log(`My name is ${firname} I am ${age}years old`);
    }
}

h1 = new HumanBeing()
console.log(h1.numberOfEyes)
console.log(h1.numberOfHands)
console.log(h1.walk())
console.log(h1.details())
h1.person("Benedict", 55);
