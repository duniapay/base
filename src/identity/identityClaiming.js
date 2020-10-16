const { IdentityMetadataWrapper } = require('@celo/contractkit');
const { createNameClaim, createDomainClaim, createStorageClaim } = require('@celo/contractkit/lib/identity/claims/claim');
const { getContractKitFromWeb3 } = require('./account');
const { getSigner } = require('./utils');

async function addNameClaim(account, name) {
    const contractkit = getContractKitFromWeb3();

    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
    const claim = createNameClaim(name);
    const signer = getSigner(account, contractkit);

    await metadata.addClaim(claim, signer);

    const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());
    const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);

    return nameClaim;
}

async function addDomainClaim(account, domain) {
    const contractkit = getContractKitFromWeb3();

    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
    const claim = createDomainClaim(domain);
    const signer = getSigner(account, contractkit);

    await metadata.addClaim(claim, signer);

    const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());
    const domainClaim = parsedMetadata.findClaim(ClaimTypes.DOMAIN);

    return domainClaim;
}

async function addStorageClaim(account, storageURL) {
    const contractkit = getContractKitFromWeb3();

    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
    const claim = createDomainClaim(storageURL);
    const signer = getSigner(account, contractkit);

    await metadata.addClaim(claim, signer);

    const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());
    const storageClaim = parsedMetadata.findClaim(ClaimTypes.STORAGE);

    return storageClaim;
}

module.exports.addNameClaim = addNameClaim;
module.exports.addDomainClaim = addDomainClaim;
module.exports.addStorageClaim = addStorageClaim;