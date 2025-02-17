const fs = require('fs')

const data = fs.readFileSync('./data.txt','utf-8')
const data2 = fs.readFileSync('./p1.js','utf-8')
console.log(data);
console.log(data2);