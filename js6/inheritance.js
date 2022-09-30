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


class Baby extends HumanBeing{
    constructor(firstName, age, size){
        super(firstName, age)
        this.sz = size;
    }
    canCry = ()=>{
        return "Baby can cry";
    }
}

b = new Baby("Shirley", 2, 30);
console.log(b.canCry());
console.log(b.sz)

