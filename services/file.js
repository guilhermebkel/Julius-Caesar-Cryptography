const fs = require('fs')
const sha1 = require('sha1')

module.exports = {
    saveDataOnFile,
    checkFileExistance,
    buildFinishedFile,
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

function buildFinishedFile(data, cryptData){
    const file = {
        ...data,
        decifrado: cryptData,
        resumo_criptografico: sha1(cryptData),
    }
    
    return file
}