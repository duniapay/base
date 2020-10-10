const IdentityMetadataWrapper = require('@celo/contractkit').IdentityMetadataWrapper;
const { createNameClaim, createDomainClaim, createStorageClaim } = require('@celo/contractkit/lib/identity/claims/claim');
const { getSigner } = require('./account')

function addNameClaim(account, name) {
    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
    const claim = createNameClaim(name);
    const signer = getSigner(account);

    await metadata.addClaim(claim, signer);
}

function addDomainClaim(account, domain) {
    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
    const claim = createDomainClaim(domain);
    const signer = getSigner(account);

    await metadata.addClaim(claim, signer);
}

function addStorageClaim(account, storageURL) {
    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);
    const claim = createStorageClaim(storageURL);
    const signer = getSigner(account);

    await metadata.addClaim(claim, signer);
}

module.exports.addNameClaim = addNameClaim;
module.exports.addDomainClaim = addDomainClaim;
module.exports.addStorageClaim = addStorageClaim;