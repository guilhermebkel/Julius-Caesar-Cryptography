async function boot(){
    console.log('=> Setting up environmental variables...')
    require('dotenv').config()
    
    console.log('=> Checking if file exists')
    const isFileCreated = require('./services/file').checkFileExistance()
    
    if(!isFileCreated){
        console.log('Retrieving data from server...')
        const data = await require('./services/api').getData()

        console.log('Saving data on JSON file...')
        require('./services/file').saveDataOnFile(data)
    }
}

boot()