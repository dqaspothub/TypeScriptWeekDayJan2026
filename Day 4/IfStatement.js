
let results = (age>=18) ? "Eligile to vote" : "Eligible to note vote";


let age = 20;

if (age >= 18) {
  console.log("Eligible to vote");
}

let marks = 45;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

let score = 82;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


let ages = 26;
let hasLicense = true;

if (ages >= 18) {
  if (hasLicense) {
    console.log("Can drive");
  } else {
    console.log("License required");
  }
}

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}
