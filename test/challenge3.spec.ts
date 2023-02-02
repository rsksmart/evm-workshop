import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";

describe("Solution 3", function () {
  describe("Check mapping storage key", function () {
    it.only("should write natively and read custom the same values", async function () {
      const challengeFactory = await ethers.getContractFactory("Challenge3");
      const challengeContract = await challengeFactory.deploy();

      await challengeContract.deployed();
      const key = BigNumber.from("0");
      const value = BigNumber.from("184");
      const storageSlot = BigNumber.from("0");
      await (await challengeContract.writeToMapping(key, value)).wait();

      const customMappingValue = await challengeContract.readFromCustomMapping(
        storageSlot,
        key
      );
      expect(value).to.be.equals(customMappingValue);
    });

    it.only("should write custom and read natively the same values", async function () {
      const challengeFactory = await ethers.getContractFactory("Challenge3");
      const challengeContract = await challengeFactory.deploy();

      await challengeContract.deployed();
      const key = BigNumber.from("0");
      const value = BigNumber.from("184");
      const storageSlot = BigNumber.from("0");
      await (await challengeContract.writeToCustomMapping(storageSlot, key, value)).wait();

      const customMappingValue = await challengeContract.readFromMapping(
        key
      );
      expect(value).to.be.equals(customMappingValue);
    });
  });
});
