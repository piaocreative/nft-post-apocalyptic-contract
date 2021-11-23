const HDWalletProvider = require('@truffle/hdwallet-provider');
const web3 = require("web3");
const fs = require('fs');
const path = require("path");
require('dotenv').config()

//*vars
const MNEMONIC = process.env.MNEMONIC
const API_KEY = process.env.NODE_KEY

if (!MNEMONIC || !API_KEY) {
  console.error("Please set a mnemonic and ALCHEMY_KEY or INFURA_KEY.");
  process.exit(0);
}


//* Remember to write the nft address in manually after deploying the contract
const NFT_CONTRACT_ADDRESS = ""
const OWNER_ADDRESS = "0xc9f3A19f0d6f383c5026E55ba3F2C6d2886bB7f6";
const MUMBAI = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}`
const NUM_ITEMS = 2000;


//*Parse the contract artifact for ABI reference.
let rawdata = fs.readFileSync(path.resolve(__dirname, "../build/contracts/PostApocalypticItem.json"));
let contractAbi = JSON.parse(rawdata);
const NFT_ABI = contractAbi.abi

async function main() {

  try {
    //*define web3, contract and wallet instances
    const provider = new HDWalletProvider(
      MNEMONIC,
      MUMBAI
    );

    const web3Instance = new web3(provider);

    const nftContract = new web3Instance.eth.Contract(
      NFT_ABI,
      NFT_CONTRACT_ADDRESS,
    );


      //* just mint 
    await nftContract.methods
      .mintItem(OWNER_ADDRESS, `https://post-apocalyptic-api.herokuapp.com/api/token`)
      .send({ from: OWNER_ADDRESS }).then(console.log('minted')).catch(error => console.log(error));


    //* mint for a certain amount
    /*
    for (var i = 1; i < NUM_ITEMS; i++) {
      await nftContract.methods
        .mintItem(OWNER_ADDRESS, `https://ipfs.io/ipfs/QmZ13J2TyXTKjjyA46rYENRQYxEKjGtG6qyxUSXwhJZmZt/${i}.json`)
        .send({ from: OWNER_ADDRESS }).then(console.log('minted')).catch(error => console.log(error));
    }
    */
  }
  
  catch (e) {
    console.log(e)
  }
}

//invoke
main().then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
