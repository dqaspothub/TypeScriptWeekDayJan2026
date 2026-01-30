//Function Scope - Variables declared inside a function are accessible only inside that function.

function demo() {
    let x = 10;
    console.log(x);
}
// console.log(x); ❌ Error


//Global Scope - Variables declared outside functions are accessible everywhere.

let y = 20;

function test() {
    console.log(y);
}
test();

Block Scope (let, const)
{
    let a = 5;
}
// console.log(a); ❌ Error

Arrow Functions (ES6)

Syntax:
const functionName = () => { };

Example:

const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

//Callback Functions - A callback function is a function passed as an argument to another function.

function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("John", sayBye);


//IIFE (Immediately Invoked Function Expression)

Executes immediately after creation.

(function() {
    console.log("IIFE Executed");
})();



// Function Declaration
function greet(name) {
    return "Hello " + name;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const square = n => n * n;

// Callback Function
function processNumber(num, callback) {
    return callback(num);
}

// Recursive Function
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

// IIFE
(function() {
    console.log("IIFE Running...");
})();

// Higher Order Function
const result = processNumber(5, square);

console.log(greet("Alice"));
console.log(add(3, 4));
console.log("Square:", result);
console.log("Factorial:", factorial(4));
