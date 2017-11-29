const Storage = artifacts.require("./Storage.sol");
const owner = web3.eth.accounts[0]

module.exports = deployer => {
  deployer.deploy(Storage, { from: owner, gas: 4e6 })
}
