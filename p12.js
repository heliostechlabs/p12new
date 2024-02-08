const fs = require('fs');
const crypto = require('crypto');

// Path to your P12 file
const p12FilePath = 'Dab-csrs/dab-axis.p12';

// Password for the P12 file
const p12Password = '1234';

// Read the P12 file
const p12File = fs.readFileSync(p12FilePath);

// Parse the P12 file to get private key and certificate
const { privateKey, cert } = crypto.createPrivateKey(p12File, p12Password);

// Now you can use privateKey and cert as needed
console.log(privateKey);
console.log(cert);
