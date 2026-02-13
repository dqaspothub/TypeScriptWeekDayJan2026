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
class CollegeStudent {
    constructor(
        public name: string,
        public age?: number
    ) {}
}

const s1 = new CollegeStudent("Ravi");
const s2 = new CollegeStudent("Ravi", 22);
console.log(s1, s2);


//The other way 

class NewEmployee {

        id: number;
         name: string;
         salary: number;
         
    constructor(id: number,name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}
