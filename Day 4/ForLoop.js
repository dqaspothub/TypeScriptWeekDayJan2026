
let water;  // Declaration

for (water=7; water >= 0; --water) {
  console.log(water);
}


let battery = 5;

while (battery<100){
  console.log("Charging...");
  battery +=10;
}

let num = 5;

do {
  console.log(num);
} while (num < 3);


let cash = 25;

do {
console.log("buy at least one product");
cash -=50  //cash = cash - 50

} while(cash>0);


let colors = ["Red", "Green", "Blue"];


for (let c of colors) {
  console.log(c);
}

let values = [5,6,7];


for (let num of values) {
  console.log(num);
}

console.log("********************");

for (let i = 1; i <= 5; i++) {
  if (i === 3) 
    break;
  console.log(i);
}


console.log("********************");

for (let i = 1; i <= 5; i++) {
  if (i === 3) 
    continue;
  console.log(i);
}
console.log("********************");