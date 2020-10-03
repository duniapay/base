const expect = require('chai').expect;
const { isE164Number, parsePhoneNumber, parsePhoneNumbers } = require('../../src/identity/utils');

const TEST_PHONE_NUMBER = {
    INVALID: {
        NULL: null,
        EMPTY: '',
        SHORT: '+1',
        LONG: '+1111111111111111',
    },

    VALID_US: {
        1: '+14155550000',
        2: '14155550000',  //error
        3: '4155550000',  //error
        4: '(415) 555-0000',  //error
    }
}

const parsedPhoneNumber = {
    e164Number: '+14155550000',
    displayNumberNational: '(415) 555 0000',
    displayNumberInternational: '+1 415 555 0000',
    countryCode: 'US'
}

describe("Phone number validity", () => {
    it('checks if the phone number is e164', () => {
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID.NULL)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID.EMPTY)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID.SHORT)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID.LONG)).to.equal(false);

        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[1])).to.equal(true);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[2])).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[3])).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[4])).to.equal(false);
    });
});

describe("Phone number parsing", () => {
    it('parses the phone number', () => {
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[1])).to.equal(parsedPhoneNumber);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[2])).to.equal(parsedPhoneNumber);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[3])).to.equal(parsedPhoneNumber);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US[4])).to.equal(parsedPhoneNumber);
    });

    it('parses the phone numbers', () => {
        expect(parsePhoneNumbers(Object.values(TEST_PHONE_NUMBER.VALID_US))).to.equal(parsedPhoneNumber);
    });
});