const expect = require('chai').expect;
const { mockAccounts } = require('../../../src/models/index');
const { getContractKit, getContractKitFromWeb3 } = require('../../../src/identity/utils/account')

describe('Get contract kit', () => {
    it('imports the account to the contract kit correctly', async () => {
        const accounts = await getContractKit(mockAccounts[3]).web3.eth.getAccounts();

        expect(accounts[0]).to.equal(mockAccounts[3].address);
    });
});

describe('Get contract kit from web3', () => {
    it('creates a contract kit instance from web3 instance correctly', async () => {
        const contrackKit = getContractKitFromWeb3();

        expect(contrackKit.web3).to.not.be.undefined;
    });
});