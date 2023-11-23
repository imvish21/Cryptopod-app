const EtherTranscation = artifacts.require("./ether_transaction.sol"); // Ensure the correct name is used

module.exports = function (deployer) {
  deployer.deploy(EtherTranscation,{ gas:6721975 });
};
