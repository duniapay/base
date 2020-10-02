const { getPhoneHashDetail } = require('./phoneHashing');
const { getContractKit } = require('./account');
const { ErrorMessages } = require('./errorMessage');

async function getPhoneAddressMapping(account, phoneNumber) {
    try {
        const contractKit = getContractKit(account);
        const attesationsContract = await contractKit.contracts.getAttestations();
        const phoneHash = (await getPhoneHashDetail(account, phoneNumber)).phoneHash;

        const mapping = await attesationsContract.lookupIdentifiers([phoneHash]);
        
        return mapping;
    } catch(error) {
        if (error.message === ErrorMessages.ADDRESS_LOOKUP_FAILURE) {
            throw new Error('Address lookup failure');
        } else {
            throw error;
        }
    }
}

module.exports.getPhoneAddressMapping = getPhoneAddressMapping;