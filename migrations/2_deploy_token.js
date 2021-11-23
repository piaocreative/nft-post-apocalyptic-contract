const nft = artifacts.require("PostApocalypticItem");

module.exports = async function (deployer) {
 await deployer.deploy(nft);
};
