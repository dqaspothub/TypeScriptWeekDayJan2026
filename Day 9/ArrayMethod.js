let fruits = ["apple", "banana", "mango"];

// Array methods
fruits.push("orange");
fruits.pop();
fruits.unshift("grape");
fruits.shift();

fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});

// map
let lengths = fruits.map(kanna => kanna.length);

// filter
let longFruits = fruits.filter(fruit => fruit.length > 5);

// reduce
let totalLength = fruits.reduce((sum, f) => sum + f.length, 0);

let marks = [35, 78, 90, 45, 60];

// map
let bonus = marks.map(m => m + 5);

// filter
let passed = marks.filter(m => m >= 40);

// reduce
let total = marks.reduce((sum, m) => sum + m, 0);

// find
let firstFail = marks.find(m => m < 40);

// every
let allPassed = marks.every(m => m >= 40);

// some
let anyFail = marks.some(m => m < 40);

console.log(bonus);
console.log(passed);
console.log(total);
console.log(firstFail);
console.log(allPassed);
console.log(anyFail);

// Crt + /
// map → modify

// filter → select (Multiple Value)

// reduce → combine

// find → first value (One Single Value)

// findIndex → position 

// every → all

// some → any

