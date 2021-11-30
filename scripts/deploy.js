const { web3 } = require("hardhat");

async function main() {
    const PostApocalypticItem = artifacts.require("PostApocalypticItem");

    const contract = await PostApocalypticItem.new();
    console.log("contract address: ", contract.address);
    /*

    yarn npx hardhat verify --network rinkeby "0x1d509599b635ac6eE8B74519f0D9360736F9F540" 

    */
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});