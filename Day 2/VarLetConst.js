var name = "Kannathasan"; //Older version

let age = 20; // Latest version

const lastName ="E"; // We can't change the value once we declar


// var - Redeclaration → ALLOWED

var a = 10;
var a = 20;   // No error

// var - Reassignment → ALLOWED

var a = 10;
a = 30;       // Allowed

//let - Redeclaration → NOT ALLOWED

let b = 10;
let b = 20;   // Error

// let Reassignment → ALLOWED

let b = 10;
b = 25;       // Allowed

//const Redeclaration → NOT ALLOWED

const c = 10;
const c = 20;   // ❌ Error

// const Reassignment → NOT ALLOWED

const c = 10;
c = 50;         // ❌ Error
