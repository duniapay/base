const parsePhoneNumberFromString = require('libphonenumber-js').parsePhoneNumberFromString;

class PhoneNumber {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    isValid() {
        const E164_REGEX = /^\+[1-9][0-9]{1,14}$/;

        return E164_REGEX.test(this.phoneNumber);
    }

    toString() {
        return this.phoneNumber;
    }
}

class ParsedPhoneNumber {
    constructor(phoneNumber) {
        phoneNumber = parsePhoneNumberFromString(phoneNumber);

        this.e164Number = phoneNumber.format("E.164");
        this.displayNumberNational = phoneNumber.format("NATIONAL");
        this.displayNumberInternational = phoneNumber.format("INTERNATIONAL");
        this.countryCode = phoneNumber.country;
    }
}

module.exports.PhoneNumber = PhoneNumber;
module.exports.ParsedPhoneNumber = ParsedPhoneNumber;