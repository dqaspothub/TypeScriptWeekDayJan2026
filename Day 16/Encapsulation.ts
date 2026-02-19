class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

let account = new BankAccount();
account.deposit(5000);
console.log(account.getBalance());
