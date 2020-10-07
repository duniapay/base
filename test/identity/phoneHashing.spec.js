const expect = require('chai').expect;
const { getPhoneHashDetail } = require('./../../src/identity/phoneHashing');
const { ErrorMessages } = require('./../../src/identity/errorMessage');

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
        },
        SALT_QUOTA_EXCEEDED: {
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
        },
        SALT_FETCH_FAILURE: {
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

const mockPhoneHashDetails = {
    1: {
        e164Number: '+14155550000',
        phoneHash: '0xf6429456331dedf8bd32b5e3a578e5bc589a28d012724dcd3e0a4b1be67bb454',
        pepper: 'piWqRHHYWtfg9'
    }
}

describe('Get phone hash detail', () => {
    it('gets the phone hash detail correctly', async () => {
        const phoneHashDetail = await getPhoneHashDetail(mockAccountDetails.VALID[1].account, mockAccountDetails.VALID[1].phoneNumber);

        expect(phoneHashDetail).to.equal(mockPhoneHashDetails[1]);
    });

    it('throws an error about "ODIS insufficient balance"', async () => {
        try {
            const phoneHashDetail = await getPhoneHashDetail(mockAccountDetails.INVALID.ODIS_QUOTA_ERROR.account, mockAccountDetails.INVALID.ODIS_QUOTA_ERROR.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessages.ODIS_QUOTA_ERROR);
        }
    });

    it('throws an error about "Salt quota exceeded"', async () => {
        try {
            const phoneHashDetail = await getPhoneHashDetail(mockAccountDetails.INVALID.SALT_QUOTA_EXCEEDED.account, mockAccountDetails.INVALID.SALT_QUOTA_EXCEEDED.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessages.SALT_QUOTA_EXCEEDED);
        }
    });

    it('throws an error about "Salt fetch failure"', async () => {
        try {
            const phoneHashDetail = await getPhoneHashDetail(mockAccountDetails.INVALID.SALT_FETCH_FAILURE.account, mockAccountDetails.INVALID.SALT_FETCH_FAILURE.phoneNumber);
        } catch (error) {
            expect(error.message).to.equal(ErrorMessages.SALT_FETCH_FAILURE);
        }
    });
});