
function office(name, color="Yellow"){
    console.log(`The color of ${name} is ${color}`);
}


office("MTN")
office("Software Academy", "Green")

// x = 1;
// while(x <= 10){
//     if(x % 2 == 0){
//         console.log(x)
//     }
//     x++
// }

function getEvenNumbers(stop, start=1){
    while(start <= stop){
        if(start % 2 == 0){
            console.log(start)
        }
        start++
    }
}

getEvenNumbers(10)
getEvenNumbers(20, 8)