// import 'web3';

function getPhoneHash(phoneNumber) {
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
        throw Error('Attempting to hash a non-e164 number: ' + phoneNumber)
    }

    // return web3.utils.soliditySha3({type: 'string', value: phoneNumber});
}

function getAddress(phoneNumber) {
    const phoneHash = getPhoneHash(phoneNumber);
    // TODO
}

function getMatchedContacts(contacts) {
    let matchedContacts = [];

    for (let contact in contacts) {
        if (isVerifiedAccount(contact)) {
            matchedContacts.push(contact);
        }
    }
}

function isValidPhoneNumber(phoneNumber) {
    const E164_REGEX = /^\+[1-9][0-9]{1,14}$/
    return E164_REGEX.test(phoneNumber);
}

function isVerifiedAccount(phoneNumber) {
    // TODO
    return false;
}