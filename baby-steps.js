// console.log(process.argv)

var arrayOne = process.argv
var sum = 0;

for (var i=2; i<arrayOne.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);