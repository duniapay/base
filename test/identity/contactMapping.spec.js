const expect = require('chai').expect;
const { getPhoneAddressMapping } = require('../../src/identity/phoneAddressMapping');
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
        ADDRESS_LOOKUP_FAILURE: {
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

const mockMappings = {
    1: {
        '0xd5b4028307ee557404bc6819790326dc0194cfc62c0ae5adcd79adb25da0bae8': {
            '0xDcD7335735F2c4bC7228E3d59D3D05e69Bb73809': { completed: 3, total: 4 },
            '0xE609135E96aA3424c05e940A6D2693d674bc9fDD': { completed: 3, total: 3 }
        }
    }
}

describe('Get phone address mapping', () => {
    it('gets the phone address mapping correctly', async () => {
        const mapping = await getPhoneAddressMapping(mockAccountDetails.VALID[1].account, mockAccountDetails.VALID[1].phoneNumber);

        expect(mapping).to.equal(mockMappings[1]);
    });

    it('throws an error about "Address lookup failure"', async () => {
        try {
            const mapping = await getPhoneAddressMapping(mockAccountDetails.INVALID.ADDRESS_LOOKUP_FAILURE.account, mockAccountDetails.INVALID.ADDRESS_LOOKUP_FAILURE.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessages.ADDRESS_LOOKUP_FAILURE);
        }
    });
});