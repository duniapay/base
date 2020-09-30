const { ODIS_MAINNET_CONTEXT } = require('@celo/contractkit').OdisUtils.Query;
const { getPhoneNumberIdentifier } = require('@celo/contractkit').OdisUtils.PhoneNumberIdentifier;
const { getAuthSigner } = require('./authSigner');
const { ErrorMessage } = require('./errorMessage');
const { isE164Number } = require('./utils');

function getPhoneHashDetail(e164Number, account) {
    if (!isE164Number(e164Number)) {
        throw new Error('Invalid phone number: ' + e164Number);
    }

    const authSigner = getAuthSigner(account);
    const serviceContext = ODIS_MAINNET_CONTEXT;

    try {
        return getPhoneNumberIdentifier(e164Number, account.address, authSigner, serviceContext);
    } catch (error) {
        if (error.message === ErrorMessage.ODIS_INSUFFICIENT_BALANCE) {
            throw new Error('ODIS insufficient balance');
        } else if (error.message === ErrorMessage.SALT_QUOTA_EXCEEDED) {
            throw new Error('Salt quota exceeded');
        } else {
            throw new Error('Salt fetch failure');
        }
    }
}

module.exports.getPhoneHashDetail = getPhoneHashDetail;