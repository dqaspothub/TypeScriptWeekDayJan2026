var User = /** @class */ (function () {
    // Single implementation
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User("Ravi");
var user2 = new User("Arun", 25);
console.log(user1);
console.log(user2);
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        if (balance === void 0) { balance = 0; }
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    return BankAccount;
}());
var acc1 = new BankAccount(101);
var acc2 = new BankAccount(102, 5000);
console.log(acc1);
console.log(acc2);
