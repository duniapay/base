const expect = require('chai').expect;
const { getAccount } = require('../../src/identity/account');
const { getContractKit } = require('../../src/identity/account');

const mockAccount = {
    privateKey: '0x95299cf5513396d8bde6b612d8edc99d8e08701687431da846084df5d874cb25',
    address: '0x0eccAf89Fe03Ba5F57980f5a83C92C38117B9a66'
}

describe('Import account to contractKit', () => {
    it('adds the account to contractKit', () => {
        // expect(getContractKit(mockAccount).defaultAccount).to.equal();
    });
});