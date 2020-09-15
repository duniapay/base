import phoneHashing from "./phoneHashing";

const PHONE_ADDRESS_MAP = {};

function setAddressPhoneHash(address, phoneNumber) {
    if (isPhoneHashPrivate(phoneNumber)) {
        PHONE_ADDRESS_MAP[address] = phoneHashing.getPhoneHash(phoneNumber);
    } else {
        PHONE_ADDRESS_MAP[address] = phoneHashing.getPhoneHashPrivate(phoneNumber);
    }
}

function getAddress(phoneNumber) {
    let phoneHash;
    if (isPhoneHashPrivate(phoneNumber)) {
        phoneHash = phoneHashing.getPhoneHash(phoneNumber);
    } else {
        phoneHash = phoneHashing.getPhoneHashPrivate(phoneNumber);
    }
}

function isPhoneHashPrivate(phoneNumber) {

}