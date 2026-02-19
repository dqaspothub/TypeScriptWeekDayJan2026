abstract class Payment {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    abstract makePayment(): void;  // abstract method

    printReceipt(): void {
        console.log(`Payment of ${this.amount} processed.`);
    }
}

class CreditCardPayment extends Payment {

    makePayment(): void {
        console.log(`Paid ${this.amount} using Credit Card.`);
    }
}

class UpiPayment extends Payment {

    makePayment(): void {
        console.log(`Paid ${this.amount} using UPI.`);
    }
}


let payment1 = new CreditCardPayment(5000);
payment1.makePayment();
payment1.printReceipt();

let payment2 = new UpiPayment(2000);
payment2.makePayment();
payment2.printReceipt();
