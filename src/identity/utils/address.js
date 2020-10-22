const { privateToAddress, toChecksumAddress } = require('ethereumjs-util');
const { normalizeAddressWith0x, trimLeading0x, ensureLeading0x, hexToBuffer } = require('@celo/base');
const { privateKeyToAddress } = require('@celo/utils');