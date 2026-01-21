// Comparison Operators Example Program

let a = 10;
let b = "10";
let c = 20;

console.log("Equal (==):", a == b);        // true (value same)
console.log("Strict Equal (===):", a === b); // false (type different)

console.log("Not Equal (!=):", a != b);      // false
console.log("Strict Not Equal (!==):", a !== b); // true

console.log("Greater Than (>):", c > a);     // true
console.log("Less Than (<):", a < c);        // true

console.log("Greater Than or Equal (>=):", a >= 10); // true
console.log("Less Than or Equal (<=):", a <= 5);     // false

console.log("Boolean value equal operator check" ,true==1); // true ->true will be treated as 1
console.log("Boolean value equal operator check" ,false==0); //false -> false will be treated as 0

// Real-time example using if condition
let age = 17;

if (age >= 18) {
  console.log("User is eligible to vote");
} else {
  console.log("User is NOT eligible to vote");
}
