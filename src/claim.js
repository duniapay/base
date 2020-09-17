const { JsonWebTokenError } = require("jsonwebtoken");

const CLAIM_TYPES = {
    NAME: "NAME",
    DOMAIN: "DOMAIN",
    STORAGE: "STORAGE"
}

function hashClaim(claim) {
}

function hashClaims(claims) {

}

function serializeClaim(claim) {
    return JSON.stringify(claim);
}

function now() {
    return Math.round(new Date().getTime() / 1000);
}


function createNameClaim(name) {
    let claim = {};

    claim[content] = name;
    claim[timestamp] = now();
    claim[type] = CLAIM_TYPES.NAME;
}

function createDomainClaim(domain) {
    let claim = {};
    
    claim[content] = domain;
    claim[timestamp] = now();
    claim[type] = CLAIM_TYPES.DOMAIN;
}

function createStorageClaim(storageURL) {
    let claim = {};
    
    claim[content] = storageURL;
    claim[timestamp] = now();
    claim[type] = CLAIM_TYPES.STORAGE;
}