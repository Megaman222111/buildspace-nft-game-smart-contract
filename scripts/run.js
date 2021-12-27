const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Alex", "Steve", "Herobrine"],       // Names
      ["https://github.com/Megaman222111/buildspace-nft-game-files/raw/273f2f28aa2405055ec3ff563d79958db1fb4dd3/Alex_SSBL.png", // Images
      "https://c.tenor.com/XDqwgH9HoHMAAAAC/fortnite-dance-minecraft.gif", 
      "https://github.com/Megaman222111/buildspace-nft-game-files/raw/main/Herobrine.png"],
      [100, 200, 300],                    // HP values
      [50, 100, 200],                       // Attack damage values
      "Wither", // Boss name
      "https://github.com/Megaman222111/buildspace-nft-game-files/raw/main/Wither.png", // Boss image
      10000, // Boss hp
      100 // Boss attack damage
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    console.log("Done!");
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