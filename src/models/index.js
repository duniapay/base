let accounts = {
    1: "0x0000000000000000000000000000000000007E57",
    2: "0x9335BaFcE54cAa0D6690d1D4DA6406568b52488F",
    3: "0x8e1Df47B7064D005Ef071a89D0D7dc8634BC8A9C"
}

let recipients = {
    1: {
        displayName: "John Doe",
        displayId: "14155550000",
        contactId: "contactId",
        phoneNumber: "+14155550000",
        phoneNumberLabel: "phoneNumberLabel",
        contactList: [
            "+13105550000"
        ]
    },
    2: {
        displayName: "Jane Doe",
        displayId: "13105550000",
        contactId: "contactId",
        phoneNumber: "+13105550000",
        phoneNumberLabel: "phoneNumberLabel",
        contactList: [
            "+442012341234",
        ]
    },
    3: {
        displayName: "George Bogart",
        displayId: "442012341234",
        contactId: "contactId",
        phoneNumber: "+442012341234",
        phoneNumberLabel: "phoneNumberLabel",
        contactList: [
            "+13105550000",
        ]
    }
}

let parsedPhoneNumbers = {
    1: {
        e164Number: "+14155550000",
        displayNumberNational: "(415) 555 0000",
        displayNumberInternational: "+1 415 555 0000",
        countryCode: "US"
    },
    2: {
        e164Number: "+13105550000",
        displayNumberNational: "(310) 555 0000",
        displayNumberInternational: "+1 310 555 0000",
        countryCode: "US"
    },
    3: {
        e164Number: "+442012341234",
        displayNumberNational: "(201) 234 1234",
        displayNumberInternational: "+44 201 234 1234",
        countryCode: "UK"
    }
}

let contacts = {
    1: {
        displayName: 'serge o',
        label: 'personal',
        number: 'string'
    },
    2: {
        displayName: 'Angela S',
        label: 'friend',
        number: 'string'
    }
}

let attestationStatus = {
    1: {
        isVerified: false,
        numAttestationsRemaining: 0,
        total: 3,
        completed: 3
    },
    2: {
        isVerified: false,
        numAttestationsRemaining: 2,
        total: 7,
        completed: 5
    }
}

let attestationStat = {
    1: {
        completed: false,
        total: 2
    },
    2: {
        completed: true,
        total: 0
    }
}

let metadataInTx = {
    1: {
        address: "",
        e164Number: "",
        salt: "",
        phoneHash: ""
    },
    2: {
        address: "",
        e164Number: "",
        salt: "",
        phoneHash: ""
    }
}



module.exports = {
    accounts,
    recipients,
    parsedPhoneNumbers,
    attestationStatus,
    attestationStat,
    metadataInTx,
    contacts
};
