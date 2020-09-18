
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




let parsedPhoneNumber = {
    1: {
        e164Number: '',
        displayNumber: '+226 78 82 27 09',
        displayNumberInternational: '',
        countryCode: '',
        regionCode: ''
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



export default {
    attestationStatus,
    attestationStat,
    metadataInTx,
    parsedPhoneNumber,
    minimalContacts,
    contacts
};
