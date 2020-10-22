function getSigner(address, contractKit) {
    return {
        sign: async (message) => contractKit.web3.eth.sign(message, address)
    }
}

module.exports.getSigner = getSigner;