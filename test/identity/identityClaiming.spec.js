const expect = require('chai').expect;
const { addNameClaim, addDomainClaim, addStorageClaim } = require('../../src/identity/identityClaiming');

const mockAccounts = {
    1: {
        account: {
            privateKey: '',
            address: ''
        }
    }
}

const names = {
    1 : ''
}

const domains = {
    1: ''
}

const storages = {
    1 : ''
}

describe('Add identity claims', () => {
    it('adds name claim correctly', async () => {
        const nameClaim = await addNameClaim(mockAccounts[1], names[1]);

        expect(nameClaim).to.not.be.undefined;
        expect(nameClaim.name).to.equal(names[1]);
    });

    it('adds domain claim correctly', async () => {
        const domainCaim = await addDomainClaim(mockAccounts[1], domains[1]);

        expect(domainCaim).to.not.be.undefined;
        expect(domainCaim.domain).to.equal(domains[1]);
    });

    it('adds name claim correctly', async () => {
        const storageClaim = await addStorageClaim(mockAccounts[1], storages[1]);

        expect(storageClaim).to.not.be.undefined;
        expect(storageClaim.storage).to.equal(storages[1]);
    });
});