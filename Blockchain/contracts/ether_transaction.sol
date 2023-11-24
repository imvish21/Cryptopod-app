// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract ether_transaction {
    address public owner;

    event EtherTransferred(address indexed from, address indexed to, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function getBalance() public view returns (uint256) {
        require(msg.sender == owner, "Only the owner can check the balance");
        return address(this).balance;
    }

    function transfer(address payable recipient) public payable onlyOwner {
        require(recipient != address(0), "Invalid recipient address");
        require(msg.value > 0, "No ether sent");

        recipient.transfer(msg.value);

        emit EtherTransferred(msg.sender, recipient, msg.value);
    }

    receive() external payable {}
}
