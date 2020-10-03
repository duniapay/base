const getContactMatches = require('@celo/contractkit').OdisUtils.Matchmaking.getContactMatches;
const ODIS_MAINNET_CONTEXT = require('@celo/contractkit').OdisUtils.Query.ODIS_MAINNET_CONTEXT;
const { getAuthSigner } = require('./authentication');
const { getPhoneHashDetail } = require('./phoneHashing');
const { ErrorMessages } = require('./errorMessage');
const { parsePhoneNumbers } = require("./utils");

async function getMatchedContacts(account, phoneNumber, contacts) {
    try {
        const parsedContacts = parsePhoneNumbers(contacts);
        const phoneHash = (await getPhoneHashDetail(account, phoneNumber)).phoneHash;
        const authSigner = getAuthSigner(account);
    
        const matchedContacts = await getContactMatches(phoneNumber, parsedContacts, account.address, phoneHash, authSigner, ODIS_MAINNET_CONTEXT);
    
        return matchedContacts;
    } catch(error) {
        if (error.message === ErrorMessages.ODIS_QUOTA_ERROR) {
            throw new Error('Matchmaking quota exceeded');
        } else {
            throw error;
        }
    }
}

module.exports.getMatchedContacts = getMatchedContacts;