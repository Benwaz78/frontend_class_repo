let oldChelsea = '{"frank":"Lampard", "didier": "Drobga","nickolas": "Anelka"}';
let convertData = JSON.parse(oldChelsea);
console.log(typeof(convertData));

let chelsea = {
    frank:"Lampard",
    didier: "Drobga",
    nickolas: "Anelka"
}

convertData = JSON.stringify(chelsea);
console.log(typeof(convertData))