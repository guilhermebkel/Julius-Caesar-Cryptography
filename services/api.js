const fetch = require('node-fetch')

module.exports = {
    getData,
    submitResult,
}

async function getData(){
    try{
        const data = await fetch(process.env.API + '/generate-data?token=' + process.env.TOKEN, {
            method: 'GET'
        })
        .then(result => result.json())
        .then(data => data)
        return JSON.stringify(data, null, 2)
    }
    catch(error){
        console.error(error)
    }
}

async function submitResult(file){
    try{
        const result = await fetch(process.env.API + '/submit-solution?token=' + process.env.TOKEN, {
            method: 'POST',
            body: file,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(result => result.json())
        .then(data => console.log(data))
    }
    catch(error){
        console.error(error)
    }
}