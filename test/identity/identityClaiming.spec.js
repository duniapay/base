const expect = require('chai').expect;
const { createNameClaim, createDomainClaim, createStorageClaim } = require('@celo/contractkit/lib/identity/claims/claim');
const { ClaimTypes } = require('@celo/contractkit/lib/identity');
const { mockAccounts } = require('../../src/models/index');
const { addClaim } = require('../../src/identity/identityClaiming');
const { getContractKitFromWeb3 } = require('../../src/identity/utils/account');
const { Action, getSigner } = require('../../src/identity/utils/signature');
const { IdentityMetadataWrapper } = require('@celo/contractkit');

const mockNames = {
    1: 'Celo',
    2: '',
    3: ''
}

const mockDomains = {
    1: 'test.com',
    2: 'orco.dev'
}

const mockStorageURLs = {
    1 : ''
}

const mockAuthorizedSigners = {
    VOTE: '',
    VALIDATOR: '',
    ATTESTATION: ''
}

// TODO: Test with ganache
describe('Add identity claims', () => {
    describe('Add name claim', () => {
        it('recovers the claims when signed by the account', async () => {
            const contractkit = getContractKitFromWeb3();
            const claim = createNameClaim(mockNames[1]);
            const signer = await getSigner(mockAccounts[1], contractkit);

            const parsedMetadata = await addClaim(claim, mockAccounts[1], contractkit, signer);
            const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);

            expect(nameClaim.name).toEqual(name);
        });
        it('recovers the claims when signed by the account\'s authorized signer', async () => {
            it('recovers the claims when signed by the account\'s authorized vote signer', async () => {
                const contractkit = getContractKitFromWeb3();
                const claim = createNameClaim(mockNames[1]);
                const signer = await getSigner(mockAccounts[1], contractkit, mockAuthorizedSigners.VOTE, Action.VOTE);
    
                const parsedMetadata = await addClaim(claim, mockAccounts[1], contractkit, signer);
                const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);
    
                expect(nameClaim.name).toEqual(name);
            });
            it('recovers the claims when signed by the account\'s authorized validator signer', async () => {
                const contractkit = getContractKitFromWeb3();
                const claim = createNameClaim(mockNames[1]);
                const signer = await getSigner(mockAccounts[1], contractkit, mockAuthorizedSigners.VALIDATOR, Action.VALIDATOR);
    
                const parsedMetadata = await addClaim(claim, mockAccounts[1], contractkit, signer);
                const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);
    
                expect(nameClaim.name).toEqual(name);
            });
            it('recovers the claims when signed by the account\'s authorized attestation signer', async () => {
                const contractkit = getContractKitFromWeb3();
                const claim = createNameClaim(mockNames[1]);
                const signer = await getSigner(mockAccounts[1], contractkit, mockAuthorizedSigners.ATTESTATION, Action.ATTESTATION);
    
                const parsedMetadata = await addClaim(claim, mockAccounts[1], contractkit, signer);
                const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);
    
                expect(nameClaim.name).toEqual(name);
            });
        });
        it('rejects the claims when signed by other account', async () => {
            const contractkit = getContractKitFromWeb3();
            const claim = createNameClaim(mockNames[1]);
            const signer = await getSigner(mockAccounts[1], contractkit);

            const parsedMetadata = await addClaim(claim, mockAccounts[2], contractkit, signer);
            const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);

            expect(nameClaim.name).toEqual(name);
        });
    });
    describe('Add domain claim', () => {
        it('recovers the claims when signed by the account', async () => {

        });
        it('recovers the claims when signed by the account\'s authorized signer', async () => {
            it('recovers the claims when signed by the account\'s authorized vote signer', async () => {

            });
            it('recovers the claims when signed by the account\'s authorized validator signer', async () => {

            });
            it('recovers the claims when signed by the account\'s authorized attestation signer', async () => {

            });
        });
        it('rejects the claims when signed by other account', async () => {

        });
    });
    describe('Add storage claim', () => {
        it('recovers the claims when signed by the account', async () => {

        });
        it('recovers the claims when signed by the account\'s authorized signer', async () => {
            it('recovers the claims when signed by the account\'s authorized vote signer', async () => {

            });
            it('recovers the claims when signed by the account\'s authorized validator signer', async () => {

            });
            it('recovers the claims when signed by the account\'s authorized attestation signer', async () => {

            });
        });
        it('rejects the claims when signed by other account', async () => {

        });
    });
});