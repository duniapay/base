const expect = require('chai').expect;
const { getPhoneHashDetail } = require('../../src/identity/phoneHashing');

const mockAccount = {
    privateKey: '0x99cd9f07f8891e1d0cdfd974b7282cfe7cbea20416bac67692d3173bc5335ba5',
    address: '0xEb50b9B53394D5f3C81c2EbDa0618Aa3761C967C'
}

const mockPhoneHashDetail = {
    e164Number: '+14155550000',
    phoneHash: '0xf6429456331dedf8bd32b5e3a578e5bc589a28d012724dcd3e0a4b1be67bb454',
    pepper: 'piWqRHHYWtfg9',
}

describe('Get phone hash detail', () => {
    it('gets the phone hash detail correctly', () => {
        expect(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount).e164Number).to.equal(mockPhoneHashDetail.e164Number);
        expect(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount).phoneHash).to.equal(mockPhoneHashDetail.phoneHash);
        expect(getPhoneHashDetail(mockPhoneHashDetail.e164Number, mockAccount).pepper).to.equal(mockPhoneHashDetail.pepper);
    });
});