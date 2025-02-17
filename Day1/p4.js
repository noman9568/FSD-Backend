const fs = require('fs')



const read = (fileName) =>{
  fs.readFile(fileName,'utf8',(err,data)=>{
    if (err){
      console.log('Error in reading the file.');
    }
    else{
      console.log(data)
    }
  })
}

read('data.txt')

console.log('After console log.')