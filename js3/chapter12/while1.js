let x = 1
while(x <= 5){
    console.log(x);
    x++
}

let states = ["Lagos", "Imo", "Abuja", "Calabar", "Benue"];
x = 0;
while(x < states.length){
    console.log(states[x]);
    x++
}

let ul = document.getElementById("list");
x = 0;
ul.innerHTML = ""
while(x < states.length){
     ul.innerHTML += `<li>${states[x]}</li>`;
     console.log(ul.innerHTML);
     x++;
}

let sentence = "I love Jesus";
sentence += " he is my friend";
console.log(sentence)




