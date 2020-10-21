const { IdentityMetadataWrapper } = require('@celo/contractkit');
const { createNameClaim, createDomainClaim, createStorageClaim } = require('@celo/contractkit/lib/identity/claims/claim');
const { getContractKitFromWeb3 } = require('./account');
const { getSigner } = require('./utils');

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

async function addNameClaim(contractkit, metadata, claim, signer) {
    await metadata.addClaim(claim, signer);

    const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());
    const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);

    return nameClaim;
}

function getAccountSigner(account, contractkit) {
    return getSigner(account, contractkit);
}

function getAccountAuthorizedSigner(account, contractkit, action) {
    const accounts = await contractkit.contracts.getAccounts();

    await accounts.createAccount().send({ from: account.address })

    const pop = await accounts.generateProofOfKeyPossession(account.address, signer)

    switch (action) {
        case 'vote':
            await (await accounts.authorizeVoteSigner(signer, pop)).send({ from: address })
            return getSigner(signer, contractkit);
        case 'validator':
            break;
        case 'attestation':
            break;
        default:
            break;
    }
}

async function verifyNameClaim(contractkit, name, signer) {
    const signature = '';

    await IdentityMetadataWrapper.verifySigner(contractkit, name, signature, signer);
}

module.exports.addNameClaim = addNameClaim;
module.exports.addDomainClaim = addDomainClaim;
module.exports.addStorageClaim = addStorageClaim;