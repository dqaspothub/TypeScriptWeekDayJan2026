
let student = {
    name: "Arjun",
    age: 21,
    course: "JavaScript",
    isActive: true
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}


let fruits = ["Apple", "Banana", "Mango"];

for (let index in fruits) {
    console.log(index + " -> " + fruits[index]);
}


let word = "JavaScript";

for (let char of word) {
    console.log(char);
}


let numbers = [10, 20, 30];

console.log("Using for...in:");
for (let index in numbers) {
    console.log("Index:", index, "Value:", numbers[index]);
}

console.log("Using for...of:");
for (let value of numbers) {
    console.log("Value:", value);
}
