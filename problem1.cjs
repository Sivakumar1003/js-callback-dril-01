const fileSystem = require('fs');

//  function to create folder and files.
function createFiles(fileCount, data, callback) {
    fileSystem.mkdir('./DemoFolder', { recursive: true }, (error) => {
        if (error) {

            //  returning error to the callback while problem in creating folder.
            console.log('Not able to crate new Folder');
            callback(error);
        } else {

            //  confirming folder created.
            console.log("Folder Created.")
            for (let index = 1; index <= fileCount; index++) {
                fileSystem.writeFile(`./DemoFolder/file_${index}.json`, JSON.stringify(data), (error) => {
                    if (error) {
                        console.log("Not able to create files.")
                        callback(error);
                    }
                })
            }

            //  confirming all files are created and returning null.
            console.log("All files are created.");
            return callback(null);
        }
    })
}

//  function to delete all files.
function deleteFiles(fileCount, callback) {
    for (let index = 1; index <= fileCount; index++) {
        fileSystem.unlink(`./DemoFolder/file_${index}.json`, (error) => {
            if (error) {
                console.log("not able to delete the files.");
                return callback(error);
            }
        })
    }
    // confirming all files are deleted.
    console.log("all files are deleted.")
}

module.exports = {createFiles, deleteFiles};