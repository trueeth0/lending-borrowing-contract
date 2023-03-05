const { ethers } = require("hardhat");

async function main() {
  // const twopawsContract = await ethers.getContractFactory("TwoPaws");
  // let twopaws = await twopawsContract.deploy();
  // await twopaws.deployed();

  // console.log(twopaws.address);

  const tokenContract = await ethers.getContractFactory("Protocol");
  let token = await tokenContract.deploy();
  await token.deployed();

  console.log(token.address);
}

main()
  .then(() => {
    console.log("complete");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
