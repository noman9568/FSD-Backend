const fs = require('fs/promises');

const read = async () =>{
  const data = await fs.readFile("./data.txt","utf8")
  console.log(data)
}

const append = async (data)=>{
  await fs.appendFile('./data.txt',data);
  read()
}
const write = async (data)=>{
  await fs.writeFile('./data.txt',data);
  read()
}

// append(' Hello how are you!')
// read()






