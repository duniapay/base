
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


let users = {
    1: {
        id: "000002200-0000-0000-0000-000000000000",
        first_name: "Jioe",
        last_name: "Soonap",
        email: "jean@1xpay.net",
        currency: {
            description: "Western Africa CFA",
            code: "CFA",
            symbol: "XOF",
            unit: "CFA",
            divisibility: 5
        },
        account: 3500000,
        available_balance: 1500000,
        mobile: "+27840000000",
    },
    2: {
        id: "000002200-0000-0000-0000-000000000000",
        first_name: "Jioe",
        last_name: "Soonap",
        email: "jean@rehive.com",
        currency: {
            description: "Rand",
            code: "ZAR",
            symbol: "R",
            unit: "rand",
            divisibility: 2
        },
        account: 0,
        available_balance: 0,
        mobile: "+27840000000",
    },
};



let topup = {
    userEmail: "serge@gmail.com",
    accountID: "dedrfqw12312313",
    orderId: 545434234,
    subtype: "payout",
    partnerName: '1XPAY',
    tx_type: "credit",
    status: "pending",
    reference: "",
    amount: 50000,
};

let collections = {
    userEmail: "serge@gmail.com",
    accountID: "dedrfqw12312313",
    orderId: 545434234,
    subtype: "payout",
    partnerName: '1XPAY',
    tx_type: "debit",
    status: "pending",
    reference: "",
    amount: 50000,
};

let payout = {

    userEmail: "1x-payment@1xpay.net",
    accountID: "dedrfqw12312313",
    orderId: 545434234,
    subtype: "payout",
    partnerName: '1XPAY',
    tx_type: "debit",
    status: "pending",
    reference: "",
    amount: 5000000,

};

let transactions = {
    1: {
        customerEmail: "serge@gmail.com",
        customerAccountNumber: "dedrfqw12312313",
        currency: "XOF",
        customerFirstname: "serge",
        customerLastname: "Ouedraogo",
        partnerName: "1XPAY",
        tx_type: "credit",
        subtype: "deposit",
        status: "confirmed",
        reference: "545434234",
        amount: 500,
    },
    2: {
        customerEmail: "serge@gmail.com",
        customerAccountNumber: "dedrfqw12312313",
        currency: "XOF",
        customerFirstname: "serge",
        customerLastname: "Ouedraogo",
        partnerName: "1XPAY",
        tx_type: "debit",
        subtype: "collection",
        status: "confirmed",
        reference: "545434234",
        amount: 500,
    },
    3: {
        customerEmail: "1xpay@1xpay.net",
        customerAccountNumber: "dedrfqw12312313",
        currency: "USD",
        customerFirstname: "serge",
        customerLastname: "Ouedraogo",
        partnerName: "DUNIAPAY",
        tx_type: "debit",
        subtype: "payout",
        status: "confirmed",
        reference: "545434234",
        amount: 50000,
    }
};

export default {
    users,
    transactions,
};