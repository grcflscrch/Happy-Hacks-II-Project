document.getElementById("assign").value;
document.getElementById("descript").value;

const fs = require('fs')

fs.readFile('./loginfo.json', 'utf8', (err, data) => {
    if (err){
        console.log('Database error - Assignments Unknown')
    } else {
        const loginfo = JSON.parse(data)

    data.assignments.push ({
        assign: descript
    })

    fs.writeFile('./loginfo.json', JSON.stringify(loginfo, null, 8), err => {
        if (err) {
            console.log('Error adding assignment')
        }
    })
    }
})
