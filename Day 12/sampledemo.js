let mypromise = new Promise(function(resolve,reject){

    let success = false;

    if(success){

        resolve("Task is successfully completed");
    } else{
        reject("Task is failed");
    }
});

console.log(mypromise);

mypromise.then(function(results){
    console.log("Output " + results); // success result
})
    .catch(function(errors){
        console.log("The failure "+ errors); // failure result
        
});


function checktaskresult(success){
    return new Promise(function(resolve,reject){

    if(success){
        resolve("Task is successfully completed");
    } else{
        reject("Task is failed");
    }
});
}
checktaskresult(false)
        .then(result => console.log(result))
        .catch(errors => console.log(errors));




let mypromises = new Promise(function(resolve,reject){

console.log("The tast started...");

setTimeout(function(){
    resolve("Task completed");
},2000);
});

console.log(mypromises);

mypromises.then(function(results){
    console.log("Output " + results); // success result
})