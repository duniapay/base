const expect = require('chai').expect;
const { mockAccountDetails, mockPhoneHashDetails } = require('../../src/models/index');
const { getPhoneHashDetail } = require('./../../src/identity/phoneHashing');
const { ErrorMessage } = require('./../../src/identity/errorMessage');

const accountDetails = {
    VALID: mockAccountDetails[1],

    INVALID: {
        ODIS_QUOTA_ERROR: mockAccountDetails[3],
        SALT_QUOTA_EXCEEDED: mockAccountDetails[1],
        SALT_FETCH_FAILURE: mockAccountDetails[1]
    }
}

describe('Get phone hash detail', () => {
    it('gets the phone hash detail correctly', async () => {
        const phoneHashDetail = await getPhoneHashDetail(accountDetails.VALID[1].account, accountDetails.VALID[1].phoneNumber);

        expect(phoneHashDetail).to.equal(mockPhoneHashDetails[1]);
    });

    it('throws an error about "ODIS insufficient balance"', async () => {
        try {
            const phoneHashDetail = await getPhoneHashDetail(accountDetails.INVALID.ODIS_QUOTA_ERROR.account, accountDetails.INVALID.ODIS_QUOTA_ERROR.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessage.ODIS_QUOTA_ERROR);
        }
    });

    it('throws an error about "Salt quota exceeded"', async () => {
        try {
            const phoneHashDetail = await getPhoneHashDetail(accountDetails.INVALID.SALT_QUOTA_EXCEEDED.account, accountDetails.INVALID.SALT_QUOTA_EXCEEDED.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessage.SALT_QUOTA_EXCEEDED);
        }
    });

    it('throws an error about "Salt fetch failure"', async () => {
        try {
            const phoneHashDetail = await getPhoneHashDetail(accountDetails.INVALID.SALT_FETCH_FAILURE.account, accountDetails.INVALID.SALT_FETCH_FAILURE.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessage.SALT_FETCH_FAILURE);
        }
    });
});