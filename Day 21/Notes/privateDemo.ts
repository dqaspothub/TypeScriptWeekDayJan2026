class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    //getter Method
    public getBalance(): number {
        return this.balance;
    }
}

let account = new BankAccount(1000);

account.deposit(500);
console.log(account.getBalance()); // ✅ Allowed

// console.log(account.balance); ❌ ERROR


class Person {
    private name: string = "John";
}

class Employe extends Person {
    public show() {
        // console.log(this.name); ❌ ERROR
    }
}
