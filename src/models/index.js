let mockAccounts = {
    1: {
        privateKey: '',
        address: ''
    },
    2: {
        privateKey: '',
        address: ''
    },
    3: {
        privateKey: '0x99cd9f07f8891e1d0cdfd974b7282cfe7cbea20416bac67692d3173bc5335ba5',
        address: '0xEb50b9B53394D5f3C81c2EbDa0618Aa3761C967C'
    }
}

let mockPhoneNumbers = {
    1: '',
    2: '',
    3: '+14155550000'
}

let mockContacts = {
    1: {
        phoneNumber: '',
        countryCode: ''
    },
    2: {
        phoneNumber: '',
        countryCode: ''
    },
    3: {
        phoneNumber: '',
        countryCode: ''
    }
}

let mockAttestationStats = {
    1: {
        completed: 3,
        total: 3,
    },
    2: {
        completed: 3,
        total: 3,
    },
    3: {
        completed: 3,
        total: 3,
    }
}

let mockPhoneHashDetails = {
    1: {
        e164Number: '+14155550000',
        phoneHash: '0xf6429456331dedf8bd32b5e3a578e5bc589a28d012724dcd3e0a4b1be67bb454',
        pepper: 'piWqRHHYWtfg9'
    },
    2: {
        e164Number: '+14155550000',
        phoneHash: '0xf6429456331dedf8bd32b5e3a578e5bc589a28d012724dcd3e0a4b1be67bb454',
        pepper: 'piWqRHHYWtfg9'
    },
    3: {
        e164Number: '+14155550000',
        phoneHash: '0xf6429456331dedf8bd32b5e3a578e5bc589a28d012724dcd3e0a4b1be67bb454',
        pepper: 'piWqRHHYWtfg9'
    }
}

let mockMappings = {
    1: {
        '0xd5b4028307ee557404bc6819790326dc0194cfc62c0ae5adcd79adb25da0bae8': {
            '0xDcD7335735F2c4bC7228E3d59D3D05e69Bb73809': { completed: 3, total: 4 },
            '0xE609135E96aA3424c05e940A6D2693d674bc9fDD': { completed: 3, total: 3 }
        }
    },
    2: {
        '0xd5b4028307ee557404bc6819790326dc0194cfc62c0ae5adcd79adb25da0bae8': {
            '0xDcD7335735F2c4bC7228E3d59D3D05e69Bb73809': { completed: 3, total: 4 },
            '0xE609135E96aA3424c05e940A6D2693d674bc9fDD': { completed: 3, total: 3 }
        }
    },
    3: {
        '0xd5b4028307ee557404bc6819790326dc0194cfc62c0ae5adcd79adb25da0bae8': {
            '0xDcD7335735F2c4bC7228E3d59D3D05e69Bb73809': { completed: 3, total: 4 },
            '0xE609135E96aA3424c05e940A6D2693d674bc9fDD': { completed: 3, total: 3 }
        }
    }
}

let mockMatchedContacts = {
    1: [
        ''
    ]
}

let mockAccountDetails = {
    1: {
        account: mockAccounts[1],
        phoneNumber: mockPhoneNumbers[1],
        contacts: mockContacts[1],
        attestationStat: mockAttestationStats[1]
    },
    2: {
        account: mockAccounts[1],
        phoneNumber: mockPhoneNumbers[1],
        contacts: mockContacts[1],
        attestationStat: mockAttestationStats[1]
    },
    // ODIS_QUOTA_ERROR
    3: {
        account: mockAccounts[1],
        phoneNumber: mockPhoneNumbers[1],
        contacts: mockContacts[1],
        attestationStat: mockAttestationStats[1]
    }
}



// let attestationStatus = {
//     1: {
//         isVerified: false,
//         numAttestationsRemaining: 0,
//         total: 3,
//         completed: 3
//     },
//     2: {
//         isVerified: false,
//         numAttestationsRemaining: 2,
//         total: 7,
//         completed: 5
//     }
// }

// let metadataInTx = {
//     1: {
//         address: '',
//         e164Number: '',
//         salt: '',
//         phoneHash: ''
//     },
//     2: {
//         address: '',
//         e164Number: '',
//         salt: '',
//         phoneHash: ''
//     }
// }

module.exports.mockAccounts = mockAccounts;
module.exports.mockPhoneNumbers = mockPhoneNumbers;
module.exports.mockContacts = mockContacts;
module.exports.mockAttestationStats = mockAttestationStats;
module.exports.mockPhoneHashDetails = mockPhoneHashDetails;
module.exports.mockMappings = mockMappings;
module.exports.mockMatchedContacts = mockMatchedContacts;
module.exports.mockAccountDetails = mockAccountDetails;