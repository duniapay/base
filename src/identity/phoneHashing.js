const newKit = require('@celo/contractkit').newKit;
const soliditySha3 = require('web3-utils').soliditySha3;
const EC = require('elliptic').ec;

const ec = new EC('secp256k1')

const AuthenticationMethod = {
    WALLET_KEY = 'wallet_key',
    ENCRYPTION_KEY = 'encryption_key',
}

const OdisErrorMessage = {
    ODIS_QUOTA_ERROR = 'Odis Quota Error',
    ODIS_INPUT_ERROR = 'Odis Bad Input Error',
    ODIS_AUTH_ERROR = 'Odis Authentication Error',
    ODIS_CLIENT_ERROR = 'Unknown Client Error',
}

const OdisServiceContext = {
    ODIS_MAINNET_CONTEXT = {
        odisUrl: 'https://us-central1-celo-pgpnp-mainnet.cloudfunctions.net',
        odisPubKey: 'FvreHfLmhBjwxHxsxeyrcOLtSonC9j7K3WrS4QapYsQH6LdaDTaNGmnlQMfFY04Bp/K4wAvqQwO9/bqPVCKf8Ze8OZo8Frmog4JY4xAiwrsqOXxug11+htjEe1pj4uMA'
    },

    ODIS_ALFAJORES_CONTEXT = {
        odisUrl: 'https://us-central1-celo-phone-number-privacy.cloudfunctions.net',
        odisPubKey: 'kPoRxWdEdZ/Nd3uQnp3FJFs54zuiS+ksqvOm9x8vY6KHPG8jrfqysvIRU0wtqYsBKA7SoAsICMBv8C/Fb2ZpDOqhSqvr/sZbZoHmQfvbqrzbtDIPvUIrHgRS0ydJCMsA'
    },

    ODIS_ALFAJORESSTAGING_CONTEXT = {
        odisUrl: 'https://us-central1-celo-phone-number-privacy-stg.cloudfunctions.net',
        odisPubKey: '7FsWGsFnmVvRfMDpzz95Np76wf/1sPaK0Og9yiB+P8QbjiC8FV67NBans9hzZEkBaQMhiapzgMR6CkZIZPvgwQboAxl65JWRZecGe5V3XO4sdKeNemdAZ2TzQuWkuZoA'
    }
}

function getPhoneHashPrivate(phoneNumber, account) {
    if (!isValidPhoneNumber) {
        throw new Error('Invalid phone number: ' + phoneNumber);
    }

    const signer = '';
    const phoneNumberPrivacyRequest = '';
    const serviceContext = '';
    const endpoint = '';

    if (signer.authenticationMethod === AuthenticationMethod.ENCRYPTION_KEY) {
        const key = ec.keyFromPrivate(hexTobuffer(signer.rawkey));
        authHeader = JSON.stringify(key.sign(phoneNumberPrivacyRequest).toDER());

        const pubPoint = key.getPublic(true, 'hex');
        const pubKey = ec.keyFromPublic(trimLeading0x(pubPoint), 'hex');
        const valid = pubKey.verify(phoneNumberPrivacyRequest, JSON.parse(authHeader));
    } else {
        authHeader = '';
    }



}

function getPhoneHashInput(phoneNumber, salt) {
    const PHONE_PREFIX = 'tel://';
    const PHONE_SALT_SEPARATOR = '__';

    const value = PHONE_PREFIX + phoneNumber.toString() + PHONE_SALT_SEPARATOR + salt;

    return soliditySha3({type: 'string', value: value});
}

function isValidPhoneNumber(phoneNumber) {
    const E164_REGEX = /^\+[1-9][0-9]{1,14}$/;

    return E164_REGEX.test(phoneNumber);
}

// function getAuthSignerForAccount(account) {
//     const kit = newKit('https://alfajores-forno.celo-testnet.org:8545');

//     const accountsWrapper = kit.contracts.getAccounts();

//     const privateDataKey = 
// }