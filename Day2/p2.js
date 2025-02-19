const http = require('http');
const PORT = 9000;
const fs = require('fs/promises')

const server = http.createServer(async (req,res)=>{
  
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  const data = await fs.readFile('index.html','utf8')


  res.end(data);
})




server.listen(PORT,()=>{
  console.log('Server is running on port - ' + PORT);
})

