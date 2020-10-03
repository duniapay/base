let mockAccounts = {
    mockAccount: {
        privateKey: '',
        address: ''
    },
    mockAccount2: {
        privateKey: '',
        address: ''
    }
}

let mockContacts = {
    mockContact: [
        ''
    ],
    mockContact2: [
        ''
    ]
}

let mockAttestationStats = {
    mockAttestationStat: {
        completed: 3,
        total: 3
    },
    mockAttestationStat: {
        completed: 3,
        total: 3
    }
} 

let recipients = {
    1: {
        displayName: 'John Doe',
        displayId: '14155550000',
        contactId: 'contactId',
        phoneNumber: '+14155550000',
        phoneNumberLabel: 'phoneNumberLabel',
        contactList: [
            '+13105550000'
        ]
    },
    2: {
        displayName: 'Jane Doe',
        displayId: '13105550000',
        contactId: 'contactId',
        phoneNumber: '+13105550000',
        phoneNumberLabel: 'phoneNumberLabel',
        contactList: [
            '+442012341234',
        ]
    },
    3: {
        displayName: 'George Bogart',
        displayId: '442012341234',
        contactId: 'contactId',
        phoneNumber: '+442012341234',
        phoneNumberLabel: 'phoneNumberLabel',
        contactList: [
            '+13105550000',
        ]
    }
}

let parsedPhoneNumbers = {
    1: {
        e164Number: '+14155550000',
        displayNumberNational: '(415) 555 0000',
        displayNumberInternational: '+1 415 555 0000',
        countryCode: 'US'
    },
    2: {
        e164Number: '+13105550000',
        displayNumberNational: '(310) 555 0000',
        displayNumberInternational: '+1 310 555 0000',
        countryCode: 'US'
    },
    3: {
        e164Number: '+442012341234',
        displayNumberNational: '(201) 234 1234',
        displayNumberInternational: '+44 201 234 1234',
        countryCode: 'UK'
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

let metadataInTx = {
    1: {
        address: '',
        e164Number: '',
        salt: '',
        phoneHash: ''
    },
    2: {
        address: '',
        e164Number: '',
        salt: '',
        phoneHash: ''
    }
}

module.exports.mockAccounts = mockAccounts;
module.exports.mockContacts = mockContacts;
module.exports.mockAttestationStats = mockAttestationStats;
