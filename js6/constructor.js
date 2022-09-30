
class HumanBeing{

    constructor(){
      console.log("This is a constructor");
    }


    walk = ()=>{
        return "I can walk";
    }
    sleep = ()=>{
        return "I can sleep";
    }
}

h1 = new HumanBeing();
console.log(h1.walk())
