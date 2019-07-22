const assert = require('assert')
const encrypt = require('./crypt')

async function test(){
    describe('Julius Caesar Cryptography Test Suit', function(){
        it('[ 3 casas ] a ligeira raposa marrom saltou sobre o cachorro cansado', function(){
            const rawData = 'a ligeira raposa marrom saltou sobre o cachorro cansado'
            const expected = 'd oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr'
            const casas = 3
            
            const result = encrypt(rawData, casas)
            assert.deepEqual(result, expected)
        })
    })
}
