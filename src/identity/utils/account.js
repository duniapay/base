const Web3 = require('web3');
const { newKit, newKitFromWeb3 } = require('@celo/contractkit');

function getContractKit(account) {
    const contractKit = newKit('https://alfajores-forno.celo-testnet.org');

    contractKit.addAccount(account.privateKey);

    return contractKit;
}

function getContractKitFromWeb3() {
    const web3 = new Web3('http://localhost:8545');
    const contractKit = newKitFromWeb3(web3);

    return contractKit;
}

module.exports.getContractKit = getContractKit;
module.exports.getContractKitFromWeb3 = getContractKitFromWeb3;