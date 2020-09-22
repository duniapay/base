const expect = require('chai').expect
const { PhoneNumber, ParsedPhoneNumber } = require('../../src/identity/PhoneNumber');

const mockPhoneNumber = '+14155550000'

let phoneNumber = null;
let parsedPhoneNumber  = null;

describe('Class PhoneNumber', () => {
    beforeEach (() => {
        phoneNumber = new PhoneNumber(mockPhoneNumber);
    });

    describe('Constructor', () => {
        it('should initialize properly', () => {
            expect(phoneNumber.phoneNumber).to.equal(mockPhoneNumber);
        });
    });
});

describe('Class ParsedPhoneNumber', () => {
    beforeEach (() => {
        parsedPhoneNumber = new ParsedPhoneNumber(mockPhoneNumber);
    });

    describe('Constructor', () => {
        it('should initialize properly', () => {
            expect(parsedPhoneNumber.e164Number).to.equal('+14155550000');
            expect(parsedPhoneNumber.displayNumberNational).to.equal('(415) 555 0000');
            expect(parsedPhoneNumber.displayNumberInternational).to.equal('+1 415 555 0000');
            expect(parsedPhoneNumber.countryCode).to.equal('US');
        });
    });
});
