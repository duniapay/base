const AuthenticationMethod = require('@celo/contractkit').OdisUtils.Query.AuthenticationMethod;
const { getContractKit } = require('./account');
const { isAccountUpToDate } = require('./account');

let dek = false;

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
    let authSigner;
    const contractKit = getContractKit(account);

    if (dek) {
        const accountWrapper = contractKit.contracts.getAccounts();
        const dataEncryptionKey = accountWrapper.getDataEncryptionKey(account);

        const upToDate = isAccountUpToDate(dataEncryptionKey);

        if (upToDate) {
            authSigner = new EncryptionKeySigner(dataEncryptionKey);
        }
    } else {
        authSigner = new WalletKeySigner(contractKit);
    }

    return authSigner;
}

module.exports.getAuthSigner = getAuthSigner;