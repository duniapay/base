const getPhoneNumberIdentifier = require('@celo/contractkit').OdisUtils.PhoneNumberIdentifier.getPhoneNumberIdentifier;
const ODIS_MAINNET_CONTEXT = require('@celo/contractkit').OdisUtils.Query.ODIS_MAINNET_CONTEXT;
const { getAuthSigner } = require('./authentication');
const { ErrorMessages } = require('./errorMessage');
const { isE164Number } = require('./utils');

async function getPhoneHashDetail(account, phoneNumber) {
    if (!isE164Number(phoneNumber)) {
        throw new Error('Invalid phone number: ' + phoneNumber);
    }

    try {
        const authSigner = getAuthSigner(account);

        const phoneHashDetail = await getPhoneNumberIdentifier(phoneNumber, account.address, authSigner, ODIS_MAINNET_CONTEXT);

        return phoneHashDetail;
    } catch(error) {
        if (error.message === ErrorMessages.ODIS_INSUFFICIENT_BALANCE) {
            throw new Error('ODIS insufficient balance');
        } else if (error.message === ErrorMessages.SALT_QUOTA_EXCEEDED) {
            throw new Error('Salt quota exceeded');
        } else if (error.message === SALT_FETCH_FAILURE) {
            throw new Error('Salt fetch failure');
        } else {
            throw error;
        }
    }
}

const account = {
    privateKey: '3a26ebc37944c305670a21ea6a5d16c1084db2f18bc6635ba95f487e5c59868f',
    address: '0xf235209c92d21c59b25c6f5c41cfa16e39bf67d2'
}

module.exports.getPhoneHashDetail = getPhoneHashDetail;