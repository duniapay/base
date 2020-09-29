const expect = require('chai').expect;
const { isE164Number } = require('../../src/identity/utils');
const { parsePhoneNumber } = require('../../src/identity/utils');

const TEST_PHONE_NUMBER = {
    INVALID_NULL: null,
    INVALID_EMPTY: '',
    INVALID_SHORT: '+1',
    INVALID_LONG: '+1111111111111111',
    
    VALID_US_1: '+14155550000',
    VALID_US_2: '14155550000',
    VALID_US_3: '4155550000',
    VALID_US_4: '(415) 555-0000',

}

describe("Phone number validity", () => {
    it('checks if the phone number is e164', () => {
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID_NULL)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID_EMPTY)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID_SHORT)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.INVALID_LONG)).to.equal(false);

        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US_1)).to.equal(true);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US_2)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US_3)).to.equal(false);
        expect(isE164Number(TEST_PHONE_NUMBER.VALID_US_4)).to.equal(false);
    });
});

describe("Phone number parsing", () => {
    it('parses the phone number', () => {
        expect(parsePhoneNumber(TEST_PHONE_NUMBER.VALID_US_1).e164Number).to.equal('+14155550000');
        expect(parsePhoneNumber(TEST_PHONE_NUMBER.VALID_US_1).displayNumberNational).to.equal('(415) 555 0000');
        expect(parsePhoneNumber(TEST_PHONE_NUMBER.VALID_US_1).displayNumberInternational).to.equal('+1 415 555 0000');
        expect(parsePhoneNumber(TEST_PHONE_NUMBER.VALID_US_1).countryCode).to.equal('US');
    });
});