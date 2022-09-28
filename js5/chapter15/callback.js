

let displayMessage = ()=>{
    document.getElementById("demo1").innerHTML = "Hello there";
    console.log("Hello there");
}

setTimeout(displayMessage, 6000)


setTimeout(function(){
    document.getElementById("demo2").innerHTML = "Another Date here";
}, 2000)

function displayData(something){
    document.getElementById("demo3").innerHTML = something;
}

function myCalculator(num1, num2, callBack){
    sum = num1 + num2;
    callBack(sum)
}

myCalculator(5, 5, displayData);


let displayTime = ()=>{
    d = new Date();
    document.getElementById("demo3").innerHTML = d.getHours()+ " : "+d.getMinutes()+" : "+d.getSeconds();
}

setInterval(displayTime, 1000)