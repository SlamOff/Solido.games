// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ERC1155.sol";
import "./Ownable.sol";

contract SolidoCards is ERC1155, Ownable {
    uint256[] supplies = [7000,2500,500];
    uint256[] minted = [0,0,0];
    uint256[] rates = [0.001 ether, 0.01 ether, 0.1 ether];
    constructor() ERC1155("https://memepedia.ru/wp-content/uploads/2019/01/na-zabiv-6-360x270.jpg") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(uint256 id, uint256 amount) 
        public
        payable 
        onlyOwner
    {
        require(id <= supplies.length, "Token doesn't exist");
        require(id > 0, "Token doesn't exist");
        uint index = id - 1;
    
        require(minted[index] + amount <= supplies[index], "Not enough");
        require(msg.value >= amount * rates[index], "Not enough eth ether sent");
        _mint( msg.sender, id, amount, "https://memepedia.ru/wp-content/uploads/2019/01/na-zabiv-6-360x270.jpg");
        minted[index] += amount;

    }

    // function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts)
    //     public
    //     onlyOwner
    // {
    //     _mintBatch(to, ids, amounts, data);
    // }
}