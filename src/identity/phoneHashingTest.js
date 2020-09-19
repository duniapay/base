var expect = require('chai').expect
var phoneHashing = require('./phoneHashing')

const phoneNumber = '+14155550000'
const salt = '0x85fda320421a994e'

describe('Phone hash', () => {
    describe('Phone hash input', () => {
        it('Phone hash input without salt', () => {
            expect(phoneHashing.getHashInput(phoneNumber)).to.equal('tel://+14155550000');
        });

        it('Phone hash input with salt', () => {
            expect(phoneHashing.getHashInput(phoneNumber, salt)).to.equal('tel://+14155550000__0x85fda320421a994e');
        });
    });
    
    describe('Phone hash output', () => {
        it('Phone hash output without salt', () => {
            expect(phoneHashing.getPhoneHash(phoneNumber, undefined)).to.equal('0xe03039bbfa09350721f3a8253793efbacad3be7639d6d2ab4f0cd5f186933135');
        });

        it('Phone hash output with salt', () => {
            expect(phoneHashing.getPhoneHash(phoneNumber, salt)).to.equal('0xe277f12bb7dfad594c0823d64012f430d9572d06a2aed0b99c961e949274eedc');
        });
    });
});

console.log(phoneHashing.getPhoneHash(phoneNumber, salt));
