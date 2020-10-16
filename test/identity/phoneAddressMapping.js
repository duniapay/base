const expect = require('chai').expect;
const { mockAccountDetails, mockMappings } = require('../../src/models/index');
const { getPhoneAddressMapping } = require('../../src/identity/phoneAddressMapping');
const { ErrorMessages } = require('../../src/identity/errorMessage');

const accountDetails = {
    VALID: mockAccountDetails[1],

    INVALID: {
        ODIS_QUOTA_ERROR: mockAccountDetails[3],
        ADDRESS_LOOKUP_FAILURE: mockAccountDetails[1]
    }
}

describe('Get phone address mapping', () => {
    it('gets the phone address mapping correctly', async () => {
        const mapping = await getPhoneAddressMapping(accountDetails.VALID.account, accountDetails.VALID.phoneNumber);

        expect(mapping).to.equal(mockMappings[1]);
    });

    it('throws an error about "ODIS insufficient balance"', async () => {
        try {
            const mapping = await getPhoneAddressMapping(accountDetails.INVALID.ODIS_QUOTA_ERROR.account, accountDetails.INVALID.ODIS_QUOTA_ERROR.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessages.ODIS_QUOTA_ERROR);
        }
    });

    it('throws an error about "Address lookup failure"', async () => {
        try {
            const mapping = await getPhoneAddressMapping(accountDetails.INVALID.ADDRESS_LOOKUP_FAILURE.account, accountDetails.INVALID.ADDRESS_LOOKUP_FAILURE.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessages.ADDRESS_LOOKUP_FAILURE);
        }
    });
});