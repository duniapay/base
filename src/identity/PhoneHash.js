const soliditySha3 = require('web3-utils').soliditySha3;
const randomHex = require('web3-utils').randomHex;
const { PhoneNumber } = require('./PhoneNumber');

class PhoneHash {
    constructor(phoneNumber, salt) {
        this.phoneNumber = new PhoneNumber(phoneNumber);
        this.phoneHash = getPhoneHash();
        this.pepper = salt ? salt : phoneNumber;
    }

    getPhoneHash() {
        if (!this.phoneNumber || !this.phoneNumber.isValid()) {
            throw new Error('Invalid phone number: ' + this.phoneNumber);
        }
        
        return soliditySha3({type: 'string', value: this.getPhoneHashInput()});
    }

    getPhoneHashInput() {
        const PHONE_PREFIX = 'tel://';
        const PHONE_SALT_SEPARATOR = '__';
    
        return PHONE_PREFIX + this.phoneNumber.toString() + PHONE_SALT_SEPARATOR + this.pepper;
    }
}

module.exports.PhoneHash = PhoneHash;