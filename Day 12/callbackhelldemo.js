function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: userId, name: "Rahul" });
    }, 1000);
}

function getOrders(user, callback) {
    setTimeout(() => {
        console.log("Orders fetched for", user.name);
        callback(["Order1", "Order2"]);
    }, 1000);
}

function getOrderDetails(order, callback) {
    setTimeout(() => {
        console.log("Details fetched for", order);
        callback({ order: order, price: 500 });
    }, 1000);
}

function makePayment(details, callback) {
    setTimeout(() => {
        console.log("Payment successful for", details.order);
        callback("Payment Done");
    }, 1000);
}

getUser(1, function (user) {
    getOrders(user, function (orders) {
        getOrderDetails(orders[0], function (details) {
            makePayment(details, function (status) {
                console.log(status);
            });
        });
    });
});
