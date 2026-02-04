function taskOne() {
  console.log("Task one complete");
}

function taskTwo() {
  console.log("Task two complete");
}

function taskThree() {
  console.log("Task three complete");
}

function taskFour() {
  console.log("Task four complete");
}

// Running tasks synchronously
taskOne();
taskTwo();
taskThree();
taskFour();

console.log("All tasks complete");

// This runs in the order: Task one → Task two → Task three → Task four → All tasks complete.


// Asynchronous Tasks with setTimeout (No Ordering Guarantee)

function taskOne() {
  setTimeout(() => {
    console.log("Task one complete");
  }, 2000); // 2 seconds delay
}

function taskTwo() {
  setTimeout(() => {
    console.log("Task two complete");
  }, 1000); // 1 second delay
}

function taskThree() {
  setTimeout(() => {
    console.log("Task three complete");
  }, 3000); // 3 seconds delay
}

function taskFour() {
  setTimeout(() => {
    console.log("Task four complete");
  }, 1500); // 1.5 seconds delay
}

// Running asynchronously - output order unpredictable
taskOne();
taskTwo();
taskThree();
taskFour();

console.log("All tasks complete");

//Output order might be: Task two → Task four → Task one → Task three → All tasks complete (because asynchronous calls finish at different times).

function taskOne(callback) {
  setTimeout(() => {
    console.log("Task one complete");
    callback(); // Call taskTwo after taskOne finishes
  }, 2000);
}

function taskTwo(callback) {
  setTimeout(() => {
    console.log("Task two complete");
    callback(); // Call taskThree after taskTwo finishes
  }, 1000);
}

function taskThree(callback) {
  setTimeout(() => {
    console.log("Task three complete");
    callback(); // Call taskFour after taskThree finishes
  }, 3000);
}

function taskFour(callback) {
  setTimeout(() => {
    console.log("Task four complete");
    callback(); // Final callback to indicate all tasks complete
  }, 1500);
}

// Running tasks in order with nested callbacks
taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour(() => {
        console.log("All tasks complete");
      });
    });
  });
});

//This code ensures tasks run in sequence: taskOne → taskTwo → taskThree → taskFour → then logs “All tasks complete.”



/////////////////////////////////////////////////

function loginStudent(callback) {
  setTimeout(() => callback("Login successful"), 1000);
}

function getExamDetails(callback) {
  setTimeout(() => callback("Exam details fetched"), 1000);
}

function calculateResult(callback) {
  setTimeout(() => callback("Result calculated"), 1000);
}

function sendEmail(callback) {
  setTimeout(() => callback("Email sent"), 1000);
}

loginStudent(function (loginResult) {
  console.log(loginResult);

  getExamDetails(function (examDetails) {
    console.log(examDetails);

    calculateResult(function (result) {
      console.log(result);

      sendEmail(function (emailStatus) {
        console.log(emailStatus);
      });
    });
  });
});
