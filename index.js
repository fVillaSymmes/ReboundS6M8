import cryptoRandomString from 'crypto-random-string';

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

// El archivo RAR incluye una fotografía de la terminal generando los mismos tokens a través de crypto de Node

// Para generar una string alfanumérica con el crypto de Node, se utiliza este codigo: require('crypto').randomBytes(64).toString('base64').replace(/[^a-z0-9]/gi,''))