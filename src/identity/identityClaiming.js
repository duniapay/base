const { IdentityMetadataWrapper } = require('@celo/contractkit');const { default: OffchainDataWrapper } = require('@celo/contractkit/lib/identity/offchain-data-wrapper');
const { NameAccessor, AuthorizedSignerAccessor } = require('@celo/contractkit/lib/identity/offchain/schemas');

async function addClaim(claim, account, contractkit, signer) {
    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);

    await metadata.addClaim(claim, signer);

    const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());

    return parsedMetadata;
}

async function addNameClaim(name, account, contractkit) {
    const metatdata = new OffchainDataWrapper(account.address, contractkit);
    const nameAccessor = new NameAccessor(metatdata);
    await nameAccessor.write({ name: name });

    const resp = await nameAccessor.readAsResult(account.address);

    return resp;
}

module.exports.addClaim = addClaim;
module.exports.addNameClaim = addNameClaim;
