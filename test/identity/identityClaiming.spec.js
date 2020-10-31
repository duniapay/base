const expect = require('chai').expect;
const { createNameClaim, createDomainClaim, createStorageClaim } = require('@celo/contractkit/lib/identity/claims/claim');
const { ClaimTypes } = require('@celo/contractkit/lib/identity');
const { addClaim } = require('../../src/identity/identityClaiming');
const { getContractKit } = require('../../src/identity/utils/account');
const { Action, getSigner } = require('../../src/identity/utils/signature');

const mockAccounts = {
    defaultAccount: {
        privateKey: '0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d',
        address: '0x5409ED021D9299bf6814279A6A1411A7e866A631'
    },
    otherAccount: {
        privateKey: '0x5d862464fe9303452126c8bc94274b8c5f9874cbd219789b3eb2128075a76f72',
        address: '0x6Ecbe1DB9EF729CBe972C83Fb886247691Fb6beb'
    }
}

const mockAuthorizedSigners = {
    VOTE: '0xE36Ea790bc9d7AB70C55260C66D52b1eca985f84',
    VALIDATOR: '0xE834EC434DABA538cd1b9Fe1582052B880BD7e63',
    ATTESTATION: '0x78dc5D2D739606d31509C31d654056A45185ECb6'
}

const mockName = 'Celo'

const mockDomain = 'test.com'

const mockStorageURL = 'http://example.com/root'

