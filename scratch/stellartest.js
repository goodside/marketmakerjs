var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
server.transactions()
    .forLedger(0)
    .call().then((r) => { console.log(r); });