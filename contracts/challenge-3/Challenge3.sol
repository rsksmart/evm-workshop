// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

contract Challenge3 {

    mapping (uint256 => uint256) values; //storage slot 0

    constructor() {}

    function writeToMapping(uint256 key, uint256 val) external {
        values[key] = val;
    }

    function readFromMapping(uint256 key) external view returns (uint256) {
        return values[key];
    }

    function writeToCustomMapping(uint256 slot, uint256 key, uint256 val) external returns (bool) {
        //calculate the storage location and write to it using assembly. it should store the value in the same storage location as writeToMapping
    }

    function readFromCustomMapping(uint256 slot, uint256 key) external view returns (uint256) {
         //calculate the storage location and read from it using assembly. it should return the same value as readFromMapping

         return 0; //just for the project to compile. replace with the actual value
    }
}
