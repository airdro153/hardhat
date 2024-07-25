import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleStorage", function () {
  it("Should return the new storage value once it's changed", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    await simpleStorage.set(42);
    expect(await simpleStorage.get()).to.equal(42);
  });
});
