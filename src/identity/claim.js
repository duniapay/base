const { serializeClaim } = require('@celo/contractkit/lib/identity/claims/claim');

const soliditySha3 = require('web3-utils').soliditySha3;

now = () => Math.round(new Date.getTime() / 1000)

hashMessage = (message) => soliditySha3({ type: 'string', value: message })

const ClaimType = {
    NAME: "NAME",
    DOMAIN: "DOMAIN",
    STORAGE: "STORAGE"

    // ATTESTATION_SERVICE_URL = 'ATTESTATION_SERVICE_URL',
    // ACCOUNT = 'ACCOUNT',
    // KEYBASE = 'KEYBASE',
    // PROFILE_PICTURE = 'PROFILE_PICTURE',
    // TWITTER = 'TWITTER'
}

class Claim {
    constructor() {
        this.timestamp = now();
    }

    static serialize(claim) {
        return JSON.stringify(claim);
    }

    static hashOfClaim(claim) {
        hashMessage(serializeClaim(claim));
    }

    static hashOfClaims(claims) {
        return hashMessage(claims.map(this.hashOfClaim).join(''));
    }
}

class NameClaim extends Claim {
    constructor(name) {
        super();

        this.name = name;
        this.type = ClaimType.NAME;
    }
}

class DomainClaim extends Claim {
    constructor(domain) {
        super();

        this.domain = domain;
        this.type = ClaimType.DOMAIN;
    }
}

class StorageClaim extends Claim {
    constructor(address) {
        super();

        this.address = address;
        this.type = ClaimType.STORAGE;
    }
}