const EC = require('elliptic').ec;

const ec = new EC('secp256k1')

const AuthenticationMethod = {
    WALLET_KEY = 'wallet_key',
    ENCRYPTION_KEY = 'encryption_key',
}


const OdisErrorMessageMessage = {
    ODIS_QUOTA_ERROR = 'odisQuotaError',
    ODIS_INPUT_ERROR = 'odisBadInputError',
    ODIS_AUTH_ERROR = 'odisAuthError',
    ODIS_CLIENT_ERROR = 'Unknown Client Error',
}

const OdisServiceContext = {
    ODIS_MAINNET_CONTEXT = {
        odisUrl: 'https://us-central1-celo-pgpnp-mainnet.cloudfunctions.net',
        odisPubKey: 'FvreHfLmhBjwxHxsxeyrcOLtSonC9j7K3WrS4QapYsQH6LdaDTaNGmnlQMfFY04Bp/K4wAvqQwO9/bqPVCKf8Ze8OZo8Frmog4JY4xAiwrsqOXxug11+htjEe1pj4uMA'
    },

    ODIS_ALFAJORES_CONTEXT = {
        odisUrl: 'https://us-central1-celo-phone-number-privacy.cloudfunctions.net',
        odisPubKey: 'kPoRxWdEdZ/Nd3uQnp3FJFs54zuiS+ksqvOm9x8vY6KHPG8jrfqysvIRU0wtqYsBKA7SoAsICMBv8C/Fb2ZpDOqhSqvr/sZbZoHmQfvbqrzbtDIPvUIrHgRS0ydJCMsA'
    },

    ODIS_ALFAJORESSTAGING_CONTEXT = {
        odisUrl: 'https://us-central1-celo-phone-number-privacy-stg.cloudfunctions.net',
        odisPubKey: '7FsWGsFnmVvRfMDpzz95Np76wf/1sPaK0Og9yiB+P8QbjiC8FV67NBans9hzZEkBaQMhiapzgMR6CkZIZPvgwQboAxl65JWRZecGe5V3XO4sdKeNemdAZ2TzQuWkuZoA'
    }
}

function getServiceContext(contextName = 'mainnet') {
    switch (contextName) {
      case 'alfajores':
        return ODIS_ALFAJORES_CONTEXT;

      case 'alfajoresstaging':
        return ODIS_ALFAJORESSTAGING_CONTEXT;

      default:
        return ODIS_MAINNET_CONTEXT;
    }
}

function queryOdis(signer, body,context,endpoint) {
    const bodyString = JSON.stringify(body)
    let authHeader = ''

    if (signer.authenticationMethod === AuthenticationMethod.ENCRYPTION_KEY) {
      const key = ec.keyFromPrivate(hexToBuffer(signer.rawKey))
      authHeader = JSON.stringify(key.sign(bodyString).toDER())
  
      const dek = key.getPublic(true, 'hex')
      const pubkey = ec.keyFromPublic(trimLeading0x(dek), 'hex')
      const validSignature = pubkey.verify(bodyString, JSON.parse(authHeader))
    } else {
      authHeader = await signer.contractKit.web3.eth.sign(bodyString, body.account)
    }
  
    const odisUrl = context.odisUrl
  
    const dontRetry = [
      OdisErrorMessageMessage.ODIS_QUOTA_ERROR,
      OdisErrorMessageMessage.ODIS_AUTH_ERROR,
      OdisErrorMessageMessage.ODIS_INPUT_ERROR,
      OdisErrorMessageMessage.ODIS_CLIENT_ERROR,
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
            throw new Error(OdisErrorMessage.ODIS_QUOTA_ERROR)
          case 400:
            throw new Error(OdisErrorMessage.ODIS_INPUT_ERROR)
          case 401:
            throw new Error(OdisErrorMessage.ODIS_AUTH_ERROR)
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
