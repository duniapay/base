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

function getPhoneHash(phoneNumber, account, signer, context) {
    if (!phoneNumber || !phoneNumber.isValid()) {
        throw new Error('Invalid phone number: ' + phoneNumber);
    }

    const base64PhoneNumber = Buffer.from(e164Number).toString('base64')

    const request = {
        account,
        timestamp: Date.now(),
        authenticationMethod: signer.authenticationMethod,
    }

    const response =  await queryOdis(signer,body,context,'/getBlindedMessageSig')

      const base64BlindSig = response.combinedSignature

      const sig = Buffer.from(base64UnblindedSig, 'base64')
    
      const pepper = getPepper(sig)
      const phoneHash = getPhoneHash(phoneNumber, pepper)
      return { phoneNumber, phoneHash, pepper }
}

function getPepper(sig) {
    
    return createHash('sha256').update(sig).digest('base64').slice(0, 13);
}

function getPhoneHash(phoneNumber, pepper) {
    const PHONE_PREFIX = 'tel://';
    const PHONE_SALT_SEPARATOR = '__';

    const value = PHONE_PREFIX + phoneNumber.toString() + PHONE_SALT_SEPARATOR + pepper;

    return soliditySha3({type: 'string', value: value});
}

module.exports.PhoneHash = PhoneHash;