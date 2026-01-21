// Logical Operators Example Program

let age = 22;
let hasVoterID = true;
let isStudent = false;

// Logical AND (&&)
console.log("AND Operator:");
console.log(age < 18 && hasVoterID); // true

// Logical OR (||)
console.log("OR Operator:");
console.log(age > 18 || isStudent); // false

// Logical NOT (!)
console.log("NOT Operator:");
console.log(!hasVoterID); // false

// Real-time example using if condition
if (age >= 18 && hasVoterID) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// Combination of logical operators
if ((age >= 18 && hasVoterID) || isStudent) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
