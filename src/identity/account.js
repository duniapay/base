const fs = require('fs');
const { get } = require('https');
const path = require('path');
const Web3 = require('web3');
const newKit = require('@celo/contractkit').newKit;

function getAccount() {
    let web3 = new Web3();
    const filePath = path.join(__dirname, './.secret');

    let account;

    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
            account = web3.eth.accounts.privateKeyToAccount(data);
        });
    } else {
        account  = web3.eth.accounts.create();

        fs.writeFile(filePath, account.privateKey, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    }

    return account;
}

function getContractKit(account) {
    const contractKit = newKit('https://alfajores-forno.celo-testnet.org');

    contractKit.addAccount(account.privateKey);

    return contractKit;
}

function isAccountUpToDate(dataEncryptionKey) {
    // TODO
}

module.exports.getAccount = getAccount;
module.exports.getContractKit = getContractKit;
module.exports.isAccountUpToDate = isAccountUpToDate;