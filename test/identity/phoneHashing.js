const expect = require('chai').expect;
const { getPhoneHashDetail } = require('../../src/identity/phoneHashing');

const phoneHashDetail = {
    e164Number: '+14155550000',
    phoneHash: '0xf6429456331dedf8bd32b5e3a578e5bc589a28d012724dcd3e0a4b1be67bb454',
    pepper: 'piWqRHHYWtfg9',
}

// describe(getContractKit, () => {
//     it('gets the contractKit for the account correctly', () => {
//         expect(account.address).to.equal(getContractKit(account).defaultAccount);
//     });
// });