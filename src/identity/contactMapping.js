import phoneHashing from "./phoneHashing";
import { isAddress } from "web3-utils";
import { parsePhoneNumberFromString } from 'libphonenumber-js'

const PHONE_ADDRESS_MAP = {};

function getAddressFromPhoneNumber(phoneNumber) {
    let phoneHash;

    if (isPhoneHashPrivate(phoneNumber)) {
        phoneHash = phoneHashing.getPhoneHashPrivate(phoneNumber);
    } else {
        phoneHash = phoneHashing.getPhoneHash(phoneNumber);
    }
}

function setAddressPhoneHash(address, phoneNumber) {
    if (isPhoneHashPrivate(phoneNumber)) {
        PHONE_ADDRESS_MAP[address] = phoneHashing.getPhoneHash(phoneNumber);
    } else {
        PHONE_ADDRESS_MAP[address] = phoneHashing.getPhoneHashPrivate(phoneNumber);
    }
}

function getPhoneHashFromAddress(address) {
    if (!isValidAddress(address)) {
        throw new Error("Invalid address: " + address);
    }

    return PHONE_ADDRESS_MAP[address];
}

function getAttestationStatFromAddress(address) {

}

function isPhoneHashPrivate(phoneNumber) {

}

function isValidAddress(address) {
    return isAddress(address);
}

function getContacts(phoneNumber) {
    
}

function getParsedPhoneNumber(phoneNumber) {
    const formattedPhoneNumber = libphonenumber.parsePhoneNumberFromString(phoneNumber);
    const parsedPhoneNumber = {};

    parsedPhoneNumber["e164Number"] = formattedPhoneNumber.number;
    parsedPhoneNumber["displayNumber"] = formattedPhoneNumber.formatNational();
    parsedPhoneNumber["displayNumberInternational"] = formattedPhoneNumber.formatInternational();
    parsedPhoneNumber["countryCode"] = formattedPhoneNumber.country;
    parsedPhoneNumber["regionCode"] = formattedPhoneNumber.carrierCode;

    return parsedPhoneNumber;
}

function isAccountVerified(attestationStat, numAttestationsRequired) {
    let numAttestationsRemaining = numAttestationsRequired - attestationStat.completed;
    let fractionAttestation;

    if (attestationStat.total < 1) {
        fractionAttestation = 0;
    } else {
        fractionAttestation = attestationStat.completed / attestationStat.total;
    }

    return numAttestationsRemaining <= 0 && fractionAttestation >= attestationThreshold;
}