const IdentityMetadataWrapper = require('@celo/contractkit').IdentityMetadataWrapper;
const { createNameClaim, createDomainClaim, createStorageClaim } = require('@celo/contractkit/lib/identity/claims/claim');
const { getSigner, getContractKit } = require('./account')

async function addNameClaim(account, name) {
    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
    const claim = createNameClaim(name);
    const contractkit = getContractKit(account);
    const signer = getSigner(account);

    await metadata.addClaim(claim, signer);

    const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString()); // kit
    const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);

    return nameClaim;
}

async function addDomainClaim(account, domain) {
    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
    const claim = createDomainClaim(domain);
    const signer = getSigner(account);

    await metadata.addClaim(claim, signer);

    return metadata;
}

async function addStorageClaim(account, storageURL) {
    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
    const claim = createStorageClaim(storageURL);
    const signer = getSigner(account);

    await metadata.addClaim(claim, signer);

    return metadata;
}

module.exports.addNameClaim = addNameClaim;
module.exports.addDomainClaim = addDomainClaim;
module.exports.addStorageClaim = addStorageClaim;