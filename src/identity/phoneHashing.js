const { getPhoneNumberIdentifier } = require('@celo/contractkit').OdisUtils.PhoneNumberIdentifier;
const { ODIS_MAINNET_CONTEXT } = require('@celo/contractkit').OdisUtils.Query;
const { getAuthSigner } = require('./utils/authentication');
const { ErrorMessage } = require('./errorMessage');
const { isE164Number } = require('./utils/phoneNumber');

async function getPhoneHashDetail(account, phoneNumber) {
    if (!isE164Number(phoneNumber)) {
        throw new Error('Invalid phone number: ' + phoneNumber);
    }

    try {
        const authSigner = getAuthSigner(account);

        const phoneHashDetail = await getPhoneNumberIdentifier(phoneNumber, account.address, authSigner, ODIS_MAINNET_CONTEXT);

        return phoneHashDetail;
    } catch(error) {
        if (error.message === ErrorMessage.ODIS_INSUFFICIENT_BALANCE) {
            throw new Error('ODIS insufficient balance');
        } else if (error.message === ErrorMessage.SALT_QUOTA_EXCEEDED) {
            throw new Error('Salt quota exceeded');
        } else if (error.message === ErrorMessage.SALT_FETCH_FAILURE) {
            throw new Error('Salt fetch failure');
        } else {
            throw error;
        }
    }
}

module.exports.getPhoneHashDetail = getPhoneHashDetail;