const express = require('express');
const app = express()

app.use(express.json())

app.post('/api/adduser',(req,res) =>{
  const { id , name } = req.body;
  console.log(id,name)
  res.status(201).json( { message : "Data received." } );
})

app.listen(9000,()=>{
  console.log("Server is running on - 9000");
})


