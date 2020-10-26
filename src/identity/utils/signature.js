const Action = {
    VOTE: 'vote',
    VALIDATOR: 'validator',
    ATTESTATION: 'attestation'
}

async function getSigner(account, contractKit, signer, action) {
    let address;

    if (signer && action) {
        const accounts = await contractkit.contracts.getAccounts();
        const pop = await accounts.generateProofOfKeyPossession(account.address, signer);

        switch (action) {
            case Action.VOTE:
                await (await accounts.authorizeVoteSigner(signer, pop)).send({ from: account.address });
                break;

            case Action.VALIDATOR:
                await (await accounts.authorizeValidatorSigner(signer, pop)).send({ from: account.address });
                break;

            case Action.ATTESTATION:
                await (await accounts.authorizeAttestationSigner(signer, pop)).send({ from: account.address });
                break;
        
            default:
                break;
        }

        address = signer;
    } else {
        address = account.address;
    }

    return {
        sign: async (message) => contractKit.web3.eth.sign(message, address)
    }
}

module.exports.Action = Action;
module.exports.getSigner = getSigner;