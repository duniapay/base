const isAddress = require("web3-utils").isAddress;
const { ParsedPhoneNumber } = require('../identity/PhoneNumber');
const { PhoneHash } = require('../identity/PhoneHash');
const { phone_address, address_attestationStat } = require('../models/index');
const { creatHash } = require('crypto').createHash;
const ec = require('elliptic');

const AuthenticationMethod = {
    WALLET_KEY = 'wallet_key',
    ENCRYPTION_KEY = 'encryption_key',
}

const OdisError = {
    ODIS_QUOTA_ERROR = 'odisQuotaError',
    ODIS_INPUT_ERROR = 'odisBadInputError',
    ODIS_AUTH_ERROR = 'odisAuthError',
    ODIS_CLIENT_ERROR = 'Unknown Client Error',
}

function setAddressPhoneHash(address, phoneNumber) {
    if (!isValidAddress(address)) {
        throw new Error("Invalid address: " + address);
    }

    const entry = {};

    const phoneHash = new PhoneHash(phoneNumber);

    entry[address] = address;
    entry[phoneHash] = phoneHash.phoneHash;
    entry[pepper] = phoneHash.pepper;

    phone_address.push(entry);
}

function getAddressFromPhoneNumber(phoneNumber) {
    const phoneHash = new PhoneHash(phoneNumber).phoneHash;

    for (const entry in phone_address) {
        if (entry[phoneHash] === PhoneHash) {
            return entry[address];
        }
    }

    return null;
}



function getPhoneHashFromAddress(address) {
    if (!isValidAddress(address)) {
        throw new Error("Invalid address: " + address);
    }

    for (i = 0; i < phone_address.length; i++) {
        if (phone_address[i][address] = address) {
            return phone_address[i][phoneHash];
        }
    }
}

function getAttestationStatFromAddress(address) {
    for (const entry in address_attestationStat) {
        if (entry[address] = address) {
            return entry[attestationStat];
        }
    }

    return null;
}

function isValidAddress(address) {
    return isAddress(address);
}

function getServiceContext(contextName = 'mainnet') {
    switch (contextName) {
      case 'alfajores':
        return ODIS_ALFAJORES_CONTEXT
      case 'alfajoresstaging':
        return ODIS_ALFAJORESSTAGING_CONTEXT
      default:
        return ODIS_MAINNET_CONTEXT
    }
  }

/**
 * Make a request to lookup the phone number identifier or perform matchmaking
 * @param signer type of key to sign with
 * @param body request body
 * @param context contains service URL
 * @param endpoint endpoint to hit
 */
function queryOdis(signer,body,context,endpoint) {
    const bodyString = JSON.stringify(body)
  
    let authHeader = ''
    if (signer.authenticationMethod === AuthenticationMethod.ENCRYPTION_KEY) {
      const key = ec.keyFromPrivate(hexToBuffer(signer.rawKey))
      authHeader = JSON.stringify(key.sign(bodyString).toDER())
  
      // Verify signature before sending
      const dek = key.getPublic(true, 'hex')
      const pubkey = ec.keyFromPublic(trimLeading0x(dek), 'hex')
      const validSignature = pubkey.verify(bodyString, JSON.parse(authHeader))

    } else {
      authHeader = await signer.contractKit.web3.eth.sign(bodyString, body.account)
    }
  
    const { odisUrl } = context
  
    const dontRetry = [
      OdisError.ODIS_QUOTA_ERROR,
      OdisError.ODIS_AUTH_ERROR,
      OdisError.ODIS_INPUT_ERROR,
      OdisError.ODIS_CLIENT_ERROR,
    ]
  
    return (() => {
        const res = await fetch(odisUrl + endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: authHeader,
          },
          body: bodyString,
        })
  
        if (res.ok) {
          const response = res.json()
          return response
        }

        switch (res.status) {
          case 403:
            throw new Error(OdisError.ODIS_QUOTA_ERROR)
          case 400:
            throw new Error(OdisError.ODIS_INPUT_ERROR)
          case 401:
            throw new Error(OdisError.ODIS_AUTH_ERROR)
          default:
            if (res.status >= 400 && res.status < 500) {
              throw new Error()
            }
            throw new Error()
        }
      },
      3,
      dontRetry,
      []
    )
  }


function getMatchedContacts(contactList) {
    const matches = [];

    for (const phoneNumber in contactList) {
        const address = getAddressFromPhoneNumber(new ParsedPhoneNumber(phoneNumber).e164Number);
        if (address) {
            const attestationStat = getAttestationStatFromAddress(address);

            if (attestationStat && attestationStat.isVerified) {
                matches.push(phoneNumber);
            }
        }
        
    }

    return matches;
}


function isAccountVerified(attestationStat, numAttestationsRequired = 3, attestationThreshold = 0.25) {
    const numAttestationsRemaining = numAttestationsRequired - attestationStat.completed;
    const fractionAttestation = attestationStat.total < 1 ? 0 : attestationStat.completed / attestationStat.total;

    return numAttestationsRemaining <= 0 && fractionAttestation >= attestationThreshold;
}

function getPepper(sig) {
    return createHash('sha256').update(sig).digest('base64').slice(0, 13);
}

