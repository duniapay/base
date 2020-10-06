const expect = require('chai').expect;
const { isE164Number, parsePhoneNumber, parsePhoneNumbers } = require('../../src/identity/utils');

const TEST_PHONE_NUMBER = {
    INVALID: {
        NULL: {
            phoneNumber: null,
            countryCode: 'US'
        },
        EMPTY: {
            phoneNumber: '',
            countryCode: 'US'
        },
        SHORT: {
            phoneNumber: '+1',
            countryCode: 'US'
        },
        LONG: {
            phoneNumber: '+1111111111111111',
            countryCode: 'US'
        },
    },

    VALID_US: {
        1: {
            phoneNumber: '+14155550000',
            countryCode: 'US'
        },
        2: {
            phoneNumber: '14155550000',
            countryCode: 'US'
        },
        3:  {
            phoneNumber: '4155550000',
            countryCode: 'US'
        },
        4:  {
            phoneNumber: '(415) 555-0000',
            countryCode: 'US'
        }
    }
}

const parsedPhoneNumberUS = {
    e164Number: '+14155550000',
    displayNumberNational: '(415) 555 0000',
    displayNumberInternational: '+1 415 555 0000',
    countryCode: 'US'
}

const parsedPhoneNumbersUS = [ '+14155550000', '+14155550000', '+14155550000', '+14155550000' ];

describe("Phone number validity", () => {
    it('checks if the phone number is e164', () => {
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID.NULL.phoneNumber)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID.EMPTY.phoneNumber)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID.SHORT.phoneNumber)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID.LONG.phoneNumber)).to.equal(false);

        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[1].phoneNumber)).to.equal(true);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[2].phoneNumber)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[3].phoneNumber)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[4].phoneNumber)).to.equal(false);
    });
});

describe("Phone number parsing", () => {
    it('parses the phone number', () => {
        expect(parsePhoneNumber(TEST_PHONE_NUMBER.VALID_US[1])).to.equal(parsedPhoneNumber);
        expect(parsePhoneNumber(TEST_PHONE_NUMBER.VALID_US[2])).to.equal(parsedPhoneNumber);
        expect(parsePhoneNumber(TEST_PHONE_NUMBER.VALID_US[3])).to.equal(parsedPhoneNumber);
        expect(parsePhoneNumber(TEST_PHONE_NUMBER.VALID_US[4])).to.equal(parsedPhoneNumber);
    });

    it('parses the phone numbers', () => {
        expect(parsePhoneNumbers(Object.values(TEST_PHONE_NUMBER.VALID_US))).to.equal(parsedPhoneNumbersUS);
    });
});