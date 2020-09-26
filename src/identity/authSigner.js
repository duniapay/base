const AuthenticationMethod = require('@celo/contractkit').OdisUtils.Query.AuthenticationMethod;

class AuthenticationSigner {
    constructor(authenticationMethod) {
        this.authenticationMethod = authenticationMethod;
    }
}

class WalletKeySigner extends Signer {
    constructor(contractKit) {
        super(AuthenticationMethod.WALLET_KEY);

        this.contractKit = contractKit;
    }
}

class EncryptionKeySigner extends Signer {
    constructor(rawKey) {
        super(AuthenticationMethod.ENCRYPTION_KEY);
        
        this.rawKey = rawKey;
    }
}

function getAuthSigner(account) {
    // TODO
}

module.exports.getAuthSigner = getAuthSigner;