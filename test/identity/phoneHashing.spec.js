const expect = require('chai').expect;
const { getPhoneHashDetail } = require('../../src/identity/phoneHashing');

const mockAccount = {
    privateKey: '0x95299cf5513396d8bde6b612d8edc99d8e08701687431da846084df5d874cb25',
    address: '0x0eccAf89Fe03Ba5F57980f5a83C92C38117B9a66'
}

const mockPhoneHashDetail = {
    e164Number: '+14155550000',
    phoneHash: '0xf6429456331dedf8bd32b5e3a578e5bc589a28d012724dcd3e0a4b1be67bb454',
    pepper: 'piWqRHHYWtfg9',
}

// describe('Get phone hash detail', () => {
//     it('gets the phone hash detail correctly', () => {
//         expect(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount).e164Number).to.equal(mockPhoneHashDetail.e164Number);
//         expect(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount).phoneHash).to.equal(mockPhoneHashDetail.phoneHash);
//         expect(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount).pepper).to.equal(mockPhoneHashDetail.pepper);
//     });
// });

console.log(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount));