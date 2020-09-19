var soliditySha3 = require('web3-utils').soliditySha3;
var randomHex = require('web3-utils').randomHex;

function getPhoneHash(phoneNumber, salt) {
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
        throw new Error('Invalid phone number: ' + e164Number);
    }
    
    return soliditySha3({type: 'string', value: getHashInput(phoneNumber, salt)});
}

function getPhoneHashPrivate(e164Number) {
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
        throw new Error('Invalid phone number: ' + e164Number);
    }
    
    return soliditySha3({type: 'string', value: getHashInput(phoneNumber, getPhoneHashSaltPrivate(phoneNumber))});
}

function getPhoneHashSaltPrivate(phoneNumber) {
    // TODO
}

function getHashInput(phoneNumber, salt = undefined) {
    const PHONE_PREFIX = 'tel://';
    const PHONE_SALT_SEPARATOR = '__';

    return PHONE_PREFIX + (salt ? phoneNumber + PHONE_SALT_SEPARATOR + salt : phoneNumber);
}

function isValidPhoneNumber(phoneNumber) {
    const E164_REGEX = /^\+[1-9][0-9]{1,14}$/;

    return E164_REGEX.test(phoneNumber)
}

module.exports = {
    getPhoneHash,
    getPhoneHashPrivate,
    getHashInput
}