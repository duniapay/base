const expect = require('chai').expect;
const { mockAccountDetails, mockMatchedContacts } = require('../../src/models/index');
const { getMatchedContacts } = require('../../src/identity/matchMaking');
const { ErrorMessages } = require('../../src/identity/errorMessage');

const accountDetails = {
    VALID: mockAccountDetails[1],

    INVALID: {
        ODIS_QUOTA_ERROR: mockAccountDetails[3]
    }
}


describe('Get matched contacts', () => {
    it('gets the matched contacts correctly', async () => {
        const matchedContacts = await getMatchedContacts(accountDetails.VALID[1].account, accountDetails.VALID[1].phoneNumber, Object.values(accountDetails.VALID[1].contacts));

        expect(matchedContacts).to.equal(mockMatchedContacts[1]);
    });

    it('throws an error about "Matchmaking quota exceeded"', async () => {
        try {
            const matchedContacts = await getMatchedContacts(accountDetails.INVALID.ODIS_QUOTA_ERROR.account, accountDetails.INVALID.ODIS_QUOTA_ERROR.phoneNumber, Object.values(accountDetails.INVALID.ODIS_QUOTA_ERROR.contacts));
        } catch (error) {
            expect(error.message).to.equal(ErrorMessages.ODIS_QUOTA_ERROR);
        }
    });
});