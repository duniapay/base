// import CLAIM_TYPES from "./claim.js";

class IdentityMetadataWrapper {
    constructor(data) {
        this.data = data;
    }

    getClaims() {
        return this.data.claims;
    }

    addClaim(claim) {
        switch (claim.type) {
            case CLAIM_TYPES.NAME:
                break;
            case CLAIM_TYPES.DOMAIN:
                break;

            case CLAIM_TYPES.STORAGE:
                break;
            default:

        }
    }

    toString() {
        return JSON.stringify({claims: this.data.claims, meta: this.data.meta});
    }
}

export default {
    CLAIM_TYPES
}