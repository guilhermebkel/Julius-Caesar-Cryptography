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

async function submitResult(){

}

async function saveData(){
    
}