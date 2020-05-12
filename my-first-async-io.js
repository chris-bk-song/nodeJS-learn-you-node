const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, function (err, data) {
  if (err) {
    console.log('Error: ', err);
    return;
  }
  const fileContents = data.toString();
  
  const linesArray = fileContents.split('\n');
  
  console.log(linesArray.length - 1);
});