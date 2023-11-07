const crypto = require('crypto')

console.log('Sha512:Base64 => ', crypto.createHash('sha512').update('password').digest('base64'))
console.log('Sha512:hex => ', crypto.createHash('sha512').update('password').digest('hex'))
console.log('Sha512:Base64 => ', crypto.createHash('sha512').update('비밀번호').digest('base64'))

