// TypeScript code

function calculateTotals(price: number, discount: number) {
  return price - discount;
}

let totals = calculateTotals(100, "20"); // ❌ Compile-time Error
console.log("Total:", totals);

/*
| Feature           | JavaScript | TypeScript   |
| ----------------- | ---------- | ------------ |
| Type checking     | ❌ No       | ✅ Yes     |
| Type inference    | ❌ No       | ✅ Yes     |
| Error detection   | Runtime      | Compile-time|
| Auto-completion   | ❌ Weak     | ✅ Strong   |
| Safer refactoring | ❌ No       | ✅ Yes       | 

JavaScript trusts you. TypeScript verifies you.
And Type Inference lets TypeScript do that without extra code.

*/


let firstName : String = "Kannathasan";
let firstNames = "Kannathasan";

