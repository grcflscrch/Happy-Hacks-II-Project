const fs = require('fs')

fs.readFile('./assign.json', 'utf8', (err, data) => {
    if (err){
        console.log('Database error - Assignment')
    } else {
        const assign = JSON.parse(data)
    }
})
