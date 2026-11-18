const fs = require('fs')
fs.writeFileSync('note.txt', 'Hello, World!')
const data = fs.readFileSync('note.txt', 'utf-8')
console.log(data)
