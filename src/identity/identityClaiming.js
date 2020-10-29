const { IdentityMetadataWrapper } = require('@celo/contractkit');

const OffchainErrors = {
    FetchError: 'FetchError',
    InvalidSignature: 'InvalidSignature',
    NoStorageRootProvidedData: 'NoStorageRootProvidedData',
}

async function addClaim(claim, account, contractkit, signer) {
    const metadata = IdentityMetadataWrapper.fromEmpty(account.address);

    await metadata.addClaim(claim, signer);

    const parsedMetadata = await IdentityMetadataWrapper.fromRawString(contractkit, metadata.toString());

    return parsedMetadata;
}

module.exports.addClaim = addClaim;
