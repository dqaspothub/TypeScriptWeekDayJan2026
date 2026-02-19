abstract class Employee {
    
    constructor(public name: string, public salary: number) {}

    abstract calculateBonus(): number;

    displayDetails(): void {
        console.log(`Employee: ${this.name}, Salary: ${this.salary}`);
    }
}

class Developer extends Employee {
    calculateBonus(): number {
        return this.salary * 0.10;
    }
}

class Manager extends Employee {
    calculateBonus(): number {
        return this.salary * 0.20;
    }
}

let dev = new Developer("Arun", 50000);
dev.displayDetails();
console.log("Bonus:", dev.calculateBonus());

let mgr = new Manager("Raj", 80000);
mgr.displayDetails();
console.log("Bonus:", mgr.calculateBonus());
