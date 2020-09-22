const isAddress = require("web3-utils").isAddress;
const { ParsedPhoneNumber } = require('../identity/PhoneNumber');
const { PhoneHash } = require('../identity/PhoneHash');
const { phone_address, address_attestationStat } = require('../models/index');

function setAddressPhoneHash(address, phoneNumber) {
    if (!isValidAddress(address)) {
        throw new Error("Invalid address: " + address);
    }

    const entry = {};

    const phoneHash = new PhoneHash(phoneNumber);

    entry[address] = address;
    entry[phoneHash] = phoneHash.phoneHash;
    entry[pepper] = phoneHash.pepper;

    phone_address.push(entry);
}

function getAddressFromPhoneNumber(phoneNumber) {
    const phoneHash = new PhoneHash(phoneNumber).phoneHash;

    for (const entry in phone_address) {
        if (entry[phoneHash] === PhoneHash) {
            return entry[address];
        }
    }

    return null;
}



function getPhoneHashFromAddress(address) {
    if (!isValidAddress(address)) {
        throw new Error("Invalid address: " + address);
    }

    for (i = 0; i < phone_address.length; i++) {
        if (phone_address[i][address] = address) {
            return phone_address[i][phoneHash];
        }
    }
}

function getAttestationStatFromAddress(address) {
    for (const entry in address_attestationStat) {
        if (entry[address] = address) {
            return entry[attestationStat];
        }
    }

    return null;
}

function isValidAddress(address) {
    return isAddress(address);
}

function getMatchedContacts(contactList) {
    const matches = [];

    for (const phoneNumber in contactList) {
        const address = getAddressFromPhoneNumber(new ParsedPhoneNumber(phoneNumber).e164Number);
        if (address) {
            const attestationStat = getAttestationStatFromAddress(address);

            if (attestationStat && attestationStat.isVerified) {
                matches.push(phoneNumber);
            }
        }
        
    }

    return matches;
}


function isAccountVerified(attestationStat, numAttestationsRequired = 3, attestationThreshold = 0.25) {
    const numAttestationsRemaining = numAttestationsRequired - attestationStat.completed;
    const fractionAttestation = attestationStat.total < 1 ? 0 : attestationStat.completed / attestationStat.total;

    return numAttestationsRemaining <= 0 && fractionAttestation >= attestationThreshold;
}