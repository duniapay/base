const { IdentityMetadataWrapper } = require('@celo/contractkit');
const { createNameClaim, createDomainClaim, createStorageClaim } = require('@celo/contractkit/lib/identity/claims/claim');
const { getContractKitFromWeb3 } = require('./utils/account');
const { getSigner } = require('./utils/signature');

const Action = {
    VOTE: 'vote',
    VALIDATOR: 'validator',
    ATTESTATION: 'attestation'
}

// async function addNameClaim(account, name) {
//     const contractkit = getContractKitFromWeb3(); //

//     const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
//     const claim = createNameClaim(name);
//     const signer = getSigner(account, contractkit);

//     await metadata.addClaim(claim, signer);

//     const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());
//     const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);

//     return nameClaim;
// }

// async function addDomainClaim(account, domain) {
//     const contractkit = getContractKitFromWeb3();

//     const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
//     const claim = createDomainClaim(domain);
//     const signer = getSigner(account, contractkit);

//     await metadata.addClaim(claim, signer);

//     const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());
//     const domainClaim = parsedMetadata.findClaim(ClaimTypes.DOMAIN);

//     return domainClaim;
// }

// async function addStorageClaim(account, storageURL) {
//     const contractkit = getContractKitFromWeb3();

//     const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
//     const claim = createDomainClaim(storageURL);
//     const signer = getSigner(account, contractkit);

//     await metadata.addClaim(claim, signer);

//     const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());
//     const storageClaim = parsedMetadata.findClaim(ClaimTypes.STORAGE);

//     return storageClaim;
// }

async function addNameClaim(account, name, signer = account.address, action) {
    const contractkit = getContractKitFromWeb3();
    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);

    if (action) {
        const accounts = await contractkit.contracts.getAccounts();
        const pop = await accounts.generateProofOfKeyPossession(address, signer);

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
    }

    await metadata.addClaim(createNameClaim(name), getSigner(signer, contractkit));

    const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());
    const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);

    return nameClaim;
}

module.exports.addNameClaim = addNameClaim;
module.exports.addDomainClaim = addDomainClaim;
module.exports.addStorageClaim = addStorageClaim;