const expect = require('chai').expect;
// const { getAddress } = require('../../src/identity/contactMapping');

const mockAccount = {
    privateKey: '',
    address: '',
    phoneNumber: '',
    contacts: [
        ''
    ],
    attestationStat: {
        completed: 3,
        total: 3,
    }
}


// const mockPhoneHash = '0xd5b4028307ee557404bc6819790326dc0194cfc62c0ae5adcd79adb25da0bae8'

// const mockMapping = {
//     mockAccount: {
//         '0xd5b4028307ee557404bc6819790326dc0194cfc62c0ae5adcd79adb25da0bae8': {
//             '0xDcD7335735F2c4bC7228E3d59D3D05e69Bb73809': { completed: 3, total: 4 },
//             '0xE609135E96aA3424c05e940A6D2693d674bc9fDD': { completed: 3, total: 3 }
//         }
//     }
// }


// describe('Get phone hash detail', () => {
//     it('gets the phone hash detail correctly', () => {
//         expect(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount).e164Number).to.equal(mockPhoneHashDetail.e164Number);
//         expect(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount).phoneHash).to.equal(mockPhoneHashDetail.phoneHash);
//         expect(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount).pepper).to.equal(mockPhoneHashDetail.pepper);
//     });
// });