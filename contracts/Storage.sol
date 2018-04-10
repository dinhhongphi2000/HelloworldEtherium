pragma solidity ^0.4.10;
contract Storage {
    uint256 storedData;
    function set(uint256 data) public {
        storedData = data;
    }

    function get() public returns (string) {
        return "Hello world";
    }

    function caculate(uint256 a, uint256 b) public returns (uint256){
        return a + b;
    }
}