// JavaScript code

function calculateTotal(price, discount) {
  return price - discount;
}

let total = calculateTotal(100, "20"); // ❌ discount should be number
console.log("Total:", total);
