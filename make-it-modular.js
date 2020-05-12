const filterFileName = require('./mymodule');

filterFileName(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    console.log('Error: ', err);
    return;
  }

  data.forEach((fileName) => {
    console.log(fileName);
  });
});