/*
 Problem 2:    
Using callbacks and the fs module's asynchronous functions, do the following:
    1. Read the given file lipsum.txt
    2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
    3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
    4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
    5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously. 
*/
const {readFile, convertUpperCase, convertLowerCaseAndSplit, sortSentence, deleteAllNewFilles} = require('../problem2.cjs');

//   calling all function by callback function.
readFile('./lipsum_1.txt', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log("successfully readed lipsum_1.txt file");

        //  calling function to convert the content to upper case.
        convertUpperCase(data, (error, upperDataPath) => {
            if (error) {
                console.log(error);
            } else {
                console.log("successfully converted all to upper case.");

                //  calling this function for convert lower case and split by sentence.
                convertLowerCaseAndSplit(upperDataPath, (error, lowerCasePath) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("successfully converted all to lower case and split by sentence.");

                        //  calling this function for sorting the content.
                        sortSentence(lowerCasePath, (error) => {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log("successfully sorted the splited file..");

                                // calling this function for deleting all files.
                                deleteAllNewFilles('./fileNames.txt', (error) => {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        console.log("All new files are deleted.");
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
