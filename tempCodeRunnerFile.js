const promt=require("prompt-sync")({sigint:true}) ;
let Arr=['plum.png','orange.jpg'];
console.log(Arr[0]);


let answer = +promt("Есть ли вам 18?","Да");
console.log(typeof(answer));

console.log("Arr"+"-object")