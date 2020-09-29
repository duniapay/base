const expect = require('chai').expect;
const { getAccount } = require('../../src/identity/account');
const { getContractKit } = require('../../src/identity/account');


describe('getContractKit', () => {
    const account = getAccount();

    it('gets the contractKit for the account correctly', () => {

        expect(account.address).to.equal(getContractKit(account).defaultAccount);
    });
});