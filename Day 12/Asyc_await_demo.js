// Let’s simulate this flow:

// Login user

// Fetch user profile

// Fetch user orders

// Show result

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({ userId: 1 });
      } else {
        reject("Invalid credentials");
      }
    }, 2000);
  });
}


function getUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, name: "John Doe" });
    }, 1500);
  });
}


function getUserOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Laptop", "Mobile", "Headphones"]);
    }, 1500);
  });
}


async function userDashboard() {
  try {
    console.log("Logging in...");

    const login = await loginUser("admin", "1234");
    console.log("Login success:", login);

    console.log("Fetching profile...");
    const profile = await getUserProfile(login.userId);
    console.log("Profile:", profile);

    console.log("Fetching orders...");
    const orders = await getUserOrders(login.userId);
    console.log("Orders:", orders);

    console.log("Dashboard loaded successfully 🎉");

  } catch (error) {
    console.log("Error:", error);
  }
}

userDashboard();
