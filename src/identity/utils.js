const { parsePhoneNumberFromString } = require('libphonenumber-js');

function isE164Number(phoneNumber) {
    const E164_REGEX = /^\+[1-9][0-9]{1,14}$/;

    return E164_REGEX.test(phoneNumber);
}

function parsePhoneNumber(phoneNumber) {
    const parsedPhoneNumber = {};
    const basePhoneNumber = parsePhoneNumberFromString(phoneNumber);

    parsedPhoneNumber.e164Number = basePhoneNumber.format("E.164");
    parsedPhoneNumber.displayNumberNational = basePhoneNumber.format("NATIONAL");
    parsedPhoneNumber.displayNumberInternational = basePhoneNumber.format("INTERNATIONAL");
    parsedPhoneNumber.countryCode = basePhoneNumber.country;

    return parsedPhoneNumber;
}

function parsePhoneNumbers(phoneNumbers) {
    const parsedPhoneNumbers = [];

    phoneNumbers.array.forEach(phoneNumber => {
        const parsedPhoneNumber = parsePhoneNumber(phoneNumber);

        parsedPhoneNumbers.push(parsedPhoneNumber.e164Number);
    });

    return  parsedPhoneNumbers;
}

module.exports.isE164Number = isE164Number;
module.exports.parsePhoneNumber = parsePhoneNumber;
module.exports.parsePhoneNumbers = parsePhoneNumbers;