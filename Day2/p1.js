const http = require('http');
const PORT = 3000;

// const {sum,diff} = require('./MyMath');

const server = http.createServer((req,res)=>{
  
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('Nothing left to write in this page.');
})


// console.log(sum(4,5),diff(4,5))


server.listen(PORT,()=>{
  console.log('Server is running on port - ' + PORT);
})

