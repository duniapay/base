const expect = require('chai').expect;
const { mockAccounts } = require('../../src/models/index');
const { addNameClaim, addDomainClaim, addStorageClaim } = require('../../src/identity/identityClaiming');

const mockNames = {
    1: '',
    2: '',
    3 : 'Celo'
}

const mockDomains = {
    1: ''
}

const mockStorageURLs = {
    1 : ''
}

describe('Add identity claims', () => {
    it('adds name claim correctly', async () => {
        const nameClaim = await addNameClaim(mockAccounts[3], mockNames[3]);

        expect(nameClaim.name).to.equal(mockNames[3]);
    });

    it('adds domain claim correctly', async () => {
        const domainCaim = await addDomainClaim(mockAccounts[1], mockDomains[1]);

        expect(domainCaim.domain).to.equal(mockDomains[1]);
    });

    it('adds name claim correctly', async () => {
        const storageClaim = await addStorageClaim(mockAccounts[1], mockStorageURLs[1]);

        expect(storageClaim.storage).to.equal(mockStorageURLs[1]);
    });
});