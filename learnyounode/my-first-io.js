const fs = require('fs');

let text = fs.readFileSync(process.argv[2]);
let nL = text.toString().split('\n').length-1;

console.log(nL);