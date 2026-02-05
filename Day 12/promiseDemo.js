function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: userId, name: "Rahul" });
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Order1", "Order2"]);
        }, 1000);
    });
}

function getOrderDetails(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order, price: 500 });
        }, 1000);
    });
}

function makePayment(details) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment Done");
        }, 1000);
    });
}

getUser(1)
    .then(user => getOrders(user))
    .then(orders => getOrderDetails(orders[0]))
    .then(details => makePayment(details))
    .then(status => console.log(status))
    .catch(error => console.error(error));


    