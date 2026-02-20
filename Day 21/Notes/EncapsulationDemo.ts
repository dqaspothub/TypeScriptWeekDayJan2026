class GovEmployee {
    private salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    public setSalary(amount: number): void {
        if (amount > 0) {
            this.salary = amount;
        } else {
            console.log("Salary must be positive");
        }
    }

    public getSalary(): number {
        return this.salary;
    }
}

const emp = new GovEmployee(50000);

emp.setSalary(60000);   // ✅ Valid
emp.setSalary(-1000);   // ❌ Rejected

console.log(emp.getSalary());  // 60000


class PrivateEmployee {
    private _salary: number;

    constructor(salary: number) {
        this._salary = salary;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        if (value > 0) {
            this._salary = value;
        } else {
            console.log("Invalid salary");
        }
    }
}

const emp1 = new PrivateEmployee(30000);

emp1.salary = 45000;    // calls setter
console.log(emp1.salary);  // calls getter


class BankAccounts {
    #balance: number;

    constructor(balance: number) {
        this.#balance = balance;
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}
