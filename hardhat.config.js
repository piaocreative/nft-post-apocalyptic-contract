/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-web3");
require('dotenv').config();

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
      }
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/8496771a85054f7e94a820dd32178cc4",
      accounts: ["9888b06aeac45d6f31f7660b90f842d600e533ebb0ab4ae69d57ee4a49814280"]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      // accounts: ["35bd7b604364295b2c4c81d40a2c1b6fc80cc04e96abd2e3cec874b831314f3e"]
      accounts: ["7e225dfcc40c355a7cf4a34cf198be44b9c58c560a7becf3cda5c726d8ad8efa"]
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  mocha: {
    timeout: 999999
  },
  etherscan: {
    apiKey: "12IKYJ1C97KRAW3CAYA1ND334J8XUQKRRU"
  }
};
