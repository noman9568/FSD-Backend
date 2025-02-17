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
const data1 = ' Nothing to write.';

// write('./data.txt',data)
// append('./data.txt',data1);


console.log('After the write function.');


// for deletion of file , the function used is unlink
// fs.unlink(fileName)

// creating directory -
// fs.mkdir('myDir',(err)=>{})
// fs.writeFile("./mydir/data.txt",'nothing',(err)=>{})
// fs.unlink("./mydir/data.txt",(err)=>{})

// Directory Deletion
// fs.rmdir('mydir',(err)=>{})