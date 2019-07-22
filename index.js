const { decrypt } = require('./services/crypt')
const { buildFinishedFile, checkFileExistance, saveDataOnFile, readFile } = require('./services/file')
const { getData, submitResult } = require('./services/api')

async function boot(){
    console.log('=> Setting up environmental variables...')
    require('dotenv').config()
    
    console.log('=> Checking if file exists')
    const isFileCreated = checkFileExistance('answer.json')
    
    if(isFileCreated){
        console.log('Retrieving data from local...')
        const data = JSON.parse(readFile('answer.json'))

        console.log('=> Decrypting data')
        const decryptedData = decrypt(data.cifrado, data.numero_casas)

        if(process.env.NODE_ENV === 'production'){
            console.log('=> Preparing production file')
            buildFinishedFile(data, decryptedData)
    
            console.log('=> Submiting file')
            submitResult()
        }
    }
    else{
        console.log('Retrieving data from server...')
        const data = await getData()

        console.log('Saving data on JSON file...')
        saveDataOnFile(data)

        console.log('=> Decrypting data')
        const decryptedData = decrypt(data.cifrado, data.numero_casas)
        
        if(process.env.NODE_ENV === 'production'){
            console.log('=> Preparing production file')
            buildFinishedFile(data, decryptedData)
    
            console.log('=> Submiting file')
            submitResult()
        }
    }


}

boot()