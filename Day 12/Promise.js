let orderFood = new Promise((resolve, reject) => {
  let foodReady = true;

  if (foodReady) {
    resolve("Food delivered");
  } else {
    reject("Order cancelled");
  }
});

orderFood
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });



  ////////////////////////////////////

  // Asynchronous chores using callbacks


  // Asynchronous chores using callbacks

function walkDog() {
   
        console.log("You walk the dog");
 
}

function cleanKitchen() {

        console.log("You clean the kitchen");
}

function takeOutTrash() {
 
        console.log("You take out the trash");
  
}


walkDog();
cleanKitchen()
takeOutTrash();
       
//////////////////////////////////////////////////////

function walkDog(callback) {
    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 2500);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("You take out the trash");
        callback();
    }, 500);
}

// Calling chores in order using callbacks (callback hell)
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("You finished all the chores");
        });
    });
});



/////////////////////////////////

// Chores with Promises

function walkDog() {
    return new Promise((resolve, reject) => {
        const dogWalked = true; // Set true or false to simulate success/failure
        setTimeout(() => {
            if(dogWalked) {
                resolve("You walk the dog");
            } else {
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        const kitchenCleaned = true; // simulate success/failure
        setTimeout(() => {
            if(kitchenCleaned) {
                resolve("You clean the kitchen");
            } else {
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        const trashTakenOut = true; // simulate success/failure
        setTimeout(() => {
            if(trashTakenOut) {
                resolve("You take out the trash");
            } else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

// Chaining promises
walkDog()
.then((value) => {
    console.log(value);
    return cleanKitchen();
})
.then((value) => {
    console.log(value);
    return takeOutTrash();
})
.then((value) => {
    console.log(value);
    console.log("You finished all the chores");
})
.catch((error) => {
    console.error(error);
});