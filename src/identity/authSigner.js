const AuthenticationMethod = require('@celo/contractkit').OdisUtils.Query.AuthenticationMethod;
const getContractKit = require('./account').getContractKit;

class AuthenticationSigner {
    constructor(authenticationMethod) {
        this.authenticationMethod = authenticationMethod;
    }
}

class WalletKeySigner extends AuthenticationSigner {
    constructor(contractKit) {
        super(AuthenticationMethod.WALLET_KEY);

        this.contractKit = contractKit;
    }
}

class EncryptionKeySigner extends AuthenticationSigner {
    constructor(rawKey) {
        super(AuthenticationMethod.ENCRYPTION_KEY);
        
        this.rawKey = rawKey;
    }
}

function getAuthSigner(account) {
    const walletKeySigner = new WalletKeySigner(getContractKit(account));

    return walletKeySigner;
}

module.exports.getAuthSigner = getAuthSigner;