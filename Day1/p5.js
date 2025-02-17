const fs = require('fs');


const write = (fileName,data) =>{
  fs.writeFile(fileName,data,(err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('Data written successfully.');
    }
  })
}

const append = (fileName,data) =>{
  fs.appendFile(fileName,data,(err)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log('Data appended successfully.');
    }
  })
}

const data = 'Nothing is necessary in this world.';

write('./data.txt',data)
append('./data.txt','Nothing to write.');
console.log('After the write function.');
