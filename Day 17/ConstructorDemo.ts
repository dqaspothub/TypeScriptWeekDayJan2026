/*************************************************
 * CONSTRUCTOR DEMO – ALL IN ONE PROGRAM
 *************************************************/

/*
 RULES COVERED:
 1. Constructor name is fixed: constructor
 2. Only one constructor per class
 3. Automatically called when object is created
 4. No return type
 5. Supports parameters, default values, optional params
 6. Access modifiers in constructor
 7. Inheritance with super()
 8. Private & Protected constructors
**************************************************/

// 1️⃣ DEFAULT CONSTRUCTOR
class Logger {
    constructor() {
        console.log("Logger object created");
    }
}

const log = new Logger();


// 2️⃣ PARAMETERIZED CONSTRUCTOR + ACCESS MODIFIERS
class Employee {
    constructor(
        public id: number,
        public name: string,
        private salary: number
    ) {}

    getSalary() {
        return this.salary;
    }
}

const emp1 = new Employee(101, "Arjun", 50000);
console.log(emp1.name);
console.log(emp1.getSalary());


// 3️⃣ CONSTRUCTOR WITH DEFAULT VALUES
class Product {
    constructor(
        public productName: string,
        public price: number = 1000
    ) {}
}

const p1 = new Product("Laptop");
const p2 = new Product("Mobile", 20000);
console.log(p1, p2);


// 4️⃣ OPTIONAL PARAMETER CONSTRUCTOR
class Student {
    constructor(
        public name: string,
        public age?: number
    ) {}
}

const s1 = new Student("Ravi");
const s2 = new Student("Ravi", 22);
console.log(s1, s2);


// 5️⃣ INHERITANCE + super()
class Animal {
    constructor(public name: string) {
        console.log("Animal constructor called");
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name); // mandatory
        console.log("Dog constructor called");
    }
}

const d1 = new Dog("Buddy", "Labrador");
console.log(d1);


// 6️⃣ PROTECTED CONSTRUCTOR
class BaseUser {
    protected constructor(public role: string) {}
}

class Admin extends BaseUser {
    constructor() {
        super("Admin");
    }
}

const admin = new Admin();
console.log(admin);


// 7️⃣ PRIVATE CONSTRUCTOR (SINGLETON PATTERN)
class Database {
    private static instance: Database;

    private constructor() {
        console.log("Database connected");
    }

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true


// 8️⃣ NO CONSTRUCTOR (DEFAULT PROVIDED BY TYPESCRIPT)
class Utility {
    static add(a: number, b: number) {
        return a + b;
    }
}

console.log(Utility.add(10, 20));


/*************************************************
 * END OF DEMO
 *************************************************/
