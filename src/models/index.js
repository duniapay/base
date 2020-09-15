
let minimalContacts = {
    1: {
        recordID: "000002200-0000-0000-0000-000000000000",
        displayName: "Soonap",
        phoneNumbers: [],
        thumbnailPath: "https://picsum.photos/id/237/200/300",
    },
    2: {
        recordID: "000002200-0000-0000-0000-000000000000",
        displayName: "Blueeee",
        phoneNumbers: [],
        thumbnailPath: "https://picsum.photos/id/237/200/300",
    }
}

let contacts = {
    1: {
        label: 'friend',
        number: 'string'
    },
    2: {
        label: 'friend',
        number: 'string'
    }
}


let attestations = {
    1: {
        recordID: "000002200-0000-0000-0000-000000000000",
        displayName: "Soonap",
        phoneNumbers: [],
        thumbnailPath: "https://picsum.photos/id/237/200/300",
    },
    2: {
        recordID: "000002200-0000-0000-0000-000000000000",
        displayName: "Blueeee",
        phoneNumbers: [],
        thumbnailPath: "https://picsum.photos/id/237/200/300",
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
