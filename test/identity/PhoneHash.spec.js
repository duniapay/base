const expect = require('chai').expect
const isHexStrct = require('web3-utils').isHexStrict;
const { PhoneHash } = require('../../src/identity/PhoneHash');

const mockPhoneNumber = '+14155550000'
const mockSalt = '0x85fda320421a994e'

let phoneHash = null;

describe('Class PhoneHash', () => {
    beforeEach (() => {
        phoneHash = new PhoneHash(mockPhoneNumber);
    });

    describe('Constructor', () => {
        it('should initialize properly', () => {

        });
    });

    describe('Get phone hash', () => {
        it('should correctly get the phone hash', () => {
            phoneHash.pepper = mockSalt;
            expect(phoneHash.getPhoneHash()).to.equal('0xe277f12bb7dfad594c0823d64012f430d9572d06a2aed0b99c961e949274eedc');
        });
    });

    describe('Get phone hash input', () => {
        it('should correctly get the phone hash input', () => {
            phoneHash.pepper = mockSalt;
            expect(phoneHash.getPhoneHashInput()).to.equal('tel://+14155550000__0x85fda320421a994e');
        });
    });

    describe('Get pepper', () => {
        describe('Pre-defined pepper', () => {
            it('should get the salt given', () => {
                expect(phoneHash.getPeper(mockSalt)).to.equal(mockSalt);
            });
        });

        // describe('Generated pepper', () => {
        //     it('should generate a random 8 bytes HEX string with 16 characters preficed with "0x"', () => {
        //         expect(phoneHash.getPeper().length).to.equal(16);
        //         expect(isHexStrct(phoneHash.getPeper())).to.equal(true);
        //     });
        // });
    });
});
