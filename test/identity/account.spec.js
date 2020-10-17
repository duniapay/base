const expect = require('chai').expect;
const { mockAccounts } = require('../../src/models/index');
const { getContractKit, getContractKitFromWeb3 } = require('./../../src/identity/account');

describe('Get contract kit', () => {
    it('imports the account to the contract kit correctly', async () => {
        const accounts = await getContractKit(mockAccounts[3]).web3.eth.getAccounts();

        expect(accounts[0]).to.equal(mockAccounts[3].address);
    });
});