// Creating Strings
let str1 = "Hello";
let str2 = 'JavaScript';
let str3 = `Welcome`;
console.log("Strings:", str1, str2, str3);

console.log(str3.slice(3));
console.log(str3.slice(3,7));

// String Length
console.log("Length of str2:", str2.length);

// Access Characters

console.log("First char of str1:", str1[0]);
console.log("Last char of str2:", str2[str2.length - 1]);

// String Immutability
str1[0] = "Y";
console.log("After trying to change str1:", str1);

// Uppercase & Lowercase
console.log("Uppercase:", str2.toUpperCase());
console.log("Lowercase:", str2.toLowerCase());

//  before Trim spaces
let strWithSpaces = "   Welcome to JS   ";
console.log("Before Trimmed:", strWithSpaces);

//  Trim spaces
let strWithSpace = "   Welcome to JS   ";
console.log("After Trimmed:", strWithSpace.trim());

//  Check if string includes word
console.log("Includes 'Script':", str2.includes("Script"));
console.log("Includes 'Python':", str2.includes("Python"));

//  startsWith() and endsWith()
let file = "index.html";

console.log("Starts with 'index':", file.startsWith("in"));
console.log("Ends with 'html':", file.endsWith("html"));

//  indexOf
console.log("Index of 'S' in str2:", str2.indexOf("a"));
console.log("Index of 'x' in str2:", str2.indexOf("x"));

// slice()
console.log("Slice 0-4:", str2.slice(0,4)); //0-3
console.log("Slice 4-end:", str2.slice(4));
console.log("Slice -4 negative:", str2.slice(-4));

//  substring()
console.log("Substring 0-4:", str2.substring(0,4));

//  replace()
let msg = "I like Java";
console.log("Replace:", msg.replace("Java", "JavaScript"));

//  replaceAll()
let multiMsg = "JS is easy. JS is powerful.";
console.log("Replace all JS:", multiMsg.replaceAll("JS", "JavaScript"));

//  split()
let fruits = "apple,banana,orange";
console.log("Split fruits:", fruits.split(","));

//  join()
let strToJoin = "HELLO";
console.log("Join chars with -:", strToJoin.split("").join("-"));

// Concatenation
let firstName2 = "John";
let lastName = "Doe";
console.log("Concatenation:", firstName2 + " " + lastName);

// Template literals
let name = "Alex";
let age = 22;

console.log(`Template literal: My name is ${name} and I am ${age} years old`);

console.log("My name is "+name);

//  Count characters manually
let count = 0;

//let str2 = 'JavaScript';

for (let char of str2) {
     count++;
     }
console.log("Character count:", count);


// Reverse string
let reversed = str2.split("").reverse().join("");
console.log("Reversed str2:", reversed);

//let str2 = 'JavaScript';  --> tpircsavaj
