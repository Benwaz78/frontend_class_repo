// Create a class named MathFunction with a constructor method that accepts two parameters length and width 
// and a method for area of circle which 
// accepts a parameter for its radius, and a perimeter of rectangle in which the 
// parameters are gotten from the constructor method.

// Create an instance of the MathFunction 
// class and call the perimeter of a rectangle and area of a radius

// Create a child class that will inherit the MathFunction class, this time use super() to modify the constructor method in the parent class so you can introduce a third parameter “height”. 
// Create a new method in this child class to calculate the Volume of Cuboid given the formular Length x Width x Height


class MathFunction{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    areaOfCircle = (radius)=>{
        return 3.142 * radius**2;
    }

    perimeter = ()=>{
        return 2 *(this.length + this.width);
    }
}

m1 = new MathFunction(100, 50);
console.log(m1.areaOfCircle(7));
console.log(m1.perimeter());


class SubMathFunction extends MathFunction{

    constructor(length, width, height){
        super(length, width)
        this.height = height;
    }

    volumeCuboid = ()=>{
        return this.length * this.width * this.height;
    }
}

s1 = new SubMathFunction(200, 100, 50);
console.log(s1.volumeCuboid());


// Create class called Product and this class should have a constructor method with foodName, prize, 
// noOfpacks, description as parameters.
// a. Create a method that will give a user 10% discount if he/she buys 5 packs of food and above and 5% discount if he/she buys 2 packs of food and above 
// and no discount if the user buys just one pack
// b. Create a method that will return the details of the user on the terminal.


// noOfpacks >= 5 =10%
// noOfpacks >= 2 = 5%
// noOfpacks == 1 = 0

laptopPrize = 100000
discount = laptopPrize * 0.05
discountPrize = laptopPrize - discount;


class Product{
    constructor(foodName, prize, noOfpacks, description){
        this.foodName = foodName;
        this.prize = prize;
        this.noOfpacks = noOfpacks;
        this.description = description;
    }

    discountPrize = ()=>{
        if(this.noOfpacks >= 5){
            return this.prize * this.noOfpacks - this.prize * 0.1;
        }else if(this.noOfpacks >= 2){
            return this.prize * this.noOfpacks - this.prize * 0.05;
        }else if(this.noOfpacks == 1){
            return this.prize * this.noOfpacks;
        }
    }

    detail = ()=>{
        let result = `Here are your details: \n`;
        result +=  `Foodname: ${this.foodName}`;
        result +=  `Prize: ${this.prize}`;
        result +=  `Description: ${this.description}`;
    }
}

p1 = new Product("Jellof Rice", 1500, 5, "Some Description");
console.log("Food Website for P1");
console.log(p1.discountPrize())


p2 = new Product("Jellof Rice", 1500, 1, "Some Description");
console.log("Food Website for P2");
console.log(p2.discountPrize())