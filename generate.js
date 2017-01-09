var keypair = require('keypair');
var fs = require('fs');

var pair = keypair();
var publicKeyFile = process.cwd().concat('/public.pem');
var privateKeyFile = process.cwd().concat('/private.pem');


fs.writeFile(publicKeyFile, pair.public, function (err) {
    if (err)
        console.log("Error writting the file".concat(err.message));

    console.log("Public Key generated at ".concat(publicKeyFile))

});

fs.writeFile(privateKeyFile, pair.private, function (err) {
    if (err)
        console.log("Error writting the file".concat(err.message));

    console.log("Private Key generated at ".concat(privateKeyFile))

});