/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const {createFiles, deleteFiles} = require('../problem1.cjs');

// number of files to create.
let numberOfFiles = 10;

// data to store in JSON files
const data = {
    name: "Sivakumar N",
    age: 22,
    city: "Bengaluru"
};

//  Create and Delete that files simultaneously.
createFiles(numberOfFiles, data, (error) => {
    if (error) {
        console.log(error);
    } else {
        deleteFiles(numberOfFiles, (error) => {
            console.log(error);
        })
    }
});
