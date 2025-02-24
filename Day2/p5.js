const http = require('http')
const PORT = 9000
const fs = require('fs')

let users = []

const server = http.createServer((req,res)=>{
  res.writeHead(200,{ 'Content-Type' : 'application/json' });
  if(req.url==='/setdata' && req.method==='POST'){
    let body = ''
    req.on('data', chunk =>{
      body += chunk
    })
    
    req.on('end',()=>{
      let data = JSON.parse(body)
      fs.appendFile('./data.json',JSON.stringify(data),()=>{
        console.log('Data Appended Successfully.');
      })
      
      const user = JSON.parse(body)
      users.push(user);
      res.end('Data Saved.')
    })
  }
  if(req.url==='/getdata' && req.method==='GET'){
    res.end(JSON.stringify(users))
  }
})


server.listen(PORT,()=>{
  console.log('Server is running on - ',PORT)
})