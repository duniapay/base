const { parsePhoneNumberFromString } = require('libphonenumber-js');

function isE164Number(phoneNumber) {
    const E164_REGEX = /^\+[1-9][0-9]{1,14}$/;

    return E164_REGEX.test(phoneNumber);
}

function parsePhoneNumber(phoneNumberDetail) {
    const parsedPhoneNumber = {};
    const phoneNumber = phoneNumberDetail.phoneNumber;
    const countryCode = phoneNumberDetail.countryCode ? phoneNumberDetail.countryCode : null;

    try {
        const basePhoneNumber = parsePhoneNumberFromString(phoneNumber, countryCode);

        parsedPhoneNumber.e164Number = basePhoneNumber.format('E.164');
        parsedPhoneNumber.displayNumberNational = basePhoneNumber.format("NATIONAL");
        parsedPhoneNumber.displayNumberInternational = basePhoneNumber.format("INTERNATIONAL");
        parsedPhoneNumber.countryCode = basePhoneNumber.country;

        return parsedPhoneNumber;
    } catch (error) {
        throw new Error('Failed to parse phone number ' + phoneNumber + ' with country code ' + countryCode);
    }
}

function parsePhoneNumbers(phoneNumberDetails) {
    const parsedPhoneNumbers = [];

    phoneNumberDetails.forEach(phoneNumberDetail => parsedPhoneNumbers.push(parsePhoneNumber(phoneNumberDetail).e164Number));
    
    return  parsedPhoneNumbers;
}

module.exports.isE164Number = isE164Number;
module.exports.parsePhoneNumber = parsePhoneNumber;
module.exports.parsePhoneNumbers = parsePhoneNumbers;