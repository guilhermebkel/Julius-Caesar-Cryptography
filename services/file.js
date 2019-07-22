const fs = require('fs')

module.exports = {
    saveDataOnFile,
    checkFileExistance,
}

function saveDataOnFile(data){
    fs.writeFileSync('answer.json', data, (error) => {
        if(error){
            console.error(error)
        }
        else{
            console.log("=> Data saved on json file with sucess!")
        }
    })
}

function checkFileExistance(){
    return fs.existsSync('answer.json')
}