const http = require('http')
const PORT = 9000

const server = http.createServer((req,res)=>{
  res.writeHead(200,{ 'content-type' : 'text/html' });
  if(req.method==='POST'){
    if(req.url==='/'){
      res.end('<h2>This is entry page.</h2>')
    }
    else{
      res.end('<h1>This is post request , and it is being sent to check whether the data sent is being received on the user side.</h1>')
    }
  }
  if(req.url==='/home'){
    res.end('<h1>Nothing is true.</h1>')
  }
  
  
})


server.listen(PORT,()=>{
  console.log('Server is running on - ',PORT)
})

