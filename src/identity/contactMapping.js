const { getContractKit } = require('./account');
const { getPhoneHashDetail } = require('./phoneHashing');

async function getAddress(phoneHash, account) {
    const contractKit = getContractKit(account);
    const attesationsContract = await contractKit.contracts.getAttestations();

    let mapping = await attesationsContract.lookupIdentifiers([phoneHash]);

    return mapping;
}

module.exports.getAddress = getAddress;