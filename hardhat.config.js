require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'INSERT_ALCHEMY_URL_HERE',
      accounts: ['INSERT_PRIVATE_KEY_HERE'],
    },
  },
};