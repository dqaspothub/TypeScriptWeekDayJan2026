class Bank {

    transfer(accountNumber: number, amount: number): void;
    transfer(accountNumber: number, amount: number, description: string): void;
    transfer(accountNumber: number, amount: number, description: string, isUrgent: boolean): void;
    transfer(accountNumber: number, amount: number, description?: string, isUrgent?: boolean): void {

        console.log("Account:", accountNumber);
        console.log("Amount:", amount);

        if (description) {
            console.log("Description:", description);
        }
        if (isUrgent) {
            console.log("Urgent Transfer");
        }

        console.log("Transfer Successful");
    }
}

let bank = new Bank();

bank.transfer(12345, 1000);
bank.transfer(12345, 2000, "Rent payment");
bank.transfer(12345, 5000, "Medical", true);


class Calculator {

    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

        add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

let calc = new Calculator();

console.log(calc.add(2, 3));       // 5
console.log(calc.add(2, 3, 4));    // 9


/* Types of Method Overloading

In general OOPS (like Java), overloading can happen by:

1️⃣ Different number of parameters
2️⃣ Different type of parameters
3️⃣ Different order of parameters 

class Printer {

    print(data: string): void;
    print(data: number): void;

    print(data: any): void {
        console.log("Printing:", data);
    }
}

*/

class LoginPage {

    login(username: string, password: string): void;
    login(email: string, password: string, isEmail: boolean): void;

    login(user: string, password: string, isEmail?: boolean): void {

        if (isEmail) {
            console.log("Logging in using Email:", user);
        } else {
            console.log("Logging in using Username:", user);
        }

        console.log("Password:", password);
    }
}

let loginPage = new LoginPage();

loginPage.login("admin", "1234");
loginPage.login("admin@gmail.com", "1234", true);


class ProductPage {

    search(productName: string): void;
    search(productId: number): void;

    search(value: any): void {

        if (typeof value === "string") {
            console.log("Searching by name:", value);
        } else {
            console.log("Searching by ID:", value);
        }
    }
}


let page = new ProductPage();

page.search("Laptop");
page.search(101);



class Payment {

    // Method Overloading Signatures
    pay(amount: number): void;
    pay(amount: number, method: string): void;

    // Single Implementation
    pay(amount: number, method?: string): void {
        if (method) {
            console.log(`Paid ₹${amount} using ${method}`);
        } else {
            console.log(`Paid ₹${amount} using default payment method`);
        }
    }
}

let payment = new Payment();

payment.pay(1000);                // Default
payment.pay(2000, "UPI");         // With method

