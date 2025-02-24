const http = require('http')
const PORT = 9000


const server = http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html');
  
})


server.listen(PORT)

