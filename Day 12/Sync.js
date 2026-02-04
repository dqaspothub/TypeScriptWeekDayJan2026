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



