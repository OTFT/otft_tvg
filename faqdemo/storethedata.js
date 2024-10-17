import { fs } from 'fs'

function submitData() {

    var fs = require('fs')

    // Data which will be appended to the file.
    let newData = "\n" + document.getElementById("inputQuestion").value;

    // Append data to 'Hello.txt' .
    fs.appendFile('storeduserdata.txt', newData, (err) => {

    // In case of a error throw err.
    if (err) throw err;
    })
}