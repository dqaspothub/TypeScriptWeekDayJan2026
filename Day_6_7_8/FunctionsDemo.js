// 1️⃣ Function Declaration (no parameters)
function greet() {

    console.log("Hello! Welcome to JavaScript Functions Demo.");
}
greet(); // Call the function


// 2️⃣ Function with Parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Alex");
greetUser("John");


// 3️⃣ Function with Return Value
function add(a, b) {
    return a + b;
}
let sum = add(10, 5);
console.log("Sum of 10 + 5 =", sum);


// 4️⃣ Function Expression
const multiply = function(x, y) {
    return x * y;
};
console.log("Multiply 4 * 5 =", multiply(4, 5));

// 5️⃣ Arrow Function
const divide = (a, b) => a / b;
console.log("Divide 20 / 4 =", divide(20, 4));

const mul = (a1,a2) => a1*a2;
console.log("The mul value of two number is ", mul(10,2));

// Arrow function with multiple statements
const greetArrow = (name) => {
    let message = `Hi, ${name}!`;
    return message;
};
let greetMessage = greetArrow("dqaspothub");

console.log(greetMessage);


// 6️⃣ Function with Default Parameters
function welcomeUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}
welcomeUser("Sarah");
welcomeUser(); // Uses default

function countryOptions (CountryCheck ="US"){
    console.log("The selected Country " +countryOptions )
}


// 7️⃣ Nested Function
function outerFunction(a, b) {
    function innerFunction(x, y) {
        return x + y;
    }
    return innerFunction(a, b) * 2;
}
console.log("Result of nested function:", outerFunction(3, 4));

// 8️⃣ Real-Time Example: Area of Rectangle
function calculateArea(length, width) {
    return length * width;
}
let area1 = calculateArea(5, 10);
let area2 = calculateArea(7, 3);
console.log("Area 1:", area1);
console.log("Area 2:", area2);

// 9️⃣ Another Real-Time Example: Even or Odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log("5 is", checkEvenOdd(5));
console.log("10 is", checkEvenOdd(10));


