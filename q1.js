const fs = require('fs');
const folderName = '../temp';

fs.mkdir(folderName, function (err) {

    if (err) {
        console.log("Folder already exists...");
    }
    else {
        console.log("folder created...");
    }
});

fs.rmdir(folderName, function (err) {

    if (err) {
        console.log("folder does not exists...");
    }
    else {
        console.log("folder Deleted...");
    }
});

fs.writeFile("demo.txt", "Welcome message", function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully Data written in file...");
    }
});

fs.readFile("demo.txt", "utf8", function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

fs.appendFile("demo.txt", "append message", function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully Data append in file...");
    }
});

fs.writeFile("demo.txt", "File change data", function (err) {
    if (err) {

        console.log(err);
    }
    else {
        console.log("Replace file with new data...");
    }
});

fs.rename('demo.txt', 'newfile.txt', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Successfully file rename....');
});

fs.unlink('newfile.txt', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('File deleted!');
});
