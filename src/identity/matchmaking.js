const { ODIS_MAINNET_CONTEXT } = require('@celo/contractkit').OdisUtils.Query;
const { getContactMatches } = require('@celo/contractkit').OdisUtils.Matchmaking;
const { getPhoneHashDetail } = require('./phoneHashing');
const { getAuthSigner } = require('./authSigner');
const { ErrorMessage } = require('./errorMessage');

function getMatchedContacts(e164Number, e164NumberToRecipients, account) {
    const e164NumberContacts = Object.keys(e164NumberToRecipients);
    const phoneHash = getPhoneHashDetail.phoneHash;
    const authSigner = getAuthSigner(account.address);
    const serviceContext = ODIS_MAINNET_CONTEXT;

    try {
        const matches = {};
        const matchedE164Number = getContactMatches(e164Number, e164NumberContacts, account, phoneHash, authSigner, serviceContext);

        for (const e164Number of matchedE164Number) {
            const recipient = e164NumberToRecipients[e164Number];
        
            matches[e164Number] = { contactId: recipient.contactId };
        }

        return matches;
    } catch (error) {
        if (error.message === ErrorMessage.ODIS_QUOTA_ERROR) {
            throw new Error('Matchmaking quota exceeded');
        } else {
            throw error;
        }
    }
}

module.exports.getMatchedContacts = getMatchedContacts;