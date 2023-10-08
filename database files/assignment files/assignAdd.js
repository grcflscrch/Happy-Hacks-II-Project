const fs = require('fs')

fs.readFile('./loginfo.json', 'utf8', (err, data) => {
    if (err){
        console.log('Database error - Assignments Unknown')
    } else {
        const assign = JSON.parse(data)

    data.assignments.push ({
        x: y
        //add x assignment and y description
    })

    fs.writeFile('./loginfo.json', JSON.stringify(loginfo, null, 4), err => {
        if (err) {
            console.log('Error adding assignment')
        }
    })
    }
})
