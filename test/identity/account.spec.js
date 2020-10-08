const expect = require('chai').expect;
const { getContractKit } = require('./../../src/identity/account');

const mockAccounts = {
    1: {
        privateKey: '0x99cd9f07f8891e1d0cdfd974b7282cfe7cbea20416bac67692d3173bc5335ba5',
        address: '0xEb50b9B53394D5f3C81c2EbDa0618Aa3761C967C'
    },
}

describe('Get contract kit', () => {
    it('imports the account to the contract kit correctly', async () => {
        const accounts = await getContractKit(mockAccounts[1]).web3.eth.getAccounts();

        expect(accounts[0]).to.equal(mockAccounts[1].address);
    });
});