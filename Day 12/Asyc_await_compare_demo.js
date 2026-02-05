// Simulate fetching user
function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: userId, name: "Rahul" });
        }, 1000);
    });
}

// Simulate fetching orders
function getOrders(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Orders fetched for ${user.name}`);
            resolve(["Order1", "Order2"]);
        }, 1000);
    });
}

// Simulate fetching order details
function getOrderDetails(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Details fetched for ${order}`);
            resolve({ order: order, price: 500 });
        }, 1000);
    });
}

// Simulate payment
function makePayment(details) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Payment successful for ${details.order}`);
            resolve("Payment Done");
        }, 1000);
    });
}

// ✅ Main async function
async function processOrder() {
    try {
        const user = await getUser(1);
        const orders = await getOrders(user);
        const details = await getOrderDetails(orders[0]);
        const status = await makePayment(details);

        console.log(status);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Call the async function
processOrder();
