async function test() {
  return 10;
}

console.log(test()); // Promise { fulfilled: 10 }

//async functions always return a Promise
//await pauses the function execution until the Promise is resolved
//await can be used ONLY inside an async function

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("John");
    }, 2000);
  });
}


getUser().then(user => {
  console.log(user);
});


////////////////////////////////

async function showUser() {

  const userName = getUser();
  
  console.log("The async keyword returns " + userName);
}

showUser();
