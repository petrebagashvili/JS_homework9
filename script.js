// Task 1
function random(nam) {
    const delay = Math.floor(Math.random() * 2 + 1) * 1000;
    return new Promise((resolve, reject) =>  setTimeout(() =>{ if (Math.random() > 0.5) {
        resolve(`${nam} is resolved`)
    } else {
        reject(`${nam} is rejected`)
    }   
    },delay));  
};

    Promise.all([random("task 0")])
        .then(result => console.log(result))
        .catch(error => console.log(error));


// Task 2
function promise2(name) {
    const delay = (Math.random() * 2 + 1) * 1000
    return new Promise (resolve => setTimeout(() => resolve(`${name} completed`), delay))
}

   Promise.all([promise2("task 1"),promise2("task 2"),promise2("task 3")])
     .then(result => console.log(result))
     .catch(error => console.log(error));

// Task 3

function promise3(id) {
    const delay = (Math.random() * 2 + 1) * 1000
    return new Promise (resolve => setTimeout(() => resolve(`${id} completed`), delay))
}
    
    Promise.race([promise3("task 4"),promise3("task 5"),promise3("task 6")])
     .then(result => console.log(result))
     .catch(error => console.log(error));
    
     
// Task 4

function randomPromise(names) {
    const delay = Math.floor(Math.random() * 3 + 1) * 1000;
    return new Promise((resolve, reject) =>  setTimeout(() =>{ if (Math.random() > 0.5) {
        resolve(`${names} is resolved`)
    } else {
        reject(`${names} is rejected`)
    }   
    },delay));
    
};
  
    Promise.allSettled([randomPromise("task 7"),randomPromise("task 8"),randomPromise("task 9"),randomPromise("task 10"),randomPromise("task 11")])
        .then(result => console.log(result))
        .catch(error => console.log(error));

