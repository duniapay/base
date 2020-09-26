const { parsePhoneNumberFromString } = require('libphonenumber-js');

function isE164Number(e164Number) {
    const E164_REGEX = /^\+[1-9][0-9]{1,14}$/;

    return E164_REGEX.test(parsedPhoneNumber.pbasePhoneNumber);
}

function parsePhoneNumber(e164Number) {
    if (!isE164Number(e164Number)) {
        throw new Error('Invalid phone number: ' + e164Number);
    }

    const parsedPhoneNumber = {};
    const basePhoneNumber = parsePhoneNumberFromString(e164Number);

    parsedPhoneNumber.e164Number = basePhoneNumber.format("E.164");
    parsedPhoneNumber.displayNumberNational = basePhoneNumber.format("NATIONAL");
    parsedPhoneNumber.displayNumberInternational = basePhoneNumber.format("INTERNATIONAL");
    parsedPhoneNumber.countryCode = basePhoneNumber.country;

    return parsedPhoneNumber;
}

module.exports.isE164Number = isE164Number;
module.exports.parsePhoneNumber = parsePhoneNumber;