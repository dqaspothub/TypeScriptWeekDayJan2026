for (let i = 1; i <= 5; i++) {
  console.log(i);
}


let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}


let num = 5;

do {
  console.log(num);
} while (num < 3);


let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
  console.log(color);
}


let user = {
  name: "Anil",
  age: 24
};

for (let key in user) {
  console.log(key + ": " + user[key]);
}


for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}


for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
