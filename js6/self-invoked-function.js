

(function(){
    console.log("This will run immediately");
})();


(()=>{
    console.log("The arrow function version");
})();


setInterval(function(){
    console.log("Learning Setinterval")
}, 1000)

setInterval(function(){}, 1000)