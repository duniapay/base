const newKit = require('@celo/contractkit').newKit;

function getContractKit(account) {
    const contractKit = newKit('https://alfajores-forno.celo-testnet.org');

    contractKit.addAccount(account.privateKey);

    return contractKit;
}

module.exports.getContractKit = getContractKit;