async function boot(){
    console.log('=> Setting up environmental variables...')
    require('dotenv').config()
    
    console.log('=> Checking if file exists')
    const isFileCreated = require('./services/file').checkFileExistance()
    
    if(isFileCreated){
        console.log('Retrieving data from local...')
        const data = JSON.parse(require('fs').readFileSync('answer.json'))

        console.log('=> Decrypting data')
        const decryptedData = require('./services/crypt').decrypt(data.cifrado, data.numero_casas)

        console.log('=> Preparing production file')
        const finishedFile = require('./services/file').buildFinishedFile(data, decryptedData)

        console.log('=> Submiting file')
        require('./services/api').submitResult(finishedFile)
    }
    else{
        console.log('Retrieving data from server...')
        const data = await require('./services/api').getData()

        console.log('Saving data on JSON file...')
        require('./services/file').saveDataOnFile(data)

        console.log('=> Decrypting data')
        const decryptedData = require('./services/crypt').decrypt(data.cifrado, data.numero_casas)

        console.log('=> Preparing production file')
        const finishedFile = require('./services/file').buildFinishedFile(data, decryptedData)

        console.log('=> Submiting file')
        require('./services/api').submitResult(finishedFile)
    }


}

boot()