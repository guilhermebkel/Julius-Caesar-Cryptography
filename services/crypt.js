const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

module.exports = {
    encrypt,
    decrypt
}

async function decrypt(data, casas){
    console.log('Formatting data...')
    data = data.toLowerCase()

    console.log('Decrypting data...')
    const stringLength = data.length
    let newData = []
    let decryptedLetter 
    for(let index = 0; index < stringLength; index++){
        for(let letter in alphabet){
            decryptedLetter = data[index].replace(`${alphabet[letter]}`, `${alphabet[(letter-casas < 0) ? alphabet.length - Math.abs(letter-casas) : letter-casas]}`)
            if(data[index] === alphabet[letter]) break
        }
        newData = [...newData, decryptedLetter]
    }

    const decryptedData = newData.toString().replace(/,/g, '') 
    console.log('[ Data decrypted ]', decryptedData)

    return decryptedData
}

async function encrypt(data, casas){

}