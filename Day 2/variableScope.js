// Var can be accessed in side and out side of the scope
if (true) {
 var x = 10;
  console.log(x); 
}
console.log(x);

// let can be accessed in side and not out side of the scope
if (true) {
 let y = 10;
  console.log(y); 
}
console.log(y); // Unable to access this

// const can be accessed in side and not out side of the scope

if (true) {
 const z = 10;
  console.log(z); 
}
console.log(z); // Unable to access this

 