describe('Add identity claims', () => {
    describe('Add name claim', () => {
        it('recovers the claims when signed by the account', async () => {
            const contractkit = getContractKit(mockAccounts.defaultAccount);
            const claim = createNameClaim(mockName);
            const signer = await getSigner(mockAccounts.defaultAccount, contractkit);

            const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
            const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);

            expect(nameClaim.name).to.equal(mockName);
        });
        it('recovers the claims when signed by the account\'s authorized signer', async () => {
            it('recovers the claims when signed by the account\'s authorized vote signer', async () => {
                const contractkit = getContractKit(mockAccounts.defaultAccount);
                const claim = createNameClaim(mockName);
                const signer = await getSigner(mockAccounts.defaultAccount, contractkit, mockAuthorizedSigners.VOTE, Action.VOTE);
    
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
                const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);
    
                expect(nameClaim.name).toEqual(name);
            });
            it('recovers the claims when signed by the account\'s authorized validator signer', async () => {
                const contractkit = getContractKit(mockAccounts.defaultAccount);
                const claim = createNameClaim(mockName);
                const signer = await getSigner(mockAccounts.defaultAccount, contractkit, mockAuthorizedSigners.VALIDATOR, Action.VALIDATOR);
    
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
                const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);
    
                expect(nameClaim.name).toEqual(name);
            });
            it('recovers the claims when signed by the account\'s authorized attestation signer', async () => {
                const contractkit = getContractKit(mockAccounts.defaultAccount);
                const claim = createNameClaim(mockName);
                const signer = await getSigner(mockAccounts.defaultAccount, contractkit, mockAuthorizedSigners.ATTESTATION, Action.ATTESTATION);
    
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
                const nameClaim = parsedMetadata.findClaim(ClaimTypes.NAME);
    
                expect(nameClaim.name).toEqual(name);
            });
        });
        it('rejects the claims when signed by other account', async () => {
            const contractkit = getContractKit(mockAccounts.defaultAccount);
            const claim = createNameClaim(mockName);
            const signer = await getSigner(mockAccounts.otherAccount, contractkit);

            try {
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
            } catch (error) {
                expect(error.message).to.contain('unknown account');
            }
        });
    });
    describe('Add domain claim', () => {
        it('recovers the claims when signed by the account', async () => {
            const contractkit = getContractKit(mockAccounts.defaultAccount);
            const claim = createDomainClaim(mockDomain);
            const signer = await getSigner(mockAccounts.defaultAccount, contractkit);

            const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
            const domainClaim = parsedMetadata.findClaim(ClaimTypes.DOMAIN);

            expect(domainClaim.domain).to.equal(mockDomain);
        });
        it('recovers the claims when signed by the account\'s authorized signer', async () => {
            it('recovers the claims when signed by the account\'s authorized vote signer', async () => {
                const contractkit = getContractKit(mockAccounts.defaultAccount);
                const claim = createDomainClaim(mockDomain);
                const signer = await getSigner(mockAccounts.defaultAccount, contractkit, mockAuthorizedSigners.VOTE, Action.VOTE);
    
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
                const domainClaim = parsedMetadata.findClaim(ClaimTypes.DOMAIN);
    
                expect(domainClaim.domain).toEqual(domain);
            });
            it('recovers the claims when signed by the account\'s authorized validator signer', async () => {
                const contractkit = getContractKit(mockAccounts.defaultAccount);
                const claim = createDomainClaim(mockDomain);
                const signer = await getSigner(mockAccounts.defaultAccount, contractkit, mockAuthorizedSigners.VALIDATOR, Action.VALIDATOR);
    
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
                const domainClaim = parsedMetadata.findClaim(ClaimTypes.DOMAIN);
    
                expect(domainClaim.domain).toEqual(domain);
            });
            it('recovers the claims when signed by the account\'s authorized attestation signer', async () => {
                const contractkit = getContractKit(mockAccounts.defaultAccount);
                const claim = createDomainClaim(mockDomain);
                const signer = await getSigner(mockAccounts.defaultAccount, contractkit, mockAuthorizedSigners.ATTESTATION, Action.ATTESTATION);
    
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
                const domainClaim = parsedMetadata.findClaim(ClaimTypes.DOMAIN);
    
                expect(domainClaim.domain).toEqual(domain);
            });
        });
        it('rejects the claims when signed by other account', async () => {
            const contractkit = getContractKit(mockAccounts.defaultAccount);
            const claim = createDomainClaim(mockDomain);
            const signer = await getSigner(mockAccounts.otherAccount, contractkit);

            try {
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
            } catch (error) {
                expect(error.message).to.contain('unknown account');
            }
        });
    });
    describe('Add storage claim', () => {
        it('recovers the claims when signed by the account', async () => {
            const contractkit = getContractKit(mockAccounts.defaultAccount);
            const claim = createStorageClaim(mockStorageURL);
            const signer = await getSigner(mockAccounts.defaultAccount, contractkit);

            const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
            const storageClaim = parsedMetadata.findClaim(ClaimTypes.STORAGE);

            expect(storageClaim.address).to.equal(mockStorageURL);
        });
        it('recovers the claims when signed by the account\'s authorized signer', async () => {
            it('recovers the claims when signed by the account\'s authorized vote signer', async () => {
                const contractkit = getContractKit(mockAccounts.defaultAccount);
                const claim = createStorageClaim(mockStorageURL);
                const signer = await getSigner(mockAccounts.defaultAccount, contractkit, mockAuthorizedSigners.VOTE, Action.VOTE);
    
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
                const storageClaim = parsedMetadata.findClaim(ClaimTypes.STORAGE);
    
                expect(storageClaim.address).toEqual(storage);
            });
            it('recovers the claims when signed by the account\'s authorized validator signer', async () => {
                const contractkit = getContractKit(mockAccounts.defaultAccount);
                const claim = createStorageClaim(mockStorageURL);
                const signer = await getSigner(mockAccounts.defaultAccount, contractkit, mockAuthorizedSigners.VALIDATOR, Action.VALIDATOR);
    
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
                const storageClaim = parsedMetadata.findClaim(ClaimTypes.STORAGE);
    
                expect(storageClaim.address).toEqual(storage);
            });
            it('recovers the claims when signed by the account\'s authorized attestation signer', async () => {
                const contractkit = getContractKit(mockAccounts.defaultAccount);
                const claim = createStorageClaim(mockStorageURL);
                const signer = await getSigner(mockAccounts.defaultAccount, contractkit, mockAuthorizedSigners.ATTESTATION, Action.ATTESTATION);
    
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
                const storageClaim = parsedMetadata.findClaim(ClaimTypes.STORAGE);
    
                expect(storageClaim.address).toEqual(storage);
            });
        });
        it('rejects the claims when signed by other account', async () => {
            const contractkit = getContractKit(mockAccounts.defaultAccount);
            const claim = createStorageClaim(mockStorageURL);
            const signer = await getSigner(mockAccounts.otherAccount, contractkit);

            try {
                const parsedMetadata = await addClaim(claim, mockAccounts.defaultAccount, contractkit, signer);
            } catch (error) {
                expect(error.message).to.contain('unknown account');
            }
        });
    });
});