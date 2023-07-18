import cryptoRandomString from 'crypto-random-string';
import crypto from 'crypto';


// Utilizando cryptoRandomString:

// Tipo base 64:

const criptoBase64 = cryptoRandomString({length: 16, type: 'base64'});

console.log(`cryptoRandomString tipo base64 de 16 carácteres: ${criptoBase64}`);

// Tipo base 64 url:

const criptoBase64URL = cryptoRandomString({length:16, type:'url-safe'})

console.log(`cryptoRandomString tipo Base64URL de 16 carácteres: ${criptoBase64URL}`);

// Tipo hex

const criptoHex = cryptoRandomString({length: 16, type: 'hex'})

console.log(`cryptoRandomString tipo hex de 16 carácteres: ${criptoHex}`);

// Tipo alphanumeric

const criptoAlphanumeric = cryptoRandomString({length: 16, type: "alphanumeric"})

console.log(`cryptoRandomString tipo alphanumeric de 16 carácteres: ${criptoAlphanumeric}`);

// Utilizando el crypto de Node.js FAVOR IGNORAR IMAGEN ADJUNTA EN EL RAR

const encrypt = (tamanno, tipo) => {        
  
    const encrypted = crypto.randomBytes(tamanno).toString(tipo)
  
    return encrypted
};

console.log("\nEncryptado base 64:")
console.log(encrypt(12, "base64"))
console.log("\nEncryptado hex:")
console.log(encrypt(8, "hex"))
console.log("\nEnencryptado utf8:")
console.log(encrypt(16, "utf8"))