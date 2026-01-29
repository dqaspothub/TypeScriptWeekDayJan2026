//String Literal - "",'',``// String pool memory same memory allocation

let firstName = `dqaspothub`;
let userName = `dqaspothub`;

//String Object // Heap Memory it gets stored in two different memory address

let firstName1 = new String("dqaspothub");
let userName1 = new String("dqaspothub") 

let companyName1 = "dqaspothub";

function reversString(){

let chars = companyName1.split("");

console.log(chars);

let reversed="";

for (let index = chars.length-1; index >= 0; index--) {
    reversed=reversed+chars[index];
   }
return reversed;

}
console.log(reversString());