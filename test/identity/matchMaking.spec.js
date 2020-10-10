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
                privateKey: '0x99cd9f07f8891e1d0cdfd974b7282cfe7cbea20416bac67692d3173bc5335ba5',
                address: '0xEb50b9B53394D5f3C81c2EbDa0618Aa3761C967C'
            },
            phoneNumber: '+14155550000',
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
        const matchedContacts = await getMatchedContacts(mockAccountDetails.VALID[1].account, mockAccountDetails.VALID[1].phoneNumber, Object.values(mockAccountDetails.VALID[1].contacts));

        expect(matchedContacts).to.equal(mockMatchedContacts[1]);
    });

    it('throws an error about "Matchmaking quota exceeded"', async () => {
        try {
            const matchedContacts = await getMatchedContacts(mockAccountDetails.INVALID.ODIS_QUOTA_ERROR.account, mockAccountDetails.INVALID.ODIS_QUOTA_ERROR.phoneNumber, Object.values(mockAccountDetails.INVALID.ODIS_QUOTA_ERROR.contacts));
        } catch (error) {
            expect(error.message).to.equal(ErrorMessages.ODIS_QUOTA_ERROR);
        }
    });
});

