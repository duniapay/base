const expect = require('chai').expect;
const { getMatchedContacts } = require('../../src/identity/matchMaking');
const { ErrorMessages } = require('../../src/identity/errorMessage');

const mockAccountDetails = {
    VALID: {
        1: {
            account: {
                privateKey: '',
                address: ''
            },
            phoneNumber: '',
            contacts: {
                1: {
                    phoneNumber: '',
                    countryCode: ''
                }
            },
            attestationStat: {
                completed: 3,
                total: 3,
            }
        }
    },

    INVALID: {
        ODIS_QUOTA_ERROR: {
            account: {
                privateKey: '',
                address: ''
            },
            phoneNumber: '',
            contacts: {
                1: {
                    phoneNumber: '',
                    countryCode: ''
                }
            },
            attestationStat: {
                completed: 0,
                total: 0,
            }
        }
    }
}

const mockMatchedContacts = {
    1: [
        ''
    ]
}

describe('Get phone address mapping', () => {
    it('gets the phone address mapping correctly', async () => {
        const matchedContacts = await getMatchedContacts(mockAccountDetails.VALID[1].account, mockAccountDetails.VALID[1].phoneNumber);

        expect(matchedContacts).to.equal(mockMatchedContacts[1]);
    });

    it('throws an error about "Matchmaking quota exceeded"', async () => {
        try {
            const matchedContacts = await getMatchedContacts(mockAccountDetails.INVALID.ODIS_QUOTA_ERROR.account, mockAccountDetails.INVALID.ODIS_QUOTA_ERROR.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessages.ODIS_QUOTA_ERROR);
        }
    });
});

