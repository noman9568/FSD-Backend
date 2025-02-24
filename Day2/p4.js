const http = require('http')
const PORT = 9000

const server = http.createServer((req,res)=>{
  res.writeHead(200,{ 'Content-Type' : 'application/json' });
  let data = {
    Name:'Nothing',
    Age : 23
  }
  if(req.url==='/getdata' && req.method==='GET'){
    res.end(JSON.stringify(data));
  }
  else if(req.url==='/setdata' && req.method==='POST'){
    let message = 'Data Received.'
    res.end(JSON.stringify(message));
  }
})


server.listen(PORT,()=>{
  console.log('Server is running on - ',PORT)
})