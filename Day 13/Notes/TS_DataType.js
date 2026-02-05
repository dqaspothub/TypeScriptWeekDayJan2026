/*************************************************
 * TypeScript Data Types – Single Program Example
 *************************************************/

// 1️⃣ Primitive Types
let age: number = 25;
let username: string = "Rahul";
let isLoggedIn: boolean = true;

console.log("Age:", age);
console.log("Username:", username);
console.log("Is Logged In:", isLoggedIn);

// 2️⃣ Null & Undefined
let middleName: string | null = null;
let address: undefined = undefined;

console.log("Middle Name:", middleName);
console.log("Address:", address);

// 3️⃣ BigInt
let largeNumber: bigint = 9876543210123456789n;
console.log("BigInt Value:", largeNumber);

// 4️⃣ Symbol
let sym1: symbol = Symbol("id");
let sym2: symbol = Symbol("id");
console.log("Symbols equal?", sym1 === sym2);

// 5️⃣ Array
let marks: number[] = [85, 90, 95];
let subjects: Array<string> = ["Math", "Science", "English"];

console.log("Marks:", marks);
console.log("Subjects:", subjects);

// 6️⃣ Tuple
let student: [number, string, boolean] = [101, "Amit", true];
console.log("Student Tuple:", student);

// 7️⃣ Object
let employee: {
  id: number;
  name: string;
  salary: number;
} = {
  id: 1,
  name: "Neha",
  salary: 50000
};

console.log("Employee:", employee);

// 8️⃣ Any (Avoid using in real projects)
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log("Any Type:", randomValue);

// 9️⃣ Unknown (Safer than any)
let userInput: unknown = "TypeScript";

if (typeof userInput === "string") {
  console.log("Unknown Type Length:", userInput.length);
}

// 🔟 Union Type
let userId: number | string;
userId = 101;
userId = "EMP101";
console.log("User ID:", userId);

// 1️⃣1️⃣ Literal Type
let status: "success" | "error" | "loading";
status = "success";
console.log("Status:", status);

// 1️⃣2️⃣ Enum
enum Role {
  Admin,
  User,
  Guest
}

let userRole: Role = Role.Admin;
console.log("User Role:", userRole);

// 1️⃣3️⃣ Type Alias
type User = {
  id: number;
  name: string;
  role: Role;
};

let user1: User = {
  id: 1,
  name: "Arjun",
  role: Role.User
};

console.log("User1:", user1);

// 1️⃣4️⃣ Interface
interface Product {
  id: number;
  name: string;
  price: number;
}

let product: Product = {
  id: 101,
  name: "Laptop",
  price: 55000
};

console.log("Product:", product);

// 1️⃣5️⃣ Function with Types
function add(a: number, b: number): number {
  return a + b;
}

console.log("Addition:", add(10, 20));

// 1️⃣6️⃣ Void Function
function printMessage(message: string): void {
  console.log("Message:", message);
}

printMessage("Welcome to TypeScript");

// 1️⃣7️⃣ Never Type
function throwError(message: string): never {
  throw new Error(message);
}

// Uncomment to test never type
// throwError("Something went wrong");

/*************************************************
 * END OF PROGRAM
 *************************************************/
