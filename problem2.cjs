
const fileSystem = require('fs');

//  function to read the file and return the content.
function readFile(path, callback) {
    fileSystem.readFile(path, 'utf-8', (error, data) => {
        if (error) {
            console.log("Cannot able to read the file.");
            callback(error);
        } else {
            callback(null, data);
        }
    });
}

//  function to convert upper case and store in new file and return the file path.
function convertUpperCase(data, callback) {
    const upperData = data.toUpperCase();

    //  create new file for store the new content.
    fileSystem.writeFile('./upperCase_lipsum.txt', upperData, (error) => {
        if (error) {
            console.log("Not able to create Upper Case file")
            return callback(error);
        } else {

            //  Add the new file  path to fileName.txt file.
            addFileName('./upperCase_lipsum.txt', callback);

        }
    });
}

//  function to convert lower case and split by sentence store it in new file and return file path.
function convertLowerCaseAndSplit(upperDataPath, callback) {
    fileSystem.readFile(upperDataPath, 'utf-8', (error, data) => {
        if (error) {
            console.log("Not able to read the Upper Case file")
            return callback(error);
        } else {
            const lowerData = data.toLowerCase()
                .split('.')
                .reduce((sentence, value) => {
                    value = value.trim();
                    return sentence + value + '\n';
                }, "");

            //  create new file for store the new content.
            fileSystem.writeFile('./lowerCase_lipsum.txt', lowerData, (error) => {
                if (error) {
                    console.log("Not able to create lower Case file")
                    return callback(error);
                } else {

                    //  Add the new file  path to fileName.txt file.
                    addFileName('./lowerCase_lipsum.txt', callback);
                }
            });
        }
    });
}

//  function to sort the content in the file and return the new file path.
function sortSentence(lowerCasePath, callback) {
    fileSystem.readFile(lowerCasePath, 'utf-8', (error, sentenceData) => {
        if (error) {
            console.log("Cannot able to read the lower case and split sentence file.");
            return callback(error);
        } else {
            sentenceData = sentenceData.split('\n').sort()
                .reduce((fileSentence, sentence) => {
                    return fileSentence + sentence + '\n';
                }, "");

            //  create new file for store the new content.
            fileSystem.writeFile('./sortedSentence_lipsum.txt', sentenceData, (error) => {
                if (error) {
                    console.log("Not able to create sorted sentence file")
                    return callback(error);
                } else {

                    //  Add the new file  path to fileName.txt file.
                    addFileName('./sortedSentence_lipsum.txt', callback);
                }
            });
        }
    });
}

//  function to delete the  all new files.
function deleteAllNewFilles(path, callback) {
    fileSystem.readFile(path, 'utf-8', (error, data) => {
        if (error) {
            console.log("not able to read the fileName.txt file");
            return callback(error);
        } else {
            deleteData = data.split('\n').filter((path) => {
                return path != "";
            });

            //  loop for delete the file one by one.
            for (let index = 0; index < deleteData.length; index++) {
                fileSystem.unlink(deleteData[index], (error) => {
                    if (error) {
                        console.log(`Not able to delete the file of ${deleteData[index]}.`);
                        return callback(error);
                    }
                })
            }
            return callback(null);
        }
    })
}

//  function to add the new file name to fileName.txt file.
function addFileName(path, callback) {
    fileSystem.writeFile('./fileNames.txt', path + '\n', { flag: 'a' }, (error) => {
        if (error) {
            console.log("not able to add the file name to fileName.txt file.");
            return callback(error);
        } else {
            return callback(null, path);
        }
    });
}

module.exports = {readFile, convertUpperCase, convertLowerCaseAndSplit, sortSentence, deleteAllNewFilles};