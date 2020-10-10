const Web3 = require('web3');
const { newKit, newKitFromWeb3 } = require('@celo/contractkit');

function getContractKit(account) {
    const contractKit = newKit('https://alfajores-forno.celo-testnet.org');

    contractKit.addAccount(account.privateKey);

    return contractKit;
}

function getSigner(account) {
    const web3 = new Web3('http://localhost:8545');
    const contractKit = newKitFromWeb3(web3);

    return {
        sign: async (message) => contractKit.web3.eth.sign(message, account.address)
    }
}

module.exports.getContractKit = getContractKit;
module.exports.getSigner = getSigner;