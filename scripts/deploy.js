const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Alex", "Steve", "Herobrine"],       // Names
    ["QmZpu5qjHL8C1CDB3FPSWFG8bTFNv8Etm47XdR7nzsJVgR", // Images
    "QmVWp8YjQ9inQ7EC44WjnC1dV97j9iWSBNkLtAjBzhxD4A", 
    "QmStNwJGmvA3wGdKCB71veinECBXEjGwZ9cRadzFHUDRBn"],
    [100, 200, 300],                    // HP values
    [50, 100, 200],                       // Attack damage values
    "Wither", // Boss name
    "QmPrvLBZqQtu5rhDmZg1ijdjFtQLQaoTbufDjADKyoGTfT", // Boss image
    10000, // Boss hp
    100 // Boss attack damage
  );
  
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();