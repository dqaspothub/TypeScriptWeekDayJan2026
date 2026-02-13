class User {

    name: string;
    age?: number;

    // Overload signatures
    constructor(name: string);
    constructor(name: string, age: number);

    // Single implementation
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }
}


let user1 = new User("Ravi");
let user2 = new User("Arun", 25);

console.log(user1);
console.log(user2);

/////////////////////////////////////////

class BankAccount {

    accountNumber: number;
    balance: number;

    constructor(accountNumber: number);
    constructor(accountNumber: number, balance: number);

    constructor(accountNumber: number, balance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}

let acc1 = new BankAccount(101);
let acc2 = new BankAccount(102, 5000);

console.log(acc1);
console.log(acc2);
