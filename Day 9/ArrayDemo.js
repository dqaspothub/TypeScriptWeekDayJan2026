
/*-----------------------------------------------
  1. Creating an Array
------------------------------------------------*/
let fruits = ["Apple", "Banana", "Orange"];
console.log("\nInitial Array:", fruits);

//1️⃣ Single-Dimensional Array

let mark = [80, 85, 90];

// 2️⃣ Multi-Dimensional Array
let matrix = [
    [1, 2],
    [3, 4]
];

// 3️⃣ Mixed Data Array

let mixed = [1, "Hello", true, null];

// 4️⃣ Array of Objects

let students = [
    { name: "Amit", age: 20 },
    { name: "Riya", age: 22 }
];

/*-----------------------------------------------
  2. push() – Add element at the end
------------------------------------------------*/
fruits.push("Mango");
console.log("After push():", fruits);

/*-----------------------------------------------
  3. pop() – Remove element from the end
------------------------------------------------*/
fruits.pop();
console.log("After pop():", fruits);

/*-----------------------------------------------
  4. unshift() – Add element at the start
------------------------------------------------*/
fruits.unshift("Grapes");
console.log("After unshift():", fruits);

/*-----------------------------------------------
  5. shift() – Remove element from the start
------------------------------------------------*/
fruits.shift();
console.log("After shift():", fruits);

/*-----------------------------------------------
  6. length – Total number of elements
------------------------------------------------*/
console.log("Array length:", fruits.length);

/*-----------------------------------------------
  7. indexOf()
------------------------------------------------*/
console.log("Index of Banana:", fruits.indexOf("Banana"));

/*-----------------------------------------------
  8. includes()
------------------------------------------------*/
console.log("Includes Apple?", fruits.includes("Apple"));

/*-----------------------------------------------
  9. slice() – Extract portion (non-destructive) - Extract part (does NOT change original)
------------------------------------------------*/
let slicedFruits = fruits.slice(0, 2);
console.log("slice(0,2):", slicedFruits);
console.log("Original Array after slice:", fruits);

/*-----------------------------------------------
  10. splice() – Add / Remove elements - changes original)
------------------------------------------------*/
fruits.splice(1, 1, "Pineapple");
console.log("After splice():", fruits);

/*-----------------------------------------------
  11. concat() method does not change the existing arrays. It always returns a new array.
------------------------------------------------*/
let moreFruits = ["Papaya", "Kiwi"];
let allFruits = fruits.concat(moreFruits);
console.log("After concat():", allFruits);

/*-----------------------------------------------
  12. join()
------------------------------------------------*/
console.log("After join():", allFruits.join(" | "));

/*-----------------------------------------------
  13. sort()
------------------------------------------------*/
let numbers = [40, 10, 100, 30, 20];
numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);

/*-----------------------------------------------
  14. reverse()
------------------------------------------------*/
numbers.reverse();
console.log("Reversed Numbers:", numbers);

/*-----------------------------------------------
  15. forEach()
------------------------------------------------*/
console.log("\nforEach() Demo:");
allFruits.forEach((fruit, index) => {
  console.log(index + " -> " + fruit);
});

/*-----------------------------------------------
  16. map() – Transform data
------------------------------------------------*/
let prices = [100, 200, 300];

let gstPrices = prices.map(price =>  price * 10);
console.log("\nOriginal Prices:", prices);
console.log("Prices with GST (map):", gstPrices);

/*-----------------------------------------------
  17. filter() – Select data
------------------------------------------------*/
let ages = [12, 18, 25, 15, 30];

let adults = ages.filter(age => age >= 18);
console.log("\nAdults (filter):", adults);

/*-----------------------------------------------
  18. reduce() – Aggregate data
------------------------------------------------*/
let totalBill = prices.reduce((sum, price) => sum + price, 0);
console.log("Total Bill (reduce):", totalBill);

/*-----------------------------------------------
  19. find() - Find will provide a single value ( To get the multiple value we can use Filter())
------------------------------------------------*/
let users = [{ name: "Rahul", age: 17 },{ name: "Anita", age: 24},{ name: "John", age: 23 },{ name: "Kanna", age: 10 }];

let firstAdult = users.find(user => user.age >= 18);
console.log("\nFirst Adult (find):", firstAdult);

/*-----------------------------------------------
  20. findIndex()
------------------------------------------------*/
let underAgeIndex = users.findIndex(user => user.age < 18);
console.log("Index of underage user:", underAgeIndex);

/*-----------------------------------------------
  21. every()
------------------------------------------------*/
let passedMarks = [60, 70, 80, 90];
console.log("All passed?", passedMarks.every(mark => mark >= 35));

/*-----------------------------------------------
  22. some()
------------------------------------------------*/
let marks = [20, 35, 40, 50];
console.log("Any failed?", marks.some(mark => mark < 35));

console.log("\n===== End of Array Demo =====");
