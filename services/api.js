const fetch = require('node-fetch')
const fs = require('fs')
const FormData = require('form-data')

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

async function submitResult(){
    try{
        console.log('Generating form data from json file...')
        var formData = new FormData()
        formData.append('answer', fs.createReadStream('answer.json'))

        console.log('Submitting form data to server...')
        await fetch(process.env.API + '/submit-solution?token=' + process.env.TOKEN, {
            method: 'POST',
            body: formData,
        })
        .then(result => result.json())
        .then(data => console.log(data))
    }
    catch(error){
        console.error(error)
    }
}