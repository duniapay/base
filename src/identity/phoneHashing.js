import { soliditySha3 } from "web3-utils";

const PHONE_PREFIX = "tel://";
const PHONE_SALT_SEPARATOR = '__';
const E164_REGEX = /^\+[1-9][0-9]{1,14}$/;

function getPhoneHash(phoneNumber) {
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
        throw new Error("Invalid phone number: " + e164Number);
    }
    
    return soliditySha3({type: 'string', value: getHashInput(phoneNumber, getPhoneHashSalt(phoneNumber))});
}

function getPhoneHashPrivate(e164Number) {
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
        throw new Error("Invalid phone number: " + e164Number);
    }
    
    return soliditySha3({type: 'string', value: getHashInput(phoneNumber, getPhoneHashSaltPrivate(phoneNumber))});
}

function getPhoneHashSalt(phoneNumber) {
    // TODO
}

function getPhoneHashSaltPrivate(phoneNumber) {
    // TODO
}

function getHashInput(phoneNumber, salt = undefined) {
    return PHONE_PREFIX + (salt ? phoneNumber + PHONE_SALT_SEPARATOR + salt : phoneNumber);
}

function isValidPhoneNumber(phoneNumber) {
    return E164_REGEX.test(phoneNumber)
}

export default {
    getPhoneHash,
    getPhoneHashPrivate
};