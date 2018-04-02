pragma solidity ^0.4.4;


contract HelloEthSalon {
  string message = "I know testing of a contract!!";

  function HelloEthSalon() {
    // constructor
  }

  function GetMessage() returns (string) {
    return message;
  }
}
