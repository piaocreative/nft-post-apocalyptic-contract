// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PostApocalypticItem is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // set contract name and ticker. 
    constructor() ERC721("Post-Apocalyptic", "PA") {}

    //get the current supply of tokens
    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }

    // for opensea collection 
    function contractURI() public pure returns (string memory) {
        return "https://ipfs.io/ipfs/QmYT7GEes9f7yQw8xKZiYJ1akU7eFpJ8DekVRTrwxDMtSt";
    }
    
    function mintItem(address player, string memory tokenURI)
        public
        payable
        returns (uint256)
    {
        uint256 price = 5 * 10 ** 16;
        require(msg.value >= price, "Value should be over 0.05 ETH");
        payable(owner()).transfer(msg.value);
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}