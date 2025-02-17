const fs = require('fs')

data = 'What do you think you are doing. ';

fs.writeFileSync('data.txt',data)
fs.appendFileSync('data.txt',`I don't care what happens with you.`);