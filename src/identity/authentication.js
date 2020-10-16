const { AuthenticationMethod } = require('@celo/contractkit').OdisUtils.Query;
const { getContractKit } = require('./account');

let dek = false;

class AuthenticationSigner {
    constructor(authenticationMethod) {
        this.authenticationMethod = authenticationMethod;
    }
}

class EncryptionKeySigner extends AuthenticationSigner {
    constructor(rawKey) {
        super(AuthenticationMethod.ENCRYPTION_KEY);

        this.rawKey = rawKey;
    }
}

class WalletKeySigner extends AuthenticationSigner {
    constructor(contractKit) {
        super(AuthenticationMethod.WALLET_KEY);

        this.contractKit = contractKit;
    }
}

function getAuthSigner(account) {
    let authSigner;

    const contractKit = getContractKit(account);

    if (dek) {
        // authSigner = new EncryptionKeySigner(privateDataKey);
    } else {
        authSigner = new WalletKeySigner(contractKit);
    }

    return authSigner;
}

module.exports.getAuthSigner = getAuthSigner;