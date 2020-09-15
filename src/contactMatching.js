function getContacts(phoneNumber) {

}

function isAccountVerified(attestationStat, numAttestationsRequired) {
    let numAttestationsRemaining = numAttestationsRequired - attestationStat.completed;
    let fractionAttestation;
    if (attestationStat.total < 1) {
        fractionAttestation = 0;
    } else {
        fractionAttestation = attestationStat.completed / attestationStat.total;
    }

    return numAttestationsRemaining <= 0 && fractionAttestation >= attestationThreshold;
}