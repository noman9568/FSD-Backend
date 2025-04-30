const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT;

dotenv.config();
app.get('/',(req,res)=>{
  res.send("Hello how are you?");
})


app.listen(PORT,()=>{
  console.log("App running on port - ",PORT);
})